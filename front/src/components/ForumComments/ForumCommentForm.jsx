import React, { useState } from 'react';
import styles from './ForumComments.module.scss';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';

const ForumCommentForm = ({ postId }) => {
	const [value, setValue] = useState('');
	const { user } = useAuth();
	const { addComment } = useActions();
	const handleSubmit = (e) => {
		e.preventDefault();
		addComment({
			comment: { description: value, author_id: user?.id, post_id: postId },
		});
		setValue('');
	};
	return (
		<form className={styles.form_container}>
			<h4>Ваш комментарий:</h4>
			<ReactQuill theme="snow" value={value} onChange={setValue} />
			{user ? (
				<button className={styles.forum__btn} onClick={(e) => handleSubmit(e)}>
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

export default ForumCommentForm;
