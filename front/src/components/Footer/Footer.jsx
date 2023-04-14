import React from 'react';
import styles from './Footer.module.scss';
import Bosom from '../../assets/images/logo_bosom_named.png';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Youtube from '../../assets/images/youtube.png';
import Phone from '../../assets/images/telephone.png';
import Mail from '../../assets/images/envelope.png';
import {routes} from "../../routes/route";

const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
			<div className="container">
				<Link to="/" className={styles.footerLogo}>
					<img src={Bosom} alt="Bosom" />
				</Link>
				<section>
					<h5>Общество</h5>
					<ul className={styles.footerList}>
						<li>
							<Link to={routes.STATUTE.link}>Устав</Link>
						</li>
						<li>
							<Link to={routes.STRUCTURE.link}>Структура</Link>
						</li>
						<li>
							<Link to={routes.NORMATIVES.link}> Нормативные документы</Link>
						</li>

						<li>
							<Link to={routes.PHOTOS.link}>Фотогалерея</Link>
						</li>
					</ul>
				</section>
				<section>
					<h5>Обучение</h5>
					<ul className={styles.footerList}>
						<li>
							<Link to={routes.CENTERS.link}>Симуляционные центры</Link>
						</li>

						<li>
							<Link to={routes.STUDY.link}> Учебные материалы</Link>
						</li>
					</ul>
				</section>

				<section>
					<h5>Контакты</h5>
					<ul className={styles.footerList}>
						<li>
							<Link to="tel:+375(17)6543210" className={styles.contactLink}>
								<img src={Phone} alt="phone" />
								+375(17)6543210
							</Link>
						</li>
						<li>
							<Link to="mailto:test@mail.ru" className={styles.contactLink}>
								<img src={Mail} alt="email" />
								test@mail.ru
							</Link>
						</li>
						<li className={styles.socials}>
							<div>
								<Link
									to="https://instagram.com/bosom_official_?igshid=YmMyMTA2M2Y="
									rel="nofollow noopener noreferrer"
									target="_blank"
									className="everywhere-button"
								>
									<img src={Instagram} alt="Instagram" />
								</Link>

								<Link
									to="https://www.facebook.com/pg/bosom.official/offers/"
									rel="nofollow noopener noreferrer"
									target="_blank"
									className="everywhere-button"
								>
									<img src={Facebook} alt="Facebook" />
								</Link>

								<Link
									to="https://www.youtube.com/"
									rel="nofollow noopener noreferrer"
									target="_blank"
									className="everywhere-button"
								>
									<img src={Youtube} alt="Youtube" />
								</Link>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
