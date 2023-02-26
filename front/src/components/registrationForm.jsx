import { useState } from "react";

function RegistrationForm() {
    const [user, setUser] = useState({
        has_agreed: false,
        sign_for_news: false,
    })

    const handleChange = (fieldName, value) => {
        user[fieldName] = value;
        setUser(user);
        console.log(user[fieldName]);
    }

    const handleCheck = (fieldName, value) => {
        user[fieldName] = !user[fieldName];
        setUser(user);
        console.log(user[fieldName]);
    }

    const handleSubmit = (event) => {
        if(!user.has_agreed) {
            alert('Пожалуйста, подтверждите, что изучили и принимаете Правила сайта')
        }
        event.preventDefault();
        console.log(user);
    }

    return <form className="reg_form">
        <div className="reg_frame">
            <label>Фамилия
                <input className="reg_field_width" id="last_name" name="last_name" placeholder="Петров" type="text" value={user.last_name} onChange={(event)=>handleChange('last_name', event.target.value)} />
            </label>

            <label>Имя
                <input className="reg_field_width" id="first_name" name="first_name" placeholder="Петр" type="text" value={user.first_name} onChange={(event)=>handleChange('first_name', event.target.value)} />
            </label>

            <label>Отчество
                <input className="reg_field_width" id="patronym" name="patronym" placeholder="Петрович" type="text" value={user.patronym} onChange={(event)=>handleChange('patronym', event.target.value)}/>
            </label>
            
            <label>Дата рождения
                <input className="reg_field_width" id="birth_date" name="birth_date" placeholder="01.01.1977" type="date" value={user.birth_date} onChange={(event)=>handleChange('birth_date', event.target.value)}/>
            </label>
            
            <label>Email
                <input className="reg_field_width" id="email" name="email" placeholder="example@mail.com" type="email" value={user.email} onChange={(event)=>handleChange('email', event.target.value)}/>
            </label>
            
            <label>Телефон в международном формате
                <input className="reg_field_width" id="phone" name="phone" placeholder="+375..." type="tel" value={user.phone} onChange={(event)=>handleChange('phone', event.target.value)}/>
            </label>
            
            <label>Aдрес, включая почтовый индекс
                <textarea className="reg_field_width" id="address" name="address" placeholder="..." value={user.address} onChange={(event)=>handleChange('address', event.target.value)}></textarea>
                </label>
            
            <label>Место работы
                <input className="reg_field_width" id="company" name="company" placeholder="..." type="text" value={user.company} onChange={(event)=>handleChange('company', event.target.value)}/>
                </label>
            
            <label>Должность
                <input className="reg_field_width" id="position" name="position" placeholder="..." type="text" value={user.position} onChange={(event)=>handleChange('position', event.target.value)}/>
            </label>
            
            <label>Категория
                <input className="reg_field_width" id="category" name="category" placeholder="..." type="text" value={user.position} onChange={(event)=>handleChange('position', event.target.value)}/>
            </label>
            
            <label>Стаж
                <input className="reg_field_width" id="experience" name="experience" placeholder="..." type="number" value={user.experience} onChange={(event)=>handleChange('experience', event.target.value)}/>
            </label>

            <label>Профессиональное образование: учебное заведение и год его окончания
                <textarea className="reg_field_width" id="education" name="education" placeholder="..." value={user.education} onChange={(event)=>handleChange('education', event.target.value)}></textarea>
            </label>

            <label>Дополнительная информация (докторантура, аспирантура, ученая степень, прочее)
                <textarea className="reg_field_width" id="other_info" name="other_info" placeholder="..." value={user.other_info} onChange={(event)=>handleChange('other_info', event.target.value)}></textarea>
            </label>

            <label>Пароль
                <input className="reg_field_width" id="password" name="password" type="password" value={user.password} onChange={(event)=>handleChange('password', event.target.value)}/>
            </label>

            <label><span className="reg_checkbox_text">Хотите ли Вы получать наши новости себе на почту?</span>
                <input id="sign_for_news" name="sign_for_news" type="checkbox" onChange={()=>handleCheck('sign_for_news')} /></label>

            <label><span className="reg_checkbox_text">Данной отметкой Вы подтверждаете, что изучили и принимаете <a href="/signup">Правила сайта</a></span>
                <input id="has_agreed" name="has_agreed" type="checkbox" onChange={()=>handleCheck('has_agreed')} /></label>

            <input className="reg_btn" name="submit" type="submit" value="Регистрация" onClick={handleSubmit}/>

        </div>
    </form>
}

export default RegistrationForm;
