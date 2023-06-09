import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cards.module.scss';
import Search from '../../assets/images/search-hover.svg';

const Cards = ({ data }) => {
	return (
		<div className={`row ${styles.cards}`}>
			{data.map((card, i) => {
				return (
					<div
						key={i}
						className={`me-auto col-md-4  mb-5 ${styles.cardsItem}`}
					>
						<NavLink to={`/news/${card?.id}`} className={`mb-5 ${styles.cardsImageWrapper}`}>
							<img src={card.imageUrl} alt="course" />
							<div className={styles.searchBtn}>
								<img src={Search} alt="search" />
							</div>
						</NavLink>

						<div>
							<h3>{card.title}</h3>
							<p>{card.shortText}</p>
							<p>{card.created_at}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
