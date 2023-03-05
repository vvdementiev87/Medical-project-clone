import React from 'react';
import styles from "./Footer.module.css";
import Bosom from "../../assets/images/logo_bosom_named.png";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Youtube from "../../assets/images/youtube.png";
import Phone from "../../assets/images/telephone.png";
import Mail from "../../assets/images/envelope.png";

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className='container'>
                <Link to="/" className={styles.footerLogo}><img src={Bosom} alt="Bosom" /></Link>
                <section className='footer__list'>
                    <h5>Общество</h5>
                    <ul className={styles.footerList}>
                        <li><Link to="/">Устав</Link></li>
                        <li><Link to="/">Структура</Link></li>
                        <li><Link to="/"> Нормативные документы</Link></li>
                        {/* <li><Link to="/signup">Вступить в общество</Link></li>
                    <li><Link to="/">Оплатить взносы</Link></li>
                    <li><Link to="/">Фотогалерея</Link></li> */}
                    </ul>
                </section>
                <section className='footer__list'>
                    <h5>Обучение</h5>
                    <ul className={styles.footerList}>
                        <li><Link to="/">Центры</Link></li>
                        <li><Link to="/">Курсы</Link></li>
                        <li><Link to="/"> Учебные материалы</Link></li>
                    </ul>
                </section>

                <section className='footer__list'>
                    <h5>Контакты</h5>
                    <ul className={styles.footerList}>
                        <li>
                            <Link to="tel:+375(17)6543210" ><img src={Phone} alt="phone" />+375(17)6543210</Link>
                        </li>
                        <li>
                            <Link to="mailto:test@mail.ru" ><img src={Mail} alt="email" />test@mail.ru</Link>
                        </li>
                        <li>
                            <div className='footer__social-media-icons'>
                                <Link to="https://www.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"
                                    class="everywhere-button">
                                    <img src={Instagram} alt="Instagram" />
                                </Link>

                                <Link to="https://www.facebook.com/" rel="nofollow noopener noreferrer" target="_blank"
                                    class="everywhere-button">
                                    <img src={Facebook} alt="Facebook" />
                                </Link>

                                <Link to="https://www.youtube.com/" rel="nofollow noopener noreferrer" target="_blank"
                                    class="everywhere-button">
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