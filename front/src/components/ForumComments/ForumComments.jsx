import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./ForumComments.module.scss";

function ForumComments({ comments, loadAllComments }) {
    //тестовые значения  
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token) || null;
    const URL = "127.0.0.1:80/api/";

    //редактирование комментария
    const [updComment, setUpdComment] = useState(null);

    function handleUpdate(e) {
        const { name, value } = e.target;
        setUpdComment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleUpdateSubmit(event) {
        event.preventDefault();
        let data = {
            'post_id': updComment.id,
            'description': updComment.description,
        };

        let response = await fetch(`${URL}forum/comments/edit`, {
            // пока так, а вообще должен быть PUT
            method: "POST",
            credentials: "include",
            headers: {
                "Authoristation": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            loadAllComments();
        } else {
            console.log(response.status);
        }
        setUpdComment(null);
    }

    // удаление комментария:
    async function handleDelete(event, id) {
        event.preventDefault();
        let response = await fetch(`${URL}forum/posts/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Authorisation": token,
                "Content-Type": "application/json",
            },
        })
        if (response.ok) {
            loadAllComments();
        } else {
            console.log(response.status);
        }
    }

    function renderUpdForm() {
        return (
            <form className={styles.forum__form_container}>
                <label className={styles.forum__form_field}>
                    <input type="text" placeholder='Текст' name='description' onChange={handleUpdate} value={updComment?.description} />
                </label>
                <button className={styles.forum__btn} onClick={handleUpdateSubmit}>ГОТОВО</button>
            </form>
        )
    }

    return (
        <div className={styles.comments__list}>
            {
                comments.map((comment) => {
                    return (
                        <section key={comment.id} className={styles.comments__item}>
                            <div className={styles.comment__content}>
                                <img className={styles.comments__avatar} src={comment.avatar} alt="avatar" />
                                <p>{comment.description}</p>
                            </div>
                            <div className={styles.comment__btn_container}>
                                {comment.author_id === currentUserId ?
                                    <>
                                        <button className={styles.comment__btn} onClick={(e) => { handleDelete(e, comment.id) }}>Удалить</button>
                                        <button className={styles.comment__btn} onClick={() => { setUpdComment(comment) }}>Изменить</button>
                                    </>
                                    : null
                                }
                                <div className={styles.comment__description_container}>
                                    <p className={styles.comment__description}><span>Автор: </span>{comment.author}</p>
                                    <p className={styles.comment__description}><span>Опубликовано: </span>{comment.created_at}</p>
                                    {comment.updated_at ? <p className={styles.comment__description}><span>Изменено: </span> {comment.updated_at}</p> : null}
                                </div>
                            </div>

                            {updComment && updComment.id === comment.id && renderUpdForm()}

                        </section>
                    )
                })
            }
        </div>
    );
}

export default ForumComments;