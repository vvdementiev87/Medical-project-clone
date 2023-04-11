import React from 'react';
import styles from "./Structure.module.scss";

const structure=[
    {
        title:"Председатель",name:"",
        content:[
            {
                title: "", name:""
            }]
    },
    {
        title: "Заместитель председателя",name:"",
        content:[
            {
                title: "", name:""
            }]
    },
    {
        title:"Правление",
        content:[
            {
                title: "Секретарь правления", name:""
            },
            {
                title: "Члены правления", name:""
            },
           ]
    },
    {
        title:"Ревизионная комиссия",
        content:[
            {
                title:"Члены ревизионной комиссии"
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
                    {structure?.map((item,idx)=>(
                        <li key={idx}>
                            <h4>{item?.title}</h4>

                            {(idx!==0 && idx!==1) && <div className={styles.branchWrapper}>
                                {item?.content.map((branch, idx) => (
                                    <p key={idx} className={styles.branch}>{branch?.title}</p>
                                ))}
                            </div>
                            }

                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Structure;