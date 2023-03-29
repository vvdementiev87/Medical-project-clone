import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoGallery.module.scss'

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
  }
]

const PhotoGallery = () => {
  
	// return
	// isLoading ? (
	// 	<h1>Loading...</h1>s
	// ) : (
  return <div className='container'>
			<h1 className='page-title'>Фотогалерея</h1>
      <div className={styles.gallery}>
        {events.map((event) => (
          <div key={event.theme_id} className={styles.event}>
          <Link to={`/photos/${event.theme_id}`}>
              <div>
                <img src={event.url_preview} alt={event.title} />
                <h2 className={styles.eventTitle}>{event.title}</h2>
              </div>
          </Link>
        </div>
        ))}
      </div>
		</div>
	// );
};

export default PhotoGallery;
