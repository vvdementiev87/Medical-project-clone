import React, { useEffect, useState, useMemo } from 'react';
import PostAddForm from '../../components/PostsItem/PostAddForm';
import PostsItem from '../../components/PostsItem/PostsItem';
import { useActions } from '../../hooks/useActions';
import { useForum } from '../../hooks/useForum';
import styles from './Forum.module.scss';
import Pagination from '../../ui/pagination/Pagination';
import { useAuth } from '../../hooks/useAuth';

const PageSize = 9;

function Forum() {
	const { user } = useAuth();
	const { getAllPosts } = useActions();
	const { posts: titlesList, isLoading } = useForum();
	const [isVisible, setIsVisible] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return (
			titlesList &&
			Object.fromEntries(
				Object.entries(titlesList).slice(firstPageIndex, lastPageIndex)
			)
		);
	}, [currentPage, titlesList]);

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<>
			<h2 className={styles.title}>Форум</h2>
			<div className={styles.container}>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					currentTableData &&
					Object.keys(currentTableData).map((key) => (
						<PostsItem key={key} post={currentTableData[key]} />
					))
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
							Создать пост
						</button>
					)}
					{currentTableData && (
						<Pagination
							currentPage={currentPage}
							totalCount={Object.entries(titlesList).length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					)}
				</div>
				{isVisible && <PostAddForm />}
			</div>
		</>
	);
}

export default Forum;
