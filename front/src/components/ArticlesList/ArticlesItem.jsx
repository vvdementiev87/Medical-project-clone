import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticlesList.module.scss';
import { Highlight } from "react-instantsearch-dom";
const ArticlesItem = ({ article }) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.item}
			onClick={() => {
				navigate(`/articles/${article.id}`);
			}}
		>
			<img src={article.image_url} alt={article.id} />
			<Highlight className={styles.description} attribute="description" hit={article} />
			<Highlight className={styles.short_text} attribute="short_text" hit={article} />
		</div>
	);
};

export default ArticlesItem;
