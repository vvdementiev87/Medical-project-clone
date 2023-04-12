import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import styles from "./Partners.module.scss";

const Partners = () => {
    const navigate = useNavigate();
    return (
        <div className="container">

            {/*<h1 className={styles.heading}>{'Структура общества'}</h1>*/}
            {/*<div className={styles.tree}>*/}
            {/*    <ul>*/}
            {/*        {structure?.map((item,idx)=>(*/}
            {/*            <li key={idx}>*/}
            {/*                <div className={styles.structureBtn}>*/}
            {/*                    <h4>{item?.title}</h4>*/}
            {/*                    <p className={styles.name}>{item?.name}</p>*/}
            {/*                    {(idx!==0 && idx!==1) && <div className={styles.branchWrapper}>*/}
            {/*                        {item?.content.map((branch, idx) => (*/}
            {/*                            <div key={idx} className={`${styles.branch} ${styles.structureBtn}`}>*/}
            {/*                                <h4>{branch?.title}</h4>*/}
            {/*                                <div>{*/}
            {/*                                    branch?.names.map((item,idx)=>(*/}
            {/*                                        <p key={idx}>{item}</p>*/}
            {/*                                    ))*/}
            {/*                                }</div>*/}
            {/*                            </div>*/}

            {/*                        ))}*/}
            {/*                    </div>*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </li>*/}
            {/*        ))}*/}

            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

export default Partners;