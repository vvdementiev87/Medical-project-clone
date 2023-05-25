import React, { useState } from 'react';
import styles from './PopupInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const send = <FontAwesomeIcon icon={faArrowRight} />;

const PopupInput = ({ handleOnClick, isShowInput }) => {
	const [value, setValue] = useState('');

	return (
		<div className={`${isShowInput ? styles.active : ''} ${styles.show}`}>
			<div className={styles.inputForm}>
				<input
					type="text"
					name="interest"
					className="login-box"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					placeholder="Профессиональный интерес"
				/>
				<button type="button" onClick={() => handleOnClick(value)}>
					{send}
				</button>
			</div>
		</div>
	);
};

export default PopupInput;
