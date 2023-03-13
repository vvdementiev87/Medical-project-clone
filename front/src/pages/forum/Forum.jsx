import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link } from 'react-router-dom';
import { setTitlesList } from '../../store/forum/forum.slice';
import styles from './Forum.module.scss';

const mockThemes = [
    {
        id: 1,
        author_id: 1,
        title: "Актуальные темы для семинаров",
        created_at: "10.2014 00:15",
        last_comment: "26.10.2014",
        comments_count: "33",
    },
    {
        id: 2,
        author_id: 2,
        title: "Привлечь преподавателей к симуляционному тренингу",
        created_at: "24.10.2014 20:39",
        last_comment: "19.10.2015",
        comments_count: "15",
    },
    {
        id: 3,
        author_id: 3,
        title: "Симуляционное обучение в СПО и ДПО",
        created_at: "6.10.2015 09:48",
        last_comment: "19.10.2015",
        comments_count: "90",
    }
]

function Forum() {
    const dispatch = useDispatch();
    //тестовые значения
    const currentUserId = 1;
    const URL = "127.0.0.1:80/api/"
    
    // запрос на бэк вместо использования мок-массива. Раскомментить после подключения бека:
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     fetch(`${URL}forum/posts`)
    //     .then((response)=>{
    //         return response.json()
    //     })
    //     .then ((result)=> {
    //         dispatch(setTitlesList(result));
    //     })
    //     .catch(error=>console.log(error));
    // }, [])

    // const titlesList = useSelector((state)=>state.forum.titlesList);
    const titlesList = mockThemes;
    const [currentTitles, setCurrentTitles] = useState([...titlesList]);

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    function handleTitleChange(event) {
        setNewTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setNewDescription(event.target.value);
    }

    function renderAllTitles(titleArray) {
        return titleArray.map((item) => {
            return (
                <section key={(item.id)} className={styles.forum__topic}>
                    <Link to={`${item.id}`}><h3>#{item.id} {item.title}</h3></Link>
                    <div className={styles.forum__topic_content}>
                        <p className={styles.forum__topic_title}><span>Создан: </span>{item.created_at}</p>
                        <p className={styles.forum__topic_title}><span>Комментариев: </span>{item.comments_count}</p>
                        <p className={styles.forum__topic_title}><span>Последний комментарий: </span>{item.last_comment}</p>
                    </div>
                    {item.author_id === currentUserId &&
                        <div className={styles.forum__btn_section}>
                            <button className={styles.forum__btn} onClick={(e) => { handleUpdate(e) }}>РЕДАКТИРОВАТЬ</button>
                            <button className={styles.forum__btn} onClick={(e) => { handleDelete(e, item.id) }}>УДАЛИТЬ</button>
                        </div>
                    }
                </section>
            );
        })
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    let csrfToken = getCookie('csrftoken');

    async function handleSubmit(event) {
        event.preventDefault();
        let data = {
            'author_id': currentUserId,
            'title': newTitle,
            'description': newDescription,
        };
        // отправка запроса на бэкенд, на будущее - скорректировать получение csrf токена
        // fetch(`${URL}forum/posts/add`, {
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //         "X-CSRF-TOKEN": csrfToken,
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(()=>{fetch(`${URL}forum/posts`)})
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((result) => {
        //         dispatch(setTitlesList(result));
        //     })
        //     .catch(error => console.log(error))

        let newItem = {
            id: (titlesList.length + 1),
            author_id: currentUserId,
            title: newTitle,
            description: newDescription,
            created_at: "Только что",
            last_comment: '',
            comments_count: '0',
        }
        setCurrentTitles([...titlesList, newItem]);
    }


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
        //.then(()=>{fetch(`${URL}forum/posts`)})
        // .then((response)=>{
        //     return response.json()
        // })
        // .then ((result)=> {
        //     dispatch(setTitlesList(result));
        // })
        // .catch(error=>console.log(error));
        setCurrentTitles([...(currentTitles.filter((item) => item.id !== id))]);
        console.log(currentTitles);
    }

    async function handleUpdate(event) {
        //нужна логика открытия новой формы для редактирования. Новая страница или здесь же?
    }

    return (
        <>
            <h2 className={styles.forum__title}>Форум</h2>
            <div className={styles.forum__container}>
                {(currentTitles && Array.isArray(currentTitles)) ? renderAllTitles(currentTitles) : <h1>Loading...</h1>}
            </div>

            <form className={styles.forum__form_container}>
                <h3>Создать новую тему?</h3>
                <label className={styles.forum__form_field}>
                    <input type="text" placeholder='Название' onChange={e => handleTitleChange(e)} />
                </label>
                <label className={styles.forum__form_field}>
                    <input type="text" placeholder='Описание' onChange={e => handleDescriptionChange(e)} />
                </label>
                <button className={styles.forum__btn} onClick={e => handleSubmit(e)}>СОЗДАТЬ</button>
            </form>
        </>
    );
}

export default Forum;