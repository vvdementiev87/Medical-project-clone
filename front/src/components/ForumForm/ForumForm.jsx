import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ForumForm.module.scss';
import { loadAllPosts } from '../../store/forum/forumAPI';

function ForumForm({ updPost, setUpdPost, url:URL}) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.user);
    const currentUserId = useSelector((state) => state.user.user?.id);
    const token = useSelector((state) => state.user.user?.token);

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleUpdate(e) {
        const { name, value } = e.target;
        setUpdPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //создание поста
    async function handleSubmit(event) {        
        event.preventDefault();
        let data = {
            'author_id': currentUserId,
            'title': newPost.title,
            'description': newPost.description,
        };
        let response = await fetch(`${URL}forum/posts/add`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authoristation": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            dispatch(loadAllPosts());
        } else {
            console.log(response.status);
        }
        setNewPost({
            title: '',
            description: '',
        });
    }

    //редактирование поста
    async function handleUpdateSubmit(event) {
        event.preventDefault();
        let data = {
            'id': updPost.id,
            'title': updPost.title,
            'description': updPost.description,
        };

        let response = await fetch(`${URL}forum/posts/edit`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Authoristation": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            dispatch(loadAllPosts());
        } else {
            console.log(response.status);
        }
        setUpdPost({});
    }

    if (currentUser) {
        return ( 
        <form className={styles.forum__form_container}>
            {!updPost ? <h3 className={styles.forum__form_title}>Создать пост:</h3> : <h3 className={styles.forum__form_title}>Редактировать пост: </h3>}
            <label className={styles.forum__form_field}>
                <input type="text" name='title' placeholder='Название' onChange={!updPost ? handleChange : handleUpdate} value={!updPost ? newPost.title : updPost?.title} />
            </label>
            <label className={styles.forum__form_field}>
                <textarea className={styles.forum__form_description} type="text" name='description' placeholder='Описание' onChange={!updPost ? handleChange : handleUpdate} value={!updPost ? newPost.description : updPost?.description} />
            </label>
            <button className={styles.forum__btn} onClick={!updPost ? handleSubmit : handleUpdateSubmit}> {!updPost ? "СОЗДАТЬ" : "ГОТОВО"}</button>
        </form>
        )
    }
        return <Link to='/login'><button className={styles.forum__btn}>Войти</button></Link>
}

export default ForumForm;