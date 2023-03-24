import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ForumComments from "../../components/ForumComments/ForumComments";
import Pagination from "../../components/Pagination";
import styles from './ForumTopic.module.scss';
import { mockComments } from '../../assets/mocks/forum';


function ForumTopic() {
    const { topicId } = useParams();
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(10);
    const [text, setText] = useState('');

    //тестовые значения
    const currentUser = useSelector((state) => state.user.user);
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token);
    const URL = "127.0.0.1:80/api/";

    // запрос на бэк вместо использования мок-массива
    async function loadAllComments() {
        let response = await fetch(`${URL}forum/posts/${topicId}`);
        if (response.ok) {
            let result = await response.json();
            setTopic({
                title: result.title,
                description: result.description
            });
            setComments(result.comments);
        } else {
            console.log(response.status);
        }
    }

    useEffect(() => {
        // loadAllComments();
        //удалить при подключении бэка
        setTopic({ title: 'Тестовое название', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus dolores, possimus id nostrum excepturi tenetur deleniti neque ducimus nulla eius nihil adipisci temporibus minima suscipit harum nobis rerum quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus dolores, possimus id nostrum excepturi tenetur deleniti neque ducimus nulla eius nihil adipisci temporibus minima suscipit harum nobis rerum quas.' });
        setComments(mockComments);
    }, [])

    function handleTextChange(event) {
        setText(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let data = {
            'author_id': currentUserId,
            'post_id': topicId,
            'description': text,
        };
        // отправка запроса на бэк
        let response = await fetch(`${URL}forum/comments/add`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorisation": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            loadAllComments();
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
                    <ForumComments comments={currentComment} loadAllComments={loadAllComments} />
                </div>
                <Pagination
                        commentsPerPage={commentsPerPage}
                        totalComments={comments.length}
                        paginate={paginate}
                />
                <form className={styles.forum__form_container}>
                    <h4 className={styles.forum__topic_title}>Ваш комментарий:</h4>
                    <label className={styles.forum__form_field}>
                        <textarea type="text" placeholder='Текст' onChange={(e) => handleTextChange(e)} />
                    </label>
                    {currentUser ?
                        <button className={styles.forum__btn} onClick={(e) => handleSubmit(e)}>ОТПРАВИТЬ</button> :
                        <Link to='/login'><button className={styles.forum__btn}>Готово</button></Link>
                    }
                </form>
            </div> 
        </div>
    )
}

export default ForumTopic;