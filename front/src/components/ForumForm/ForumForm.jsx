import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ForumForm.module.scss';

function ForumForm({ updPost, setUpdPost, loadAllPosts }) {
    const currentUser = useSelector((state) => state.user.user) || 1;
    const currentUserId = useSelector((state) => state.user.user?.id) || 1;
    const token = useSelector((state) => state.user.user?.token);

    //создание поста
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

    async function handleSubmit(event) {
        event.preventDefault();
        let data = {
            'author_id': currentUserId,
            'title': newPost.title,
            'description': newPost.description,
        };
        let response = await fetch(`${URL}forum/posts/add`, {
            method: "POST",
            // этой строкой вставляется csrf-токен
            credentials: "include",
            headers: {
                // а этой - пользовательский токен. Бэк должен уточнить, в каком заголовке ожидается токен.
                "Authoristation": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            loadAllPosts();
        } else {
            console.log(response.status);
        }
        setNewPost({
            title: '',
            description: '',
        });
    }

    async function handleUpdateSubmit(event) {
        event.preventDefault();
        let data = {
            'post_id': updPost.id,
            'title': updPost.title,
            'description': updPost.description,
        };
        console.log(data);

        let response = await fetch(`${URL}forum/posts/edit`, {
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
            loadAllPosts();
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

export default ForumForm