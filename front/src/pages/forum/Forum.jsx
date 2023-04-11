import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumForm from '../../components/ForumForm/ForumForm';
import styles from './Forum.module.scss';
import { forumURL, loadAllPosts } from '../../store/forum/forumAPI';

function Forum() {
	const dispatch = useDispatch();
	const URL = forumURL;
	const currentUser = useSelector((state) => state.user.user);
	const currentUserId = useSelector((state) => state.user.user?.id);
	const token = useSelector((state) => state.user.user?.token);
	const loadPostsStatus = useSelector((state) => state.forum.status);
	const titlesList = useSelector((state) => state.forum.titlesList);
	console.log(titlesList);
	useEffect(() => {
		dispatch(loadAllPosts());
	}, []);

	//редактирование поста
	const [updPost, setUpdPost] = useState(null);

	// отправка запроса на удаление поста
	async function handleDelete(event, id) {
		event.preventDefault();
		let response = await fetch(`${URL}forum/posts/delete/${id}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				Authorisation: 'Bearer ' + token,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			dispatch(loadAllPosts());
		} else {
			console.log(response.status);
		}
	}

	// рендер всех постов
	function renderAllTitles(titleArray) {
		return titleArray.map((item) => {
			return (
				<div key={item.id}>
					<section className={styles.forum__topic}>
						<div className={styles.forum__topic_content}>
							<Link to={`${item.id}`}>
								<h3 className={styles.forum__topic_title}>
									#{item.id} {item.title}
								</h3>
							</Link>
							<p className={styles.forum__topic_text}>
								<span>
									Создан:
									<br />
								</span>
								{item.created_at}
							</p>
							<p className={styles.forum__topic_text}>
								<span>
									Комментарии:
									<br />
								</span>
								{item.comments_count}
							</p>
							<p className={styles.forum__topic_text}>
								<span>
									Последний комментарий:
									<br />
								</span>
								{item.last_comment}
							</p>
						</div>
						{item?.author?.author_id === currentUserId && (
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
						<ForumForm updPost={updPost} setUpdPost={setUpdPost} url={URL} />
					)}
				</div>
			);
		});
	}

	return (
		<div className={styles.page__container}>
			<h2 className={styles.forum__title}>Форум БОСОМ </h2>
			<div className={styles.forum__greeting}>
				{!currentUser
					? 'Вы не вошли'
					: `Добро пожаловать, ${currentUser.first_name}`}
			</div>
			<div className={styles.forum__container}>
				{loadPostsStatus === 'loading' && <h1>Загрузка...</h1>}
				{loadPostsStatus === 'idle' && renderAllTitles(titlesList)}
				{loadPostsStatus === 'error' && <h1>Что-то пошло не так!</h1>}
				<ForumForm updPost={null} setUpdPost={setUpdPost} url={URL} />
			</div>
		</div>
	);
}

export default Forum;
