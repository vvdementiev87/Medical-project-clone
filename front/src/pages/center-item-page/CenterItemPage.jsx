import React, {useEffect, useState} from 'react';
import {CentersService} from "../../services/centers.service";
import Loader from "../../components/Loader/Loader";
import styles from "./CenterItemPage.module.scss";
import {Link, useParams} from "react-router-dom";
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import Mail from "../../assets/images/envelope.png";
import Phone from "../../assets/images/telephone.png";
import Instagram from "../../assets/images/instagram.png";

const CenterItemPage = () => {
    const {centerId} = useParams();
    const [centerItem, setCenterItem] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            CentersService.getById(centerId).then((res) => setCenterItem(res));
            console.log(centerItem.photos)
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }, []);


    return !centerItem ? (
            <Loader/>
        ) :
        (
            <div className="container">
                <h1 className={styles.heading}>{centerItem.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: centerItem.description }} className={styles.description}/>
                {centerItem.photos&&<div className={styles.photos}>
                    <Gallery>
                        <div className={styles.gallery}>
                            {centerItem.photos.map((photo) => (
                                <Item
                                    key={photo?.image_url}
                                    original={photo?.image_url}
                                    thumbnail={photo?.image_url}
                                    width="100%"
                                    height="100vh"
                                >
                                    {({ref, open}) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={photo?.image_url}
                                        />
                                    )}
                                </Item>
                            ))}
                        </div>
                    </Gallery>
                </div>
                }
                <div className={styles.contacts}>
                    <h5 className={styles.contactsHeading}>Подробную информацию по всем программам и условиям обучения вы можете узнать по телефону или на сайте центра:</h5>
                    <div className={styles.phoneWrapper}>
                        <span>Телефон: </span>
                        <Link to={`tel:${centerItem.phone}`} className={styles.phone}>
                            {centerItem.phone}
                        </Link>
                    </div>
                    <div className={styles.linkWrapper}>
                        <span>Сайт: </span>
                        <Link
                            to={`${centerItem.link}`}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            className={styles.link}
                        >
                            {centerItem.link}
                        </Link>
                    </div>
                    <div className={styles.emailWrapper}><span>Email: </span>
                        <Link to={`mailto:${centerItem.email}`} className={styles.email}>
                            {centerItem.email}
                    </Link>
                    </div>
                </div>
            </div>
        );
};

export default CenterItemPage;