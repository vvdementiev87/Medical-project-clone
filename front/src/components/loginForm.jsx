import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Логика входа");
    }

    return <form className="login_form">
        <div className="login_frame">

            <label>Email
                <input className="login_field_width" id="email" name="email" placeholder="example@mail.com" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            </label>

            <label>Пароль
                <input className="login_field_width" id="password" name="password" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            </label>
            {email && password && <input className="login_btn" type="submit" value="Войти" onClick={handleSubmit}/>}
        </div>
    </form>
}

export default LoginForm;
