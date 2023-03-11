import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticlesList.module.scss';
const ArticlesItem = ({ article }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.item}
			onClick={() => {
				navigate(`/articles/${article.id}`);
			}}
		>
			<img src={article.imageUrl} alt={article.id} />
			<h4>{article.description}</h4>
			<p>{article.shortText}</p>
		</div>
	);
};

export default ArticlesItem;
