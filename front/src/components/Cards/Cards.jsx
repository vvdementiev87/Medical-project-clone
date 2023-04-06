import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cards.module.scss';
import Search from '../../assets/images/search-hover.svg';

const Cards = ({ data,events }) => {
	return (
		<div className={`row ${styles.cards}`}>
			{data.map((card, i) => {
				return (
					<div
						key={i}
						className={`me-auto mb-5 ${styles.cardsItem}`}
					>
						<NavLink to={`/${events}/${card?.id}`} className={`mb-5 ${styles.cardsImageWrapper}`}>
							<img src={card.image_url||card.image} alt="image" />
							<div className={styles.searchBtn}>
								<img src={Search} alt="search" />
							</div>
						</NavLink>

						<div>
							<h3>{card.title||card.name}</h3>
							<p>{card.short_description||card.short_text}</p>
							<p>{card.created_at||card.date_start}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
