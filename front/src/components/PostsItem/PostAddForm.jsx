import React, { useState } from 'react';
import styles from './PostsItem.module.scss';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';

const PostAddForm = () => {
	const [description, setDescription] = useState('');
	const [title, setTitle] = useState('');
	const { user } = useAuth();
	const { addPost } = useActions();
	const handleSubmit = (e) => {
		e.preventDefault();
		addPost({
			post: { title: title, description: description, author_id: user?.id },
		});

		setTitle('');
		setDescription('');
	};
	return (
		<form className={styles.form_container}>
			<h4>Ваш комментарий:</h4>
			<label className={styles.forum_field}>
				{'Название: '}
				<input value={title} onChange={(e) => setTitle(e.target.value)}></input>
			</label>
			<label className={styles.forum_field}>
				{'Содержание: '}
				<ReactQuill
					theme="snow"
					value={description}
					onChange={setDescription}
				/>
			</label>
			{user ? (
				<button
					type="submit"
					className={styles.forum__btn}
					onClick={(e) => handleSubmit(e)}
				>
					Отправить
				</button>
			) : (
				<Link to="/login">
					<button className={styles.forum__btn}>Войти</button>
				</Link>
			)}
		</form>
	);
};

export default PostAddForm;
