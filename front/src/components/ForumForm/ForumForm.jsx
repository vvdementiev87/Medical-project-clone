import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ForumForm.module.scss';
import { loadAllPosts } from '../../store/forum/forumAPI';
import Cookies from 'js-cookie';
import { getPostsUrl } from '../../config/api.config';
import { axiosClassic } from '../../api/interceptors';

function ForumForm({ updPost, setUpdPost, url: URL }) {
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
		setNewPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleUpdate(e) {
		const { name, value } = e.target;
		setUpdPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	//создание поста
	async function handleSubmit(event) {
		event.preventDefault();
		let data = {
			author_id: Number(currentUserId),
			title: newPost.title,
			description: newPost.description,
		};
		console.log(data);
		console.log(JSON.stringify(data));
		let response = await axiosClassic
			.post(getPostsUrl(`/add`), data)
			.then((res) => {
				dispatch(loadAllPosts());
				return res.data;
			})
			.catch((e) => console.log(e));

		setNewPost({
			title: '',
			description: '',
		});
	}

	//редактирование поста
	async function handleUpdateSubmit(event) {
		event.preventDefault();
		let data = {
			post_id: Number(updPost.id),
			title: updPost.title,
			description: updPost.description,
		};
		console.log(data);
		let response = await axiosClassic
			.post(getPostsUrl(`/edit`), data)
			.then((res) => {
				dispatch(loadAllPosts());
				return res.data;
			})
			.catch((e) => console.log(e));

		setUpdPost({});
	}

	if (currentUser) {
		return (
			<form className={styles.forum__form_container}>
				{!updPost ? (
					<h3 className={styles.forum__form_title}>Создать пост:</h3>
				) : (
					<h3 className={styles.forum__form_title}>Редактировать пост: </h3>
				)}
				<label className={styles.forum__form_field}>
					<input
						type="text"
						name="title"
						placeholder="Название"
						onChange={!updPost ? handleChange : handleUpdate}
						value={!updPost ? newPost.title : updPost?.title}
					/>
				</label>
				<label className={styles.forum__form_field}>
					<textarea
						className={styles.forum__form_description}
						type="text"
						name="description"
						placeholder="Описание"
						onChange={!updPost ? handleChange : handleUpdate}
						value={!updPost ? newPost.description : updPost?.description}
					/>
				</label>
				<button
					className={styles.forum__btn}
					onClick={!updPost ? handleSubmit : handleUpdateSubmit}
				>
					{' '}
					{!updPost ? 'СОЗДАТЬ' : 'ГОТОВО'}
				</button>
			</form>
		);
	}
	return (
		<Link to="/login">
			<button className={styles.forum__btn}>Войти</button>
		</Link>
	);
}

export default ForumForm;
