import React, {forwardRef, useEffect, useState} from 'react';
import Select from "react-select";
import styles from './MultipleSelect.module.scss';
import PopupInput from "../PopupInput/PopupInput";


const optionList = [
    {value: "Организация и менеджмент симуляционного центра", label: "Организация и менеджмент симуляционного центра"},
    {value: "Кардиология", label: "Кардиология"},
    {value: "Междисциплинарный тренинг", label: "Междисциплинарный тренинг"},
    {value: "Стандартизированный пациент", label: "Стандартизированный пациент"},
    {value: "Коммуникативные навыки", label: "Коммуникативные навыки"},
    {value: "Виртуальные и дистанционные технологии", label: "Виртуальные и дистанционные технологии"},
    {value: "Фирмы, изделия, производства", label: "Фирмы, изделия, производства"},
    {value: "Организация здравоохранения", label: "Организация здравоохранения"},
    {value: "Диагностика инструментальная", label: "Диагностика инструментальная"},
    {value: "Акушерство и гинекология", label: "Акушерство и гинекология"},
    {value: "Анестезиология и реаниматология", label: "Анестезиология и реаниматология"},
    {value: "Неотложная помощь", label: "Неотложная помощь"},
    {value: "Офтальмология", label: "Офтальмология"},
    {value: "Оториноларингология", label: "Оториноларингология"},
    {value: "Неврология и нейрохирургия", label: "Неврология и нейрохирургия"},
    {value: "Педиатрия и неонатология", label: "Педиатрия и неонатология"},
    {value: "Сестринское дело, уход", label: "Сестринское дело, уход"},
    {value: "Стоматология", label: "Стоматология"},
    {value: "Терапия", label: "Терапия"},
    {value: "Травматология и ортопедия", label: "Травматология и ортопедия"},
    {value: "Челюстно-лицевая хирургия", label: "Челюстно-лицевая хирургия"},
    {value: "Урология", label: "Урология"},
    {value: "Хирургия", label: "Хирургия"},
    {value: "Эндовидеохирургия", label: "Эндовидеохирургия"},
    {value: "Другое", label: "Другое"}
];

const customStyles = {
    control: (styles, state) => ({
        ...styles,
        boxShadow: state.isFocused ? "0 0 0 0.1rem rgba(120, 194, 173, 0.25)" : 0,
        border: state.isFocused ? "2px solid #D0EAE2" : "2px solid rgba(68, 68, 167, 0.3)",
        "&:hover": {
            borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
        }
    })
};
export const MultipleSelect = forwardRef(({labelText, error, ...props }, ref) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isShowInput, setIsShowInput] = useState(false);

    function handleSelect(data) {
        console.log(data)
            if (data[data.length - 1].value === 'Другое') {
                setIsShowInput(true);
            } else {
                setSelectedOptions(data);
                setIsShowInput(false);
            }

    }

    return (
        <label className={styles.dropdown}>
            {labelText}
            <Select
                {...props}
                ref={ref}
                aria-label={props.name}
                options={optionList}
                placeholder=""
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
                styles={customStyles}
            />
            {selectedOptions.length<=0 && (
                <span
                    className={styles.input_field_text_error}
                    data-testid="select-error"
                    role="alert"
                >
					{'Укажите ваши проф. интересы'}
				</span>
            )}


            <PopupInput setSelectedOptions={setSelectedOptions} isShowInput={isShowInput}
                        setIsShowInput={setIsShowInput}/>
        </label>
    );
});

export default MultipleSelect;