import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ForumComments from "../../components/ForumComments/ForumComments";
import Pagination from "../../components/Pagination";
import styles from './ForumTopic.module.scss';
import { forumURL, loadAllComments, loadPostById } from "../../store/forum/forumAPI";


function ForumTopic() {
    const URL = forumURL;
    const dispatch = useDispatch();
    const { topicId } = useParams();
    const topic = useSelector((state) => state.forum.currentPost);
    const comments = useSelector((state) => state.forum.commentList);
    
    //для пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(10);
    const [text, setText] = useState('');

    const currentUser = useSelector((state) => state.user.user);
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token);

    useEffect(() => {
        dispatch(loadAllComments(topicId));
        dispatch(loadPostById());
    }, [])
    

    function handleTextChange(event) {
        setText(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let data = {
            'post_id': topicId,
            'author_id': currentUserId,
            'description': text,
        };
        
        // отправка запроса на бэк
        let response = await fetch(`${URL}forum/comments/add`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorisation": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            dispatch(loadAllComments(topicId));
            setText('');
        } else {
            console.log(response.status);
        }
    }

    const lastCommentIndex = currentPage * commentsPerPage;
    const firstCommentIndex = lastCommentIndex - commentsPerPage;
    const currentComment = comments.slice(firstCommentIndex, lastCommentIndex);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <div className={styles.page__container}>
            <h2 className={styles.topic__title}>{topic.title}</h2>
            <div className={styles.forum__greeting}>{!currentUser ? 'Вы не вошли' : `Добро пожаловать, ${currentUser.first_name}`}</div>
            <div className={styles.page__content_container}>
                <div className={styles.topic__description}><p>{topic.description}</p></div>
                <div className={styles.topic__container}>

                    <ForumComments comments={currentComment} url={URL} topicId={topicId} />
                
                </div>

                <Pagination
                        commentsPerPage={commentsPerPage}
                        totalComments={comments.length}
                        paginate={paginate}
                />
                <form className={styles.forum__form_container}>
                    <h4 className={styles.forum__topic_title}>Ваш комментарий:</h4>
                    <label className={styles.forum__form_field}>
                        <textarea type="text" placeholder='Текст' value={text} onChange={(e) => handleTextChange(e)} />
                    </label>
                    {currentUser?
                        <button className={styles.forum__btn} onClick={(e) => handleSubmit(e)}>ОТПРАВИТЬ</button> :
                        <Link to='/login'><button className={styles.forum__btn}>Готово</button></Link>
                    }
                </form>
            </div> 
        </div>
    )
}

export default ForumTopic;
