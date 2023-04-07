import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {NewsService} from "../../services/news.service";
import styles from "../News/News.module.scss";
import Cards from "../Cards/Cards";
import {Link} from "react-router-dom";
import {routes} from "../../routes/route";
import {ConferenciesService} from "../../services/conference.service";

const ConfAndSeminars = () => {
    const {isLoading, data} = useQuery('Conferencies list', () => ConferenciesService.getFutureEvents());
    const [lastConferencies, setLastConferencies] = useState([]);
    console.log(data)
    useEffect(() => {
        data?.sort(function (a, b) {
            return new Date(a?.date_start) - new Date(b?.date_start);
        });
        setLastConferencies(data?.length>3?data.splice(-3):data);
    }, [data])


    return (
        <div className={styles.news} id="news">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.newsHeading}>Конференции и семинары</h2>
                    </div>
                </div>


                <div className="row">
                    {lastConferencies?   <Cards data={lastConferencies} events="conferencies"/>:
                        <h4>Loading...</h4>}
                </div>

                <div className="row">
                    <div className="col">
                        <Link
                            to={routes.CONFERENCIES.link}
                            className={`${styles.allEvents}`}
                        >
                            Смотреть все события
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfAndSeminars;