import React from 'react';
import styles from './RoundedButton.module.scss';
import {Link} from "react-router-dom";

const RoundedButton = ({text, to}) => {
    return (

        <Link
            to={to}
            aria-current="page"
            className={styles.button}
        >
            {text}
        </Link>
    );
};

export default RoundedButton;
