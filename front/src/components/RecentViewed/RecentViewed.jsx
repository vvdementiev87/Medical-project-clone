import React from 'react';
import RecentViewedItem from './RecentViewedItem';
import styles from './RecentViewed.module.scss';

const statements = [
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
];

const RecentViewed = () => {
	return (
		<div className={styles.sidebar}>
			<h3>{'Недавно просмотренное'}</h3>
			<div className={styles.list}>
				{statements.slice(0, 3).map((s, i) => (
					<RecentViewedItem key={i} statement={s} />
				))}
			</div>
		</div>
	);
};

export default RecentViewed;
