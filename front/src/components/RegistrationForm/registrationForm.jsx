import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {getCsrfToken} from '../../api/interceptors';
import {hashedPassword} from '../../config/password.config';

import {useActions} from '../../hooks/useActions';
import {InputField} from '../basic/InputField/InputField';
import MultipleSelect from "../../ui/multiple-select/MultipleSelect";


const customStyles = {
    control: (styles, state) => ({
        ...styles,
        boxShadow: state.isFocused ? "0 0 0 0.1rem rgba(120, 194, 173, 0.25)" : 0,
        border: state.isFocused ? "1px solid #D0EAE2" : "1px solid #CED4DA",
        "&:hover": {
            borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
        }
    })
};

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({mode: 'all'});
    const {register: registerAction} = useActions();
    const [responseError, setResponseError] = useState(null);

    const onSubmit = async (data) => {
        await getCsrfToken();
        console.log(data);
        const {
            password_confirmation,
            email,
             password,
            address,
            sign_for_news,
            position,
            phone,
            patronym,
            other_info,
            last_name,
            first_name,
            experience,
            education,
            company,
            category,
            birth_date,
        } = data;

        try {
            registerAction({
                 password_confirmation: hashedPassword(password_confirmation),
                email,
                 password: hashedPassword(password),
                address,
                sign_for_news,
                position,
                phone,
                patronym,
                 other_info,
                last_name,
                first_name,
                experience,
                education,
                company,
                category,
                birth_date,
            });
        } catch (error) {
            setResponseError(error.response.data.errors);
        }

        //reset();
    };

    return (
        <form className="reg_form" data-testid="registration-form">
            <div className="reg_frame">
                <InputField
                    className="reg_field_width"
                    id="last_name"
                    name="last_name"
                    placeholder="Петров"
                    labelText="Фамилия"
                    error={errors['last_name']}
                    {...register('last_name', {
                        required: {value: true, message: 'Укажите фамилию'},
                    })}
                />
                <InputField
                    className="reg_field_width"
                    id="first_name"
                    name="first_name"
                    placeholder="Петр"
                    labelText="Имя"
                    error={errors['first_name']}
                    {...register('first_name', {
                        required: {value: true, message: 'Укажите имя'},
                    })}
                />
                <InputField
                    className="reg_field_width"
                    id="patronym"
                    name="patronym"
                    placeholder="Петрович"
                    labelText="Отчество"
                    error={errors.patronym}
                    {...register('patronym')}
                />
                <InputField
                    className="reg_field_width"
                    id="birth_date"
                    data-testid="birth_date"
                    name="birth_date"
                    placeholder="01.01.1977"
                    type="date"
                    labelText="Дата рождения"
                    error={errors['birth_date']}
                    {...register('birth_date', {
                        required: {value: true, message: 'Укажите дату рождения'},
                    })}
                />
                <InputField
                    className="reg_field_width"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    type="email"
                    labelText="Email"
                    error={errors.email}
                    {...register('email', {
                        required: {value: true, message: 'Укажите email'},
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите корректный email',
                        },
                    })}
                />
                <InputField
                    className="reg_field_width"
                    id="phone"
                    name="phone"
                    placeholder="+375..."
                    error={errors['phone']}
                    type="tel"
                    labelText="Телефон в международном формате"
                    {...register('phone', {
                        required: {value: true, message: 'Укажите телефон'}
                    })}
                />

                <label>
                    Aдрес, включая почтовый индекс
                    <textarea
                        className="reg_field_width"
                        id="address"
                        name="address"
                        placeholder="..."
						error={errors['address']}
                        aria-label="address"
                        {...register('address', {
                            required: {value: true, message: 'Укажите адрес'}
                        })}
                    />
                </label>

                <label>
                    Профессиональное образование: учебное заведение
                    <textarea
                        className="reg_field_width"
                        id="education"
                        name="education"
                        aria-label="education"
						error={errors['education']}
                        placeholder="..."
                        {...register('education', {
                            required: {value: true, message: 'Укажите учебное заведение'}
                        })}
                    />
                </label>

                <InputField
                    className="reg_field_width"
                    id="education_end"
                    name="education_end"
                    placeholder="..."
                    labelText="Год окончания учебного заведения"
					error={errors['education_end']}
                    {...register('education_end', {
                        required: {value: true, message: 'Укажите год окончания учебного заведения'}
                    })}
                />

                <InputField
                    className="reg_field_width"
                    id="specialization"
                    name="specialization"
                    placeholder="..."
					error={errors['specialization']}
                    labelText="Специальность"
                    {...register('specialization', {
                        required: {value: true, message: 'Укажите специальность'}
                    })}
                />

                <InputField
                    className="reg_field_width"
                    id="experience"
                    name="experience"
                    placeholder="..."
                    type="number"
					error={errors['experience']}
                    labelText="Стаж работы в специальности"
                    {...register('experience', {
                        required: {value: true, message: 'Укажите ваш стаж'}
                    })}
                />

                <InputField
                    className="reg_field_width"
                    id="company"
                    name="company"
                    placeholder="..."
					error={errors['company']}
                    labelText="Место работы"
                    {...register('company', {
                        required: {value: true, message: 'Укажите место работы'}
                    })}
                />

                <InputField
                    className="reg_field_width"
                    id="position"
                    name="position"
                    placeholder="..."
                    labelText="Должность"
                    error={errors.position}
                    {...register('position', {
                        required: {value: true, message: 'Укажите должность'},
                    })}
                />

                <InputField
                    className="reg_field_width"
                    id="degree"
                    name="degree"
                    placeholder="..."
                    labelText="Ученая степень"
                    error={errors.degree}
                    {...register('degree')}
                />

                <InputField
                    className="reg_field_width"
                    id="academic_rank"
                    name="academic_rank"
                    placeholder="..."
                    labelText="Ученое звание"
                    error={errors.academic_rank}
                    {...register('academic_rank')}
                />

                {/*<label>*/}
                {/*	Дополнительная информация (докторантура, аспирантура, ученая степень,*/}
                {/*	прочее)*/}
                {/*	<textarea*/}
                {/*		className="reg_field_width"*/}
                {/*		id="other_info"*/}
                {/*		name="other_info"*/}
                {/*		placeholder="..."*/}
                {/*		aria-label="other_info"*/}
                {/*		{...register('other_info')}*/}
                {/*	/>*/}
                {/*</label>*/}

                <label className="interestWrapper">
                    Область профессиональных интересов
                    <MultipleSelect {...register('interests', {
                        required: {value: true, message: 'Укажите ваши проф. интересы'},
                    })}/>
                </label>


                <InputField
                    className="reg_field_width"
                    id="is_member"
                    name="is_member"
                    placeholder="..."
                    labelText="Являетесь ли членом других общественных объединений, если да, то каких"
                    {...register('is_member')}
                />

                {/*<InputField*/}
                {/*	className="reg_field_width"*/}
                {/*	id="password"*/}
                {/*	data-testid="password"*/}
                {/*	name="password"*/}
                {/*	type="password"*/}
                {/*	labelText="Пароль"*/}
                {/*	error={errors.password}*/}
                {/*	{...register('password', {*/}
                {/*		required: { value: true, message: 'Укажите пароль' },*/}
                {/*		minLength: {*/}
                {/*			value: 6,*/}
                {/*			message: 'Пароль должен быть не меньше 6 символов',*/}
                {/*		},*/}
                {/*	})}*/}
                {/*/>*/}
                {/*<InputField*/}
                {/*	className="reg_field_width"*/}
                {/*	id="password_confirmation"*/}
                {/*	data-testid="ppassword_confirmation"*/}
                {/*	name="password_confirmation"*/}
                {/*	type="password_confirmation"*/}
                {/*	labelText="Подтвердите пароль"*/}
                {/*	error={errors.password}*/}
                {/*	{...register('password_confirmation', {*/}
                {/*		required: { value: true, message: 'Укажите пароль' },*/}
                {/*		minLength: {*/}
                {/*			value: 6,*/}
                {/*			message: 'Пароль должен быть не меньше 6 символов',*/}
                {/*		},*/}
                {/*	})}*/}
                {/*/>*/}

                <label>
					<span className="reg_checkbox_text">
						Хотите ли Вы получать наши новости себе на почту?
					</span>
                    <input
                        id="sign_for_news"
                        name="sign_for_news"
                        type="checkbox"
                        aria-label="sign_for_news"
                        {...register('sign_for_news')}
                    />
                </label>

                <label>
					<span className="reg_checkbox_text">
						Данной отметкой Вы подтверждаете, что изучили и принимаете{' '}
                        <a href="/signup">Правила сайта</a>
					</span>
                    <input
                        id="has_agreed"
                        name="has_agreed"
                        type="checkbox"
                        aria-label="has_agreed"
                        {...register('has_agreed')}
                    />
                </label>
                <input
                    className="reg_btn"
                    name="submit"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
        </form>
    );
}

export default RegistrationForm;
