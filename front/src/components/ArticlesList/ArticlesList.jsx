import React from 'react';
import ArticlesItem from './ArticlesItem';

import styles from './ArticlesList.module.scss';

const ArticlesList = ({ articles }) => {
	return (
		<div className={styles.articlesList}>
			{articles.map((item, index) => (
				<ArticlesItem key={index} article={item} />
			))}
		</div>
	);
};

export default ArticlesList;
