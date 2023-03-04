import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Cards.module.css";
import Search from "../../assets/images/search-hover.svg";

const Cards = ({data}) => {

    return (
        <div className={`row ${styles.cards}`}>
            {data.map((card) => {
                return (
                    <div className={`me-auto col-md-4  mb-5 me-auto ${styles.cardsItem}`}>
                        <NavLink to="/" className={`mb-5 ${styles.cardsImageWrapper}`}>
                            <img src={card.image} alt="course"/>
                            <div className={styles.searchBtn}>
                                <img src={Search} alt="search"/>
                            </div>
                        </NavLink>

                        <div>
                            <h3>{card.title}</h3>
                            <p>
                                {card.description}
                            </p>
                            <p>{card.date}</p>
                        </div>

                    </div>
                )
            })}

        </div>
    );
};

export default Cards;