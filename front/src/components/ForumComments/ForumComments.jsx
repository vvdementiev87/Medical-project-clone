import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '../../ui/MaterialIcon';
import styles from './ForumComments.module.scss';
import ReactQuill from 'react-quill';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';

function ForumComments({ comments, postId }) {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState('');
	const { user } = useAuth();
	const { deleteComment, editComment } = useActions();
	const [updComment, setUpdComment] = useState(null);

	function handleDelete(id) {
		deleteComment({ commentId: id, postId });
	}
	const handleEdit = () => {
		editComment({
			comment: {
				description: value,
				comment_id: updComment.id,
				post_id: postId,
			},
		});
		setIsEdit(!isEdit);
	};

	return (
		<div className={styles.list}>
			{Object.keys(comments).map((key) => {
				return (
					<section key={comments[key].id} className={styles.item}>
						<div className={styles.sidebar}>
							<img
								className={styles.avatar}
								src={comments[key]?.avatar || 'https://picsum.photos/50/50'}
								alt="avatar"
							/>
							<div className={styles.description_container}>
								<div className={styles.description}>
									<span>Автор: </span>
									<p>{comments[key].author}</p>
								</div>
								<div className={styles.description}>
									<span>Опубликовано: </span>
									<p>{comments[key].created_at}</p>
								</div>
								{comments[key].updated_at ? (
									<div className={styles.description}>
										<span>Изменено: </span>
										<p>{comments[key].updated_at}</p>
									</div>
								) : null}
							</div>
						</div>
						<div className={styles.content}>
							<div className={styles.btn_container}>
								{comments[key].author_id === user.id ? (
									isEdit ? (
										<>
											<button
												title="Save changes"
												className={styles.btn}
												onClick={() => {
													handleEdit();
												}}
											>
												<MaterialIcon name={'MdSave'} />
											</button>
											<button
												title="Close without changing"
												className={styles.btn}
												onClick={(e) => {
													setIsEdit(!isEdit);
													setValue(comments[key].description);
												}}
											>
												<MaterialIcon name={'MdClose'} />
											</button>
										</>
									) : (
										<>
											<button
												title="Edit"
												className={styles.btn}
												onClick={() => {
													setUpdComment(comments[key]);
													setIsEdit(!isEdit);
													setValue(comments[key].description);
												}}
											>
												<MaterialIcon name={'MdEditDocument'} />
											</button>
											<button
												title="Delete"
												className={styles.btn}
												onClick={(e) => {
													handleDelete(comments[key].id);
												}}
											>
												<MaterialIcon name={'MdDeleteForever'} />
											</button>
										</>
									)
								) : null}
							</div>

							<div className={styles.text}>
								{isEdit && updComment.id === comments[key].id ? (
									<ReactQuill theme="snow" value={value} onChange={setValue} />
								) : (
									<div
										className={styles.innerHTML}
										dangerouslySetInnerHTML={{
											__html: comments[key].description,
										}}
									/>
								)}
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default ForumComments;
