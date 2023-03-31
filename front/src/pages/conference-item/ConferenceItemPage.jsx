import {Link, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import styles from './ConferenceItemPage.module.scss';
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {ConferenciesService} from "../../services/conference.service";
import {useAuth} from "../../hooks/useAuth";
import {axiosClassic} from "../../api/interceptors";
import {getConferenciesUrl} from "../../config/api.config";
import File from '../../assets/testDocs/Program.pdf';
import DownloadPdfLink from "../../components/DownloadPdfLink/DownloadPdfLink";


const ConferenceItemPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const {conferenceId} = useParams();
    const [conferenceItem,setConferenceItem]=useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isActual, setIsActual] = useState(false);


     // const { isLoading, data }  = useQuery('Conferencies list', () => ConferenciesService.getAll());
    useEffect(() => {
        axiosClassic.get(getConferenciesUrl(''), {
        }).then((res)=>{
             const date=Date.now();
            if(res.data){
                setIsLoading(false);
            }
            const confArray=[...res?.data['future'],...res?.data['past']];


            for (let i of confArray) {
                if (String(i['id']) === conferenceId) {
                    setConferenceItem(i);
                    if(date<Date.parse(i['date_start'])) {
                        setIsActual(true);
                    }
                }
            }}
        );

    }, [conferenceId]);
    // const conferenceItem = data.find((conference) => String(conference?.id) === conferenceId);

    return isLoading ? (
        	<h1>Loading...</h1>
        ) : (
        <div>
            <div className="container">
                <div className={styles.profile}>
                    <div className={styles.card}>
                        <img
                            src={conferenceItem?.image} alt={conferenceItem?.id}
                            className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <span className={styles.cardTitle}>{conferenceItem?.name}</span>
                            <p className={styles.subTitle}>Место проведения:</p>
                            <span>{conferenceItem?.place}</span>
                            <p className={styles.subTitle}>Дата старта:</p>
                                <time dateTime={conferenceItem?.date_start} className={styles.cardDate}>{conferenceItem?.date_start}</time>
                            <p className={styles.subTitle}>Дата окончания:</p>
                            <time dateTime={conferenceItem?.date_end} className={styles.cardDate}>{conferenceItem?.date_end}</time>
                            {isActual && user? (
                                 <DownloadPdfLink url={conferenceItem?.program} text={`Скачать программу конференции`} />
                                 ) : ''
                            }
                        </div>
                    </div>
                    <p className={styles.cardDescription}>{conferenceItem?.description}</p>
                    {isActual && user?(
                        <div>
                            <p>Заявки на участие принимаются до {conferenceItem?.date_start.toLocaleString()}</p>

                            <button onClick={() => {
                                navigate(`/`);
                            }} className={styles.buttonRequest}><span>Подать заявку на участие</span></button>
                        </div>):''

                    }
                </div>
            </div>
        </div>
    )
};

export default ConferenceItemPage;
