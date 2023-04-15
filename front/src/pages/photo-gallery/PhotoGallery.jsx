import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GalleryService } from '../../services/gallery.service';
import styles from './PhotoGallery.module.scss';

const events = [
	{
		theme_id: 1,
		title: 'Event 1',
		description: 'Description for event 1',
		url_preview: 'https://via.placeholder.com/500x300?text=Photo+1',
	},
	{
		theme_id: 2,
		title: 'Event 2',
		description: 'Description for event 2',
		url_preview: 'https://via.placeholder.com/500x300?text=Photo+4',
	},
	{
		theme_id: 3,
		title: 'Event 1',
		description: 'Description for event 3',
		url_preview: 'https://via.placeholder.com/500x300?text=Photo+1',
	},
	{
		theme_id: 4,
		title: 'Event 2',
		description: 'Description for event 4',
		url_preview: 'https://via.placeholder.com/500x300?text=Photo+4',
	},
];

const PhotoGallery = () => {
	const [gallery, setGallery] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			GalleryService.getAll().then((res) => setGallery(res));
		} catch (error) {
			setError(error.message);
		}
	}, []);
	return !gallery ? (
		<h1>{error}</h1>
	) : (
		<div className="container">
			<h1 className="page-title">Фотогалерея</h1>
			<div className={styles.gallery}>
				{gallery.map((event) => (
					<div key={event.id} className={styles.event}>
						<Link to={`/photos/${event.id}`}>
							<div>
								<img src={event.url_preview} alt={event.title} />
								<h2 className={styles.eventTitle}>{event.title}</h2>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default PhotoGallery;
