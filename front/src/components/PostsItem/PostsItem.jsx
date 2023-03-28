import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import MaterialIcon from '../../ui/MaterialIcon';
import styles from './PostsItem.module.scss';

const PostsItem = ({ post }) => {
	const { user } = useAuth();
	const { deletePost } = useActions();

	const handleDelete = () => {
		deletePost({ postId: post.id });
	};

	return (
		<section className={styles.topic}>
			<Link to={`${post.id}`}>
				<h3>
					#{post.id} {post.title}
				</h3>
			</Link>
			<p>{post.description}</p>
			<div className={styles.topic_content}>
				<p className={styles.forum__topic_title}>
					<span>Создан: </span>
					{post.created_at}
				</p>
				<p className={styles.forum__topic_title}>
					<span>Комментариев: </span>
					{post.comments_count}
				</p>
				<p className={styles.forum__topic_title}>
					<span>Последний комментарий: </span>
					{post.last_comment}
				</p>
			</div>
			{post.author_id === user.id && (
				<div className={styles.btn_section}>
					<button
						title="Delete"
						className={styles.btn}
						onClick={() => handleDelete()}
					>
						<MaterialIcon name={'MdDeleteForever'} />
					</button>
				</div>
			)}
		</section>
	);
};

export default PostsItem;
