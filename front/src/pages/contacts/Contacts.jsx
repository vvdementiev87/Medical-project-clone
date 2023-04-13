import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg'

const Contacts = () => {
	return (
		<div className="container">
			<h1 className="page-title">Контакты</h1>
			<div className={styles.item}>
				<span className={styles.title}>Юридический адрес: </span>
				<span className={styles.value}>223028, Минская обл., Минский р-н, Ждановичский с/с, 81/5, помещение № 62, район аг.Ждановичи.</span>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Email: </span>
				<Link to="mailto:belsimmed@gmail.com" className={styles.value}>belsimmed@gmail.com</Link>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Телефон: </span>
				<Link to="tel:+375(17)5434236" className={styles.value}>+375(17)5434236</Link>
			</div>

			<div className={styles.mapContainer}>
				<iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f1c8266b444f947940c23f49c2308a018d1afd51928b3bcdc053602d4ac49c8&amp;source=constructor" frameborder="0"></iframe>
			</div>
			<div className={styles.social}>

				<Link
					to='https://t.me/bosom_official'
					target="_blank"
					className={styles.socialItem}
				>
					<img src={Telegram} alt="Telegram" />
				</Link>
				<Link
					to='https://instagram.com/bosom_official_?igshid=YmMyMTA2M2Y='
					target="_blank"
					className={styles.socialItem}
				>
					<img src={Instagram} alt="Instagram" />
				</Link>
				<Link
					to='https://instagram.com/bosom_official_?igshid=YmMyMTA2M2Y='
					target="_blank"
				>
					<img src={Facebook} alt="Facebook" />
				</Link>
			</div>
		</div>
	);
};

export default Contacts;
