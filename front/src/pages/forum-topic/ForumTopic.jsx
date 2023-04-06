import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ForumComments from '../../components/ForumComments/ForumComments';
import Pagination from '../../ui/pagination/Pagination';
import styles from './ForumTopic.module.scss';
import ForumCommentForm from '../../components/ForumComments/ForumCommentForm';
import { useActions } from '../../hooks/useActions';
import { useForum } from '../../hooks/useForum';
import { useAuth } from '../../hooks/useAuth';
import MaterialIcon from '../../ui/MaterialIcon';
import ReactQuill from 'react-quill';

const PageSize = 5;

function ForumTopic() {
	const [isVisible, setIsVisible] = useState(false);
	const { getPostByIdWithComments, editPost } = useActions();
	const { postId } = useParams();
	console.log(postId);
	const { posts, isLoading } = useForum();
	const { user } = useAuth();
	const [isEdit, setIsEdit] = useState(false);
	const [description, setDescription] = useState(null);
	const [title, setTitle] = useState(null);

	useEffect(() => {
		getPostByIdWithComments({ postId });
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return (
			posts[postId]?.comments &&
			Object.fromEntries(
				Object.entries(posts[postId].comments).slice(
					firstPageIndex,
					lastPageIndex
				)
			)
		);
	}, [currentPage, posts[postId]?.comments]);

	const handleEdit = () => {
		editPost({
			post: {
				description: description,
				title: title,
				post_id: postId,
			},
		});
		setIsEdit(!isEdit);
		setDescription(null);
		setTitle(null);
	};

	return isLoading ? (
		<h2 className={styles.title}>Loading</h2>
	) : (
		posts[postId]?.comments && (
			<>
				<h2 className={styles.title}>
					{isEdit ? (
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input>
					) : (
						posts[postId].title
					)}
				</h2>
				<div className={styles.container}>
					<div className={styles.description}>
						{isEdit ? (
							<ReactQuill
								theme="snow"
								value={description}
								onChange={setDescription}
							/>
						) : (
							<div
								className={styles.innerHTML}
								dangerouslySetInnerHTML={{ __html: posts[postId].description }}
							/>
						)}
						{posts[postId]?.author.id === user.id && (
							<div className={styles.btn_section}>
								{isEdit ? (
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
											}}
										>
											<MaterialIcon name={'MdClose'} />
										</button>
									</>
								) : (
									<button
										title="Edit"
										className={styles.btn}
										onClick={() => {
											setIsEdit(!isEdit);
											setDescription(posts[postId].description);
											setTitle(posts[postId].title);
										}}
									>
										<MaterialIcon name={'MdEditDocument'} />
									</button>
								)}
							</div>
						)}
					</div>
					{currentTableData && (
						<ForumComments comments={currentTableData} postId={postId} />
					)}
					<div className={styles.pagination}>
						{user && (
							<button
								title="Save changes"
								className={styles.reply}
								onClick={() => {
									setIsVisible(!isVisible);
								}}
							>
								Ответить
							</button>
						)}
						<Pagination
							currentPage={currentPage}
							totalCount={Object.entries(posts[postId].comments).length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					</div>
					{isVisible && <ForumCommentForm postId={postId} />}
				</div>
			</>
		)
	);
}

export default ForumTopic;
