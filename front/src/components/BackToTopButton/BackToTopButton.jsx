import React, {useRef} from "react";
import styles from "./BackToTopButton.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'

const BackToTopButton = () => {
    const btn=useRef();
    const element = <FontAwesomeIcon icon={faArrowUp} />
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            btn.current.style.display = "block";
        } else {
            btn.current.style.display = "none";
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button type="button" onClick={backToTop} ref={btn} className={`btn btn-danger btn-floating btn-lg ${styles.btnBackToTop}`} id="btn-back-to-top">
            {element}
        </button>
    );
};

export default BackToTopButton;