import React from 'react';
import styles from './NewsBanner.module.scss';

const text="Новые технологии в медицине. Конференция с международным участием. 10 апреля 2023 года во Дворце Республики.";

const NewsBanner = () => {
    return (
        <div className={styles.marquee}><span>{text}</span></div>
    );
};

export default NewsBanner;