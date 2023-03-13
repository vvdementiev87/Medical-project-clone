import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
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
    const [comments, setComments] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(1);
    const [description, setDescription] = useState('');
    const { topicId } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(5);
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    //тестовые значения
    const currentUserId = 1;
    const URL = "127.0.0.1:80/api/"

    // запрос на бэк вместо использования мок-массива. Раскомментить после подключения бека:
    // useEffect(()=>{
    //     fetch(`${URL}forum/posts/${topicId}`)
    //     .then((response)=>{
    //         return response.json()
    //     })
    //     .then ((result)=> {
    //         setAuthor (result.author.id);
    //         setTitle(result.title);
    //         setDesription(result.description);
    //         dispatch(setTitle(result.comments));
    //     })
    //     .catch(error=> console.log(error));
    // }, [])
    // const comments = useSelector((state)=>state.forum.title);

    //удалить при подключении бэка
    useEffect(() => {
        setTitle('Тестовое название');
        setDescription('Тестовое описание темы');
        setComments(mockComments);
    }, [])

    function handleTextChange(event) {
        setText(event.target.value);
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
            'post_id': topicId,
            'description': text,
        };
        // отправка запроса на бэкенд, на будущее - скорректировать получение csrf токена
        // fetch(`${URL}forum/comments/add`, {
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //         "X-CSRF-TOKEN": csrfToken,
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(() => {fetch(`${URL}forum/posts/${topicId}`)})
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((result) => {
        //         setAuthor(result.author.id);
        //         setTitle(result.title);
        //         setDescription(result.description);
        //         dispatch(setTitle(result.comments));
        //     })
        //     .catch(error => console.log(error));

        let newItem = {
            id: (comments.length + 1),
            author_id: currentUserId,
            author: "профессор Преображенский",
            avatar: "https://picsum.photos/50/50",
            description: text,
            created_at: "Только что",
            updated_at: "",
        }
        setComments([newItem, ...comments]);
        console.log(comments);
    }

    const lastCommentIndex = currentPage * commentsPerPage;
    const firstCommentIndex = lastCommentIndex - commentsPerPage;
    const currentComment = comments.slice(firstCommentIndex, lastCommentIndex);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (<>
        <h2 className={styles.topic__title}>{title}</h2>
        <div className={styles.topic__container}>
            <div className={styles.topic__description}><p>{description}</p></div>
            <ForumComments comments={currentComment} />
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
            <button className={styles.forum__btn} onClick= {(e)=>handleSubmit(e)}>ОТПРАВИТЬ</button>
        </form>
    </>
    )
}

export default ForumTopic;