import React from 'react';
import styles from "./Footer.module.css";
import Bosom from "../../assets/images/logo_bosom_named.png";
import {Link, NavLink} from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Youtube from "../../assets/images/youtube.png";
import Phone from "../../assets/images/telephone.png";
import Mail from "../../assets/images/envelope.png";

const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <NavLink to="/" className={styles.footerLogo}><img src={Bosom} alt="Bosom"/></NavLink>
                    </div>
                    <div className="col-12 col-lg-2 offset-lg-1">
                        <h5 className="mb-3">Общество</h5>
                        <ul className={styles.footerList}>
                            <li><NavLink to="/">Устав</NavLink></li>
                            <li><NavLink to="/">Структура</NavLink></li>
                            <li><NavLink to="/"> Нормативные документы</NavLink></li>
                            <li><NavLink to="/signup">Вступить в общество</NavLink></li>
                            <li><NavLink to="/">Оплатить взносы</NavLink></li>
                            <li><NavLink to="/">Фотогалерея</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12  col-lg-2 offset-lg-1">
                        <h5 className="mb-3">Обучение</h5>
                        <ul className={styles.footerList}>
                            <li><NavLink to="/">Центры</NavLink></li>
                            <li><NavLink to="/">Курсы</NavLink></li>
                            <li><NavLink to="/"> Учебные материалы</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12  col-lg-2 offset-lg-1">
                        <h5 className="mb-3">Контакты</h5>
                        <ul className={styles.footerList}>
                            <li className="mb-2">
                                <Link to="tel:+375(17)6543210" className="d-flex"><img src={Phone} alt="phone"/>+375(17)6543210</Link>
                            </li>
                            <li className="mb-3 d-flex">
                                <Link to="mailto:test@mail.ru" className="d-flex"><img src={Mail} alt="email"/>test@mail.ru</Link>
                            </li>
                            <li className="d-flex justify-content-center justify-content-md-start">

                                <Link to="https://www.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Instagram} alt="Instagram"/>
                                </Link>

                                <Link to="https://www.facebook.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Facebook} alt="Facebook"/>
                                </Link>

                                <Link to="https://www.youtube.com/" rel="nofollow noopener noreferrer" target="_blank"
                                      class="everywhere-button">
                                    <img src={Youtube} alt="Youtube"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;