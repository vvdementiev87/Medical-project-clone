import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ForumComments from "../../components/ForumComments/ForumComments";
import Pagination from "../../components/Pagination";
import styles from './ForumTopic.module.scss';

const mockComments = [
    {
        id: 1,
        author_id: 1,
        author: "профессор Преображенский",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia voluptates veritatis accusamus amet earum suscipit reiciendis dolores quisquam adipisci maxime quas debitis cumque, voluptatem provident, dignissimos atque eos libero.",
    },
    {
        id: 2,
        author_id: 2,
        author: "доктор Борменталь",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero quia repudiandae dolores. Consequatur ab accusantium tempore cum repellat ipsum hic, sint neque laboriosam possimus doloremque illum nostrum optio dicta.",
    },
    {
        id: 3,
        author_id: 3,
        author: "гражданин Шариков",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Абырвалг"
    },
    {
        id: 4,
        author_id: 2,
        author: "доктор Борменталь",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
    {
        id: 5,
        author_id: 2,
        author: "доктор Борменталь",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
    {
        id: 6,
        author_id: 1,
        author: "профессор Преображенский",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
    {
        id: 7,
        author_id: 3,
        author: "гражданин Шариков",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
    {
        id: 8,
        author_id: 2,
        author: "доктор Борменталь",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
    {
        id: 9,
        author_id: 1,
        author: "профессор Преображенский",
        avatar: "https://picsum.photos/50/50",
        created_at: "10.2014 00:15",
        updated_at: "26.10.2014 00:15",
        description: "Random comment description"
    },
]

function ForumTopic() {
    const { topicId } = useParams();
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(5);
    const [text, setText] = useState('');

    //тестовые значения
    const currentUser = useSelector((state) => state.user.user) || 1;
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token);
    const URL = "127.0.0.1:80/api/";

    // запрос на бэк вместо использования мок-массива. Раскомментить после подключения бека:
    async function loadAllComments() {
        let response = await fetch(`${URL}forum/posts/${topicId}`);
        if(response.ok) {
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
        setTopic({title: 'Тестовое название', description:'Тестовое описание темы'});
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

    return (<>
        <h2 className={styles.topic__title}>{topic.title}</h2>
        <div className={styles.topic__container}>
            <div className={styles.topic__description}><p>{topic.description}</p></div>
            <ForumComments comments={currentComment} loadAllComments={loadAllComments} />
            <Pagination
                commentsPerPage={commentsPerPage}
                totalComments={comments.length} 
                paginate={paginate}
            />
        </div>
        <form className={styles.forum__form_container}>
            <h4>Ваш комментарий:</h4>
            <label className={styles.forum__form_field}>
                <input type="text" placeholder='Текст' onChange = {(e)=> handleTextChange(e)}/>
            </label>
            {currentUser?
                <button className={styles.forum__btn} onClick= {(e)=>handleSubmit(e)}>ОТПРАВИТЬ</button> :
                <Link to='/login'><button className={styles.forum__btn}>Войти</button></Link>
            }
        </form>
    </>
    )
}

export default ForumTopic;