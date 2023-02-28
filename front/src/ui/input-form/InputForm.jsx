import React, { forwardRef } from 'react';
import styles from './InputForm.module.scss';
const InputForm = forwardRef(
	(
		{ isDisabled, error, placeholder = null, type = 'text', style, ...rest },
		ref
	) => {
		return (
			<div className={styles.input} style={style}>
				<label>
					<span>{placeholder}</span>
					<input disabled={isDisabled} ref={ref} type={type} {...rest} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
			</div>
		);
	}
);

export default InputForm;
