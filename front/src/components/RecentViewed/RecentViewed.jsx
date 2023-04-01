import React, { useEffect } from 'react';
import RecentViewedItem from './RecentViewedItem';
import styles from './RecentViewed.module.scss';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';

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
	const { user, recentViewed } = useAuth();
	const { getRecentViewed } = useActions();
	useEffect(() => {
		getRecentViewed();
	}, []);
	return (
		<div className={styles.sidebar}>
			{Object.keys(recentViewed).length > 0 &&
				Object.keys(recentViewed).map((key) => (
					<RecentViewedItem
						key={key}
						statement={{
							...recentViewed[key].object,
							type: recentViewed[key].type,
							link:
								(recentViewed[key].type === 1 &&
									`/videos/${recentViewed[key].type_id}`) ||
								(recentViewed[key].type === 2 &&
									`/articles/${recentViewed[key].type_id}`),
						}}
					/>
				))}
		</div>
	);
};

export default RecentViewed;
