import React from 'react';
import styles from './LoginButton.module.scss';

const LoginButton = ({ title, handleClick, type = null }) => {
	return (
		<button type={type} onClick={handleClick} className={styles.button}>
			{title}
		</button>
	);
};

export default LoginButton;
