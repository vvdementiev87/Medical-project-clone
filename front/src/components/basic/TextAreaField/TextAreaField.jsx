import React, { forwardRef } from 'react';
import styles from './TextAreaField.module.scss';

export const TextAreaField = forwardRef(({ labelText, error, ...props }, ref) => {
    return (
        <label>
            {labelText}
            <textarea
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
