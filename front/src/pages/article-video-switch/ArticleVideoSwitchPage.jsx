import React, { useState } from 'react';
import { set } from 'react-hook-form';
import ArticlesGallery from '../articles-gallery/ArticlesGallery';
import VideoGallery from '../video-gallery/VideoGallery';
import ArticlesItem from '../../components/ArticlesList/ArticlesItem';
import VideoItem from '../../components/VideoList/VideoItem';
import styles from './ArticleVideoSwitchPage.module.scss';
import cn from 'classnames';
import 'instantsearch.css/themes/algolia-min.css';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {
	InstantSearch,
	Hits,
	SearchBox,
	Pagination,
	Configure,
} from 'react-instantsearch-dom';
import { MAILISEARCH_URL } from '../../config/api.config';

const searchClient = instantMeiliSearch(MAILISEARCH_URL, '', {
	primaryKey: 'id',
});

const ArticleVideoSwitchPage = () => {
	const [isSwitch, setIsSwitch] = useState(true);

	const Hit = ({ hit }) =>
		isSwitch ? (
			<VideoItem key={hit.id} video={hit} />
		) : (
			<ArticlesItem key={hit.id} article={hit} />
		);

	return (
		<div>
			<div className={styles.selector}>
				<button
					className={cn({ [styles.selected]: isSwitch })}
					onClick={() => setIsSwitch(true)}
				>
					Видеоматериалы
				</button>
				<button
					className={cn({ [styles.selected]: !isSwitch })}
					onClick={() => setIsSwitch(false)}
				>
					Сатьи
				</button>
			</div>
			<div className={styles.container}>
				<h1>{isSwitch ? 'Видеоматериалы' : 'Статьи'}</h1>
				<div className="ais-InstantSearch">
					<InstantSearch
						indexName={isSwitch ? 'videos' : 'articles'}
						searchClient={searchClient}
					>
						<Configure hitsPerPage={9} />
						<div className={styles.content}>
							<SearchBox />
							<Hits hitComponent={Hit} />
							<Pagination showLast={true} />
						</div>
					</InstantSearch>
				</div>
			</div>
		</div>
	);
};

export default ArticleVideoSwitchPage;
