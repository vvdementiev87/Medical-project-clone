import React from 'react';
import FavoritesItem from './FavoritesItem';
import styles from './Favorites.module.scss';

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

const Favorites = () => {
	return (
		<div className={styles.sidebar}>
			<h3>{'Избранное'}</h3>
			{statements.map((s, i) => (
				<FavoritesItem key={i} statement={s} />
			))}
		</div>
	);
};

export default Favorites;
