import React, { useState, useMemo } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../ui/pagination/Pagination';
import styles from './ArticlesGallery.module.scss';
import { ArticleService } from '../../services/articles.service';

import { useQuery } from 'react-query';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

const PageSize = 12;

const ArticlesGallery = () => {
	const { isLoading, data } = useQuery('Articles list', () =>
		ArticleService.getAll()
	);

	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data && data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, data]);

	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.container}>
			<h1>{'Статьи'}</h1>
			<Pagination
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<ArticlesList articles={currentTableData} />
		</div>
	);
};

export default ArticlesGallery;
