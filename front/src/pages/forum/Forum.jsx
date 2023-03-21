import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumForm from '../../components/ForumForm/ForumForm';
import { setTitlesList } from '../../store/forum/forum.slice';
import styles from './Forum.module.scss';

function Forum() {
	const dispatch = useDispatch();
	//тестовые значения
	const URL = '127.0.0.1:80/api/';
	const currentUser = useSelector((state) => state.user.user);
	const currentUserId = useSelector((state) => state.user.user?.id) || 1;
	const token = useSelector((state) => state.user.user?.token);
	// после настройки бэка моки нужно удалить

	// const titlesList = useSelector((state) => state.forum.titlesList);
	const [currentTitles, setCurrentTitles] = useState([...titlesList]);

	//редактирование поста
	const [updPost, setUpdPost] = useState(null);

	function handleUpdate(e) {
		const { name, value } = e.target;
		setUpdPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	useEffect(() => {
		loadAllPosts();
	}, []);

	// запрос на загрузку всех постов с бэка
	async function loadAllPosts() {
		let response = await fetch(`${URL}forum/posts`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
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
			method: 'DELETE',
			credentials: 'include',
			headers: {
				Authorisation: token,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			loadAllPosts();
		} else {
			console.log(response.status);
		}
		// после настройки бэка это нужно удалить
		setCurrentTitles([...currentTitles.filter((item) => item.id !== id)]);
	}

	// рендер всех постов
	function renderAllTitles(titleArray) {
		return titleArray.map((item) => {
			return (
				<div key={item.id}>
					<section className={styles.forum__topic}>
						<Link to={`${item.id}`}>
							<h3>
								#{item.id} {item.title}
							</h3>
						</Link>
						<p>{item.description}</p>
						<div className={styles.forum__topic_content}>
							<p className={styles.forum__topic_title}>
								<span>Создан: </span>
								{item.created_at}
							</p>
							<p className={styles.forum__topic_title}>
								<span>Комментариев: </span>
								{item.comments_count}
							</p>
							<p className={styles.forum__topic_title}>
								<span>Последний комментарий: </span>
								{item.last_comment}
							</p>
						</div>
						{item.author_id === currentUserId && (
							<div className={styles.forum__btn_section}>
								<button
									className={styles.forum__btn}
									onClick={() => {
										setUpdPost(item);
									}}
								>
									РЕДАКТИРОВАТЬ
								</button>
								<button
									className={styles.forum__btn}
									onClick={(e) => {
										handleDelete(e, item.id);
									}}
								>
									УДАЛИТЬ
								</button>
							</div>
						)}
					</section>
					{updPost && updPost.id === item.id && (
						<ForumForm
							updPost={updPost}
							setUpdPost={setUpdPost}
							loadAllPosts={loadAllPosts}
						/>
					)}
				</div>
			);
		});
	}

	return (
		<>
			<h2 className={styles.forum__title}>Форум</h2>
			<div className={styles.forum__container}>
				{currentTitles && Array.isArray(currentTitles) ? (
					renderAllTitles(currentTitles)
				) : (
					<h1>Loading...</h1>
				)}
			</div>
			<ForumForm
				updPost={null}
				setUpdPost={setUpdPost}
				loadAllPosts={loadAllPosts}
			/>
		</>
	);
}

export default Forum;
