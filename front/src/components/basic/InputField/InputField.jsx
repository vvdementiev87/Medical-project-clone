import React, { forwardRef } from 'react';
import styles from './InputField.module.scss';

export const InputField = forwardRef(({ labelText, custom_required,error, ...props }, ref) => {
	return (
		<label>
			{labelText} {custom_required?<span className="custom_required">*</span>:''}
			<input
				{...props}
				ref={ref}
				aria-label={props.name}
				style={{ borderColor: error && 'red' }}
			/>
			{error && (
				<span
					className={styles.input_field_text_error}
					data-testid="input-error"
					role="alert"
				>
					{error.message}
				</span>
			)}
		</label>
	);
});
