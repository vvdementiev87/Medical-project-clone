import React, {useState, useMemo, useEffect} from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../ui/pagination/Pagination';
import styles from './NewsGallery.module.scss';
import { NewsService } from '../../services/news.service';
import { useQuery } from 'react-query';

const PageSize = 6;

const NewsGallery = () => {
	const [data,setData]=useState([]);
	useEffect(()=>{
		const data=[];
		const newsObj={}
		for (let i = 1; i <= 18; i++) {
			newsObj[i] = {
				id: i,
				title:
					'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
				imageUrl: '/imagesTest/news_1.jpg',
				shortText:
					'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
				bigText:
					'24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между  Российским обществом симуляционного обучения (РОСОМЕД)  и Обществом симуляции в здравоохранении (SSH). Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда. Надеемся на эффективное продолжение многолетнего сотрудничества!',
			};
			data.push(newsObj[i])
		}
		setData(data)
	},[])
//	const { isLoading, data } = useQuery('News list', () => NewsService.getAll());

	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data && data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, data]);
	console.log(currentTableData)

	// return
	// isLoading ? (
	// 	<h1>Loading...</h1>
	// ) : (
		return <div className="container">
			<h1 className={styles.heading}>{'Новости'}</h1>
			<Pagination
				className={styles.pagination}
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<NewsList news={currentTableData} />
		</div>
	// );
};

export default NewsGallery;
