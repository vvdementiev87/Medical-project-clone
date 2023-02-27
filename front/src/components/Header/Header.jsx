import React, {useRef, useState} from "react";
import Bosom from "../../assets/images/logo_bosom_named.png";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Search from "../../assets/images/search.png";
import User from "../../assets/images/user.png";
import Exit from "../../assets/images/exit.png";

const Header = ({authed}) => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const header = useRef();
    window.onscroll = function () {
        scrollFunction();
    };
    const getSearchVisible = () => {
        setSearchVisible(prev => !prev);
    };

    function scrollFunction() {
        console.log(window.pageYOffset)
        if (window.pageYOffset >= 120) {
            header.current.style.padding = "6px 0";
        } else {
            header.current.style.padding = "12px 0";
        }
    }

    return (
        <header className={styles.header} id="header" ref={header}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary h-100 p-0 navbar-custom">
                <div className="container">
                    <NavLink to="/" className={`navbar-brand ${styles.logo}`}><img src={Bosom} alt="Bosom"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between"
                         id="navbarSupportedContent">


                        <ul className="navbar-nav ms-2 mb-2 mb-lg-0 w-100 justify-content-center">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Главная</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                     aria-expanded="false">
                                    Общество
                                </div>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/" className="dropdown-item">Устав</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Структура</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Нормативные документы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Компании-партнеры</NavLink></li>
                                    <li><NavLink to="/signup" className="dropdown-item">Вступить в общество</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Оплатить взносы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Фотогалерея</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                     aria-expanded="false">
                                    Обучение
                                </div>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/" className="dropdown-item">Центры</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Курсы</NavLink></li>
                                    <li><NavLink to="/" className="dropdown-item">Учебные материалы</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Новости</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" aria-current="page">Контакты</NavLink>
                            </li>
                            <li>

                                <button className={`btn ${styles.headerSearchBtnHandler}`} onClick={getSearchVisible}
                                        type="button"><img
                                    src={Search} alt="search"/>
                                </button>
                            </li>
                        </ul>


                        <div className={`nav-item ms-2 mb-2 ${styles.headerAccountIcon}`}>
                            <NavLink to="/login" className="nav-link" aria-current="page"><img src={authed ? User : Exit}
                                                                                          alt="account"/></NavLink>
                        </div>
                    </div>

                </div>
                <form className={isSearchVisible ? 'd-flex ms-2 mb-2' : 'd-none'} role="search">
                    <input className={`me-2 ${styles.headerSearchInput}`} type="search" placeholder="Поиск"
                           aria-label="Search"/>
                    <button className={`btn ${styles.headerSearchBtn}`} type="submit"><img src={Search}
                                                                                           alt="search"/>
                    </button>
                </form>
            </nav>
        </header>
    );
};

export default Header;