import React from 'react';
import styles from "./Structure.module.scss";

//Председатель общества
const Chief = {
    first_name: "",
    surname: "",
    last_name: ""
};
//Заместитель председателя
const subChief = {
    first_name: "",
    surname: "",
    last_name: ""
};
//Секретарь правления
const administrationChief = {
    first_name: "",
    surname: "",
    last_name: ""
};
//Члены правления
const membersOfAdministration = [
    {
        first_name: "",
        surname: "",
        last_name: ""
    },
    {
        first_name: "",
        surname: "",
        last_name: ""
    },
];
//Члены ревизионной комиссии
const membersOfCommission = [
    {
        first_name: "",
        surname: "",
        last_name: ""
    },
    {
        first_name: "",
        surname: "",
        last_name: ""
    },
    {
        first_name: "",
        surname: "",
        last_name: ""
    },
    {
        first_name: "",
        surname: "",
        last_name: ""
    }
];
//Структура общества
const structure = [
    {
        title: "Председатель",
        personal_data:Chief,
        content:null
    },
    {
        title: "Заместитель председателя",
        personal_data:subChief,
        content:null
    },
    {
        title: "Правление",
        personal_data:null,
        content: [
            {
                title: "Секретарь правления",
                members:[administrationChief],
            },
            {
                title: "Члены правления",
                members: membersOfAdministration
            },
        ]
    },
    {
        title: "Ревизионная комиссия",
        personal_data:null,
        content: [
            {
                title: "Члены ревизионной комиссии",
                members: membersOfCommission
            }
        ]

    }
];


const Structure = () => {
    return (
        <div className="container">

            <h1 className={styles.heading}>{'Структура общества'}</h1>
            <div className={styles.tree}>
                <ul>
                    {structure?.map((item, idx) => (
                        <li key={idx}>
                            <div className={styles.structureBtn}>
                                <h4>{item?.title}</h4>
                                {item?.personal_data &&<p className={styles.name}>{`${item?.personal_data.last_name} ${item?.personal_data.first_name} ${item?.personal_data.surname}`}</p>}
                                {(idx !== 0 && idx !== 1) && <div className={styles.branchWrapper}>
                                    {item?.content.map((branch, idx) => (
                                        <div key={idx} className={`${styles.branch} ${styles.structureBtn}`}>
                                            <h4>{branch?.title}</h4>
                                            <div>{
                                                branch?.members.map((item, idx) => (
                                                    <p key={idx}>{`${item?.last_name} ${item?.first_name} ${item?.surname}`}</p>
                                                ))
                                            }</div>
                                        </div>

                                    ))}
                                </div>
                                }
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>

    );
};

export default Structure;