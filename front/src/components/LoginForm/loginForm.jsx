import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../basic/InputField/InputField';


function LoginForm({ saveData }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" });

    const onSubmit = (data) => {
        // если форма невалидна, то метод не сработает
        // data содержит все поля форма
        console.log(data);
        saveData(data)
        console.log("Логика входа");
    }

    return <form className="login_form" data-testid="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login_frame">
            <InputField
                className="login_field_width"
                id="email"
                name="email"
                labelText="Email"
                placeholder="example@mail.com"
                error={errors.email}
                {...register("email", {
                    required: { value: true, message: 'Заполните поле email' },
                    pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Введите корректный email",
                      },
                })}
            />
            <InputField
                className="login_field_width"
                id="password"
                name="password"
                labelText="Пароль"
                error={errors.password}
                {...register("password", {
                    required: { value: true, message: 'Заполните поле пароль' },
                    minLength: { value: 6, message: 'Пароль должен быть не меньше 6 символов' },
                })}
            />
            <input className="login_btn" type="submit" value="Войти"/>
        </div>
    </form>
}

export default LoginForm;
