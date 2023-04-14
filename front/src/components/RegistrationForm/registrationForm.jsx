import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {getCsrfToken} from '../../api/interceptors';
import {useActions} from '../../hooks/useActions';
import {InputField} from '../basic/InputField/InputField';
import MultipleSelect from "../multiple-select/MultipleSelect";
import {TextAreaField} from "../basic/TextAreaField/TextAreaField";

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm({mode: 'all'});
    const {register: registerAction} = useActions();
    const [responseError, setResponseError] = useState(null);


    const onSubmit = async (data) => {
        await getCsrfToken();
        console.log(data);
        const {
            // password_confirmation,
            email,
            // password,
            address,
            sign_for_news,
            position,
            phone,
            surname,
            // other_info,
            last_name,
            first_name,
            experience,
            education,
            education_end,
            company,
            // category,
            birth_date,
            specialization,
            degree,
            academic_rank,
            interests,
            is_member
        } = data;

        try {
            registerAction({
                // password_confirmation: hashedPassword(password_confirmation),
                email,
                // password: hashedPassword(password),
                address,
                sign_for_news,
                position,
                phone,
                surname,
                // other_info,
                last_name,
                first_name,
                experience,
                education,
                education_end,
                company,
                // category,
                birth_date,
                specialization,
                degree,
                academic_rank,
                interests,
                is_member
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
                    id="surname"
                    name="surname"
                    placeholder="Петрович"
                    labelText="Отчество"
                    error={errors.surname}
                    {...register('surname')}
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

                <TextAreaField
                    className="reg_field_width"
                    id="address"
                    name="address"
                    labelText="Aдрес, включая почтовый индекс"
                    placeholder="..."
                    error={errors['address']}
                    aria-label="address"
                    {...register('address', {
                        required: {value: true, message: 'Укажите адрес'}
                    })}
                />

                <TextAreaField
                    className="reg_field_width"
                    id="education"
                    name="education"
                    aria-label="education"
                    labelText="Профессиональное образование: учебное заведение"
                    error={errors['education']}
                    placeholder="..."
                    {...register('education', {
                        required: {value: true, message: 'Укажите учебное заведение'}
                    })}
                />

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

                <MultipleSelect
                    id="interests"
                    name="interests"
                    labelText="Область профессиональных интересов"
                    error={errors['interests']}
                    {...register('interests', {
                        required: {value: true, message: 'Укажите ваши проф. интересы'},
                    })}/>

                <InputField
                    className="reg_field_width"
                    id="is_member"
                    name="is_member"
                    placeholder="..."
                    labelText="Являетесь ли членом других общественных объединений, если да, то каких"
                    {...register('is_member')}
                />

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
                    role="reg_button"
                    name="submit"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
        </form>
    );
}

export default RegistrationForm;


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
{/*	data-testid="password_confirmation"*/}
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

//<InputField
// 	className="reg_field_width"
// 	id="place_work"
// 	name="place_work"
// 	placeholder="..."
// 	labelText="Место работы"
// 	{...register('place_work')}
// />
