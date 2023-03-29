import React, {useState} from "react";
import styles from'./PopupInput.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const send = <FontAwesomeIcon icon={faArrowRight} />;

const PopupInput = ({setSelectedOptions,isShowInput,setIsShowInput}) => {
    const[value,setValue]=useState('');

    const handleSubmit = (e) => {
        setSelectedOptions(prev=>[...prev, {value:value,label:value}]);
        setIsShowInput(false);
    };


    return (
         <div className={`${isShowInput ? styles.active : ""} ${styles.show}`}>
            <div className={styles.inputForm}>
                        <input type="text" name="interest" className="login-box" value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="Профессиональный интерес"/>
                        <button type="button" onClick={handleSubmit}>{send}</button>
            </div>
         </div>
    );
};

export default PopupInput;