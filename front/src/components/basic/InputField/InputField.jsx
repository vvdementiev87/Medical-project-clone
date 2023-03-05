import React, { forwardRef } from "react";
import './InputField.css'

export const InputField = forwardRef(({ labelText, error, ...props }, ref) => {
	return (
		<label>
			{labelText}
			<input
				{...props}
				ref={ref}
				aria-label={props.name}
				style={{ borderColor: error && "red" }}
			/>
			{error && <span className='input-field-text-error' data-testid="input-error" role="alert">{error.message}</span>}
		</label>);
});
