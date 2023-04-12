import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ForumComments.module.scss';
import { loadAllComments } from '../../store/forum/forumAPI';
import { axiosClassic } from '../../api/interceptors';
import { getCommentsUrl } from '../../config/api.config';

function ForumComments({ comments, url: URL, topicId }) {
	const dispatch = useDispatch();
	const currentUserId = useSelector((state) => state.user.user?.id);
	const token = useSelector((state) => state.user.user?.token);

	//редактирование комментария
	const [updComment, setUpdComment] = useState(null);

	function handleUpdate(e) {
		const { name, value } = e.target;
		setUpdComment((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	async function handleUpdateSubmit(event) {
		event.preventDefault();
		let data = {
			id: Number(updComment.id),
			description: updComment.description,
		};
		console.log(data);
		console.log(JSON.stringify(data));
		let response = await axiosClassic
			.post(getCommentsUrl(`/edit`), data)
			.then((res) => {
				dispatch(loadAllComments({ topicId }));
				return res.data;
			})
			.catch((e) => console.log(e));

		setUpdComment(null);
	}

	// удаление комментария:
	async function handleDelete(event, id) {
		event.preventDefault();
		let response = await axiosClassic
			.get(getCommentsUrl(`/delete/${id}`))
			.then((res) => {
				dispatch(loadAllComments({ topicId }));
				return res.data;
			})
			.catch((e) => console.log(e));
	}

	function renderUpdForm() {
		return (
			<form className={styles.forum__form_container}>
				<label className={styles.forum__form_field}>
					<textarea
						type="text"
						placeholder="Текст"
						name="description"
						onChange={handleUpdate}
						value={updComment?.description}
					/>
				</label>
				<button className={styles.forum__btn} onClick={handleUpdateSubmit}>
					Готово
				</button>
			</form>
		);
	}

	return (
		<div className={styles.comments__list}>
			{comments.map((comment) => {
				return (
					<section key={comment.id} className={styles.comments__item}>
						<div className={styles.comment__content}>
							<img
								className={styles.comments__avatar}
								src={comment.avatar}
								alt="avatar"
							/>
							<div className={styles.comment__all_text}>
								<div className={styles.comment__description_container}>
									<p className={styles.comment__author}>{comment.author}</p>
									<div>
										<p className={styles.comment__description}>
											{comment.created_at}
										</p>
										{comment.updated_at ? (
											<p className={styles.comment__description}>
												<span>изменен {comment.updated_at}</span>
											</p>
										) : null}
									</div>
								</div>
								<p className={styles.comment__text}>{comment.description}</p>
							</div>
						</div>

						<div className={styles.comment__btn_container}>
							{comment.author_id === currentUserId ? (
								<>
									<button
										className={styles.comment__btn}
										onClick={(e) => {
											handleDelete(e, comment.id);
										}}
									>
										Удалить
									</button>
									<button
										className={styles.comment__btn}
										onClick={() => {
											setUpdComment(comment);
										}}
									>
										Изменить
									</button>
								</>
							) : null}
						</div>

						{updComment && updComment.id === comment.id && renderUpdForm()}
					</section>
				);
			})}
		</div>
	);
}

export default ForumComments;
