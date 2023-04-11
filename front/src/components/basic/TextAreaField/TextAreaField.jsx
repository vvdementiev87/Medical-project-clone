import React, { forwardRef } from 'react';
import styles from './TextAreaField.module.scss';

export const TextAreaField = forwardRef(({ labelText, custom_required, value,onChange,error, ...props }, ref) => {
    return (
        <label>
            {labelText} {custom_required?<span className="custom_required">*</span>:''}
            <textarea
                {...props}
                ref={ref}
                rows={2}
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
