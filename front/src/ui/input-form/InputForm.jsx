import React, { forwardRef, useState } from 'react';
import styles from './InputForm.module.scss';
const InputForm = forwardRef(
	(
		{
			defaultValue = '',
			isDisabled,
			error,
			placeholder = null,
			type = 'text',
			style,
			...rest
		},
		ref
	) => {
		const [dynamicLength, setDynamicLength] = useState(defaultValue.length + 1);

		return (
			<div className={styles.input} style={style}>
				<label>
					<span>{placeholder}</span>
					<input
						onInput={(e) => setDynamicLength(e.target.value.length + 1)}
						style={{
							width:
								type === 'date' || type === 'number'
									? dynamicLength + 3 + 'ch'
									: dynamicLength + 'ch',
						}}
						disabled={isDisabled}
						defaultValue={defaultValue}
						ref={ref}
						type={type}
						{...rest}
					/>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
			</div>
		);
	}
);

export default InputForm;



// const InputForm = forwardRef(
// 	(
// 		{ isDisabled, error, placeholder = null, type = 'text', style,...rest },
// 		ref
// 	) => {
// 		return (
// 			<div className={styles.input} style={style}>
// 				<label>
// 					<span>{placeholder}</span>
// 					<input disabled={isDisabled} ref={ref} type={type} {...rest} />
// 					{error && <div className={styles.error}>{error.message}</div>}
// 				</label>
// 			</div>
// 		);
// 	}
// );
//
// export default InputForm;
