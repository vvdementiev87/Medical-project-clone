import React, { useState, useMemo } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../ui/pagination/Pagination';
import styles from './NewsGallery.module.scss';

const PageSize = 12;
export const news = [];

for (let i = 0; i < 37; i++) {
	news.push({
		id: i,
		author: 'Author',
		description:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		imageUrl: '/imagesTest/news_1.jpg',
		shortText:
			'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
		textHTML:
			'<p><span><strong>24 января 2023&nbsp;года </strong>в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между <strong>Российским обществом симуляционного обучения (РОСОМЕД) </strong>и<strong> Обществом симуляции в здравоохранении (SSH)</strong>.</span></span></p><p><span >Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда.</span></span></p><p><span><span>Надеемся на эффективное продолжение многолетнего сотрудничества!</span></span></p><p>&nbsp;</p>',
	});
}

const NewsGallery = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return news.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<div className={styles.container}>
			<h1>{'Статьи и новости'}</h1>
			<Pagination
				currentPage={currentPage}
				totalCount={news.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<NewsList news={currentTableData} />
		</div>
	);
};

export default NewsGallery;
