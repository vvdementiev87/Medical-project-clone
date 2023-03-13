import styles from "./ForumComments.module.scss";

function ForumComments({ comments }) {
    //здесь будет логика получения id текущего юзера
    const currentUserId = 1;

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    let csrfToken = getCookie('csrftoken');
    
    async function handleDelete(event, id) {
        event.preventDefault();
        // fetch(`${URL}forum/posts/delete/${id}`, {
        //     method: "DELETE",
        //     credentials: "include",
        //     headers: {
        //         "X-CSRF-TOKEN" : csrfToken,
        //         "Content-Type": "application/json",
        //       },
        // })
        // .then(fetch(`${URL}forum/posts`))
        // .then((response)=>{
        //     return response.json()
        // })
        // .then ((result)=> {
        //     dispatch(setTitlesList(result));
        // })
        // .catch(error=>console.log(error));
        // setCurrentTitles([...(currentTitles.filter((item) => item.id !== id))]);
        // console.log(currentTitles);
    }

    async function handleUpdate(event) {
        //нужна логика открытия новой формы для редактирования. Новая страница или здесь же?
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
                                {comment.author_id === currentUserId?
                                    <><button className={styles.comment__btn}>Удалить</button>
                                    <button className={styles.comment__btn}>Изменить</button></>
                                    : null
                                }
                                <div className={styles.comment__description_container}>
                                    <p className={styles.comment__description}><span>Автор: </span>{comment.author}</p>
                                    <p className={styles.comment__description}><span>Опубликовано: </span>{comment.created_at}</p>
                                    {comment.updated_at?<p className={styles.comment__description}><span>Изменено: </span> {comment.updated_at}</p> : null}
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    );
}

export default ForumComments;