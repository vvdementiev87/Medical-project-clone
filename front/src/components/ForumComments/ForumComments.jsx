import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./ForumComments.module.scss";
import { loadAllComments } from '../../store/forum/forumAPI';

function ForumComments({ comments, url:URL, topicId }) {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.user.user?.id);
    const token = useSelector((state) => state.user.user?.token);
    
    //редактирование комментария
    const [updComment, setUpdComment] = useState(null);

	return (
		<div className={styles.list}>
			{Object.keys(comments).map((key) => {
				return (
					<section key={comments[key].id} className={styles.item}>
						<div className={styles.sidebar}>
							<img
								className={styles.avatar}
								src={comments[key]?.avatar || 'https://picsum.photos/50/50'}
								alt="avatar"
							/>
							<div className={styles.description_container}>
								<div className={styles.description}>
									<span>Автор: </span>
									<p>{comments[key].author}</p>
								</div>
								<div className={styles.description}>
									<span>Опубликовано: </span>
									<p>{comments[key].created_at}</p>
								</div>
								{comments[key].updated_at ? (
									<div className={styles.description}>
										<span>Изменено: </span>
										<p>{comments[key].updated_at}</p>
									</div>
								) : null}
							</div>
						</div>
						<div className={styles.content}>
							<div className={styles.btn_container}>
								{comments[key].author_id === user.id ? (
									isEdit ? (
										<>
											<button
												title="Save changes"
												className={styles.btn}
												onClick={() => {
													handleEdit();
												}}
											>
												<MaterialIcon name={'MdSave'} />
											</button>
											<button
												title="Close without changing"
												className={styles.btn}
												onClick={(e) => {
													setIsEdit(!isEdit);
													setValue(comments[key].description);
												}}
											>
												<MaterialIcon name={'MdClose'} />
											</button>
										</>
									) : (
										<>
											<button
												title="Edit"
												className={styles.btn}
												onClick={() => {
													setUpdComment(comments[key]);
													setIsEdit(!isEdit);
													setValue(comments[key].description);
												}}
											>
												<MaterialIcon name={'MdEditDocument'} />
											</button>
											<button
												title="Delete"
												className={styles.btn}
												onClick={(e) => {
													handleDelete(comments[key].id);
												}}
											>
												<MaterialIcon name={'MdDeleteForever'} />
											</button>
										</>
									)
								) : null}
							</div>

    async function handleUpdateSubmit(event) {
        event.preventDefault();
        let data = {
            'id': updComment.id,
            'description': updComment.description,
        };

        let response = await fetch(`${URL}forum/comments/edit`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Authorisation": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            dispatch(loadAllComments(topicId));
        } else {
            console.log(response.status);
        }
        setUpdComment(null);
    }

    // удаление комментария:
    async function handleDelete(event, id) {
        event.preventDefault();
        let response = await fetch(`${URL}forum/comments/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Authorisation": "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        if (response.ok) {
            dispatch(loadAllComments(topicId));
        } else {
            console.log(response.status);
        }
    }

    function renderUpdForm() {
        return (
            <form className={styles.forum__form_container}>
                <label className={styles.forum__form_field}>
                    <textarea type="text" placeholder='Текст' name='description' onChange={handleUpdate} value={updComment?.description} />
                </label>
                <button className={styles.forum__btn} onClick={handleUpdateSubmit}>Готово</button>
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
                                <div className={styles.comment__all_text}>
                                    <div className={styles.comment__description_container}>
                                        <p className={styles.comment__author}>{comment.author}</p>
                                        <div> 
                                            <p className={styles.comment__description}>{comment.created_at}</p>
                                            {comment.updated_at ? <p className={styles.comment__description}><span>изменен {comment.updated_at}</span></p> : null}
                                        </div>
                                    </div>
                                    <p className={styles.comment__text}>{comment.description}</p>
                                </div>
                            </div>

                            <div className={styles.comment__btn_container}>
                                {comment.author_id === currentUserId ?
                                    <>
                                        <button className={styles.comment__btn} onClick={(e) => { handleDelete(e, comment.id) }}>Удалить</button>
                                        <button className={styles.comment__btn} onClick={() => { setUpdComment(comment) }}>Изменить</button>
                                    </>
                                    : null
                                }
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
