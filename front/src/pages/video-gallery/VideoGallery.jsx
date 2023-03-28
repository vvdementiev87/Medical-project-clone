import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import VideoList from '../../components/VideoList/VideoList';
import { VideoService } from '../../services/video.service';
import Pagination from '../../ui/pagination/Pagination';
import styles from './VideoGallery.module.scss';

const PageSize = 12;
export const video = [];
/* const videoObj = {};

for (let i = 0; i < 37; i++) {
	videoObj[i] = {
		id: i,
		videoYoutubeId: '7NvIHqoMDJE',
		author: 'Author',
		description:
			'Вопросы первичной, первичной специализированной и периодической аккредитации. Секционное заседание',
		imageUrl: '/imagesTest/videoImg.jpg',

		textHTML:
			'<div class="single-post-content"><p><span>Модераторы: </span></p><ul><li><span>Сизова Жанна Михайловна, Первый МГМУ им. И.М. Сеченова Минздрава России, г. Москва; </span></li><li><span>Природова Ольга Федоровна, РНИМУ им. Н.И. Пирогова, г. Москва; </span></li><li><span>Андреенко Александр Александрович, СПБ ГБУЗ «Городская Мариинская больница», г. Санкт - Петербург </span></li></ul><p><span>Доклады:<br><a href="/ckeditor_assets/attachments/2203/30_09_2022.pdf">Аккредитация специалистов — новые векторы в профессиональном развитии врачей — специалистов</a>. Сизова Жанна Михайловна, Первый МГМУ им. И.М. Сеченова Минздрава России, г. Москва </span></p><p><span><a href="/ckeditor_assets/attachments/2209/21.pdf">Применение многопрофильной университетской виртуальной клиники ДИМЕДУС в качестве оценочного средства на Итоговой Государственной Аттестации выпускников</a>. Бугубаева Махабат Миталиповна, Международный Ошский государственный университет, г. Ош, Киргизия </span></p><p><span><a href="https://disk.yandex.ru/i/ScfsskHkFH9PNQ">Непрерывное образование специалистов здравоохранения: допуск к профессиональной деятельности и не только..</a>. Природова Ольга Федоровна, РНИМУ им. Н.И. Пирогова, г. Москва </span></p><p><span><a href="/ckeditor_assets/attachments/2205/21_4.pdf">Проблемы современного этапа первичной специализированной аккредитации по анестезиологии - реаниматологии и пути ее оптимизации – опыт ВМедА им. С.М. Кирова</a>. Андреенко Александр Александрович, СПБ ГБУЗ «Городская Мариинская больница», г. Санкт - Петербург </span></p><p><span><a href="/ckeditor_assets/attachments/2206/21a_5.pdf">Актуальные положения периодической аккредитации специалистов в 2022 году</a>. Геркен Ирина Андреевна, МСЦ Боткинской больницы, г. Москва </span></p><p><span><a href="/ckeditor_assets/attachments/2207/1.pdf">Члены Аккредитационных комиссий — кто они? Портрет, запросы и ожидания.</a> Рипп Татьяна Михайловна, НМИЦ им. В.А. Алмазова, г. Санкт - Петербург</span></p></div>',
	};
}

for (let i in videoObj) {
	video.push(videoObj[i]);
}
console.log(video); */

const VideoGallery = () => {
	const { isLoading, data } = useQuery('Video list', () =>
		VideoService.getAll()
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
			<h1>{'Видеоматериалы'}</h1>
			<Pagination
				currentPage={currentPage}
				totalCount={video.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<VideoList video={currentTableData} />
		</div>
	);
};

export default VideoGallery;
