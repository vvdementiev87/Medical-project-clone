import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumForm from '../../components/ForumForm/ForumForm';
import { setTitlesList } from '../../store/forum/forum.slice';
import styles from './Forum.module.scss';
import {mockThemes} from '../../assets/mocks/forum';

function Forum() {
    const dispatch = useDispatch();
    //тестовые значения  
    const URL = "127.0.0.1:80/api/";
    const currentUser = useSelector((state) => state.user.user);
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token);
    // после настройки бэка моки нужно удалить
    const titlesList = mockThemes;
    // const titlesList = useSelector((state) => state.forum.titlesList);
    
    //редактирование поста
    const [updPost, setUpdPost] = useState(null);
    
    function handleUpdate(e) {
        const { name, value } = e.target;
        setUpdPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        loadAllPosts();
    }, [])

// запрос на загрузку всех постов с бэка
    async function loadAllPosts() {
        let response = await fetch(`${URL}forum/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            let result = await response.json();
            dispatch(setTitlesList(result));
        } else {
            console.log(response.status);
        }
    }

    // отправка запроса на удаление поста
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
            loadAllPosts();
        } else {
            console.log(response.status);
        }
    }

    // рендер всех постов
    function renderAllTitles(titleArray) {
        return titleArray.map((item) => {
            return (<div key={(item.id)}>
                <section className={styles.forum__topic}>
                    <div className={styles.forum__topic_content}>
                        <Link to={`${item.id}`}><h3 className={styles.forum__topic_title}>#{item.id} {item.title}</h3></Link>
                        <p className={styles.forum__topic_text}><span>Создан:<br/></span>{item.created_at}</p>
                        <p className={styles.forum__topic_text}><span>Комментарии:<br/></span>{item.comments_count}</p>
                        <p className={styles.forum__topic_text}><span>Последний комментарий:<br/></span>{item.last_comment}</p>
                    </div>
                    {item.author_id === currentUserId &&
                        <div className={styles.forum__btn_section}>
                            <button className={styles.forum__btn} onClick={() => { setUpdPost(item) }}>РЕДАКТИРОВАТЬ</button>
                            <button className={styles.forum__btn} onClick={(e) => { handleDelete(e, item.id) }}>УДАЛИТЬ</button>
                        </div>
                    }
                </section>
                {updPost && updPost.id===item.id && <ForumForm updPost={updPost} setUpdPost={setUpdPost} loadAllPosts={loadAllPosts}/>}
                </div>
            );
        })
    }

    return (
        <div className={styles.page__container}>
            <h2 className={styles.forum__title}>Форум БОСОМ </h2>
            <div className={styles.forum__greeting}>{!currentUser? 'Вы не вошли' : `Добро пожаловать, ${currentUser.first_name}`}</div>
            <div className={styles.forum__container}>
                {(titlesList && Array.isArray(titlesList)) ? renderAllTitles(titlesList) : <h1>Loading...</h1>}
                <ForumForm updPost={null} setUpdPost={setUpdPost} loadAllPosts={loadAllPosts}/>
            </div>
        </div>
    );
}

export default Forum;