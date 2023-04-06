import React, {useState, useMemo, useEffect, useCallback} from 'react';
import Pagination from '../../ui/pagination/Pagination';
import styles from './ConferenceGallery.module.scss';
import {useQuery} from 'react-query';
import ConferenceList from "../../components/ConferenceList/ConferenceList";
import ConferenceBanner from "../../components/ConferenceList/ConferenceBanner";
import {ConferenciesService} from "../../services/conference.service";
import {axiosClassic} from "../../api/interceptors";
import {getConferenciesUrl} from "../../config/api.config";

const PageSize = 3;

const ConferenceGallery = () => {
    // const {isLoading, data} = useQuery('Conferencies list', () => ConferenciesService.getAll());


    const [actualConferencies, setActualConferencies] = useState([]);
    const [oldConferencies, setOldConferencies] = useState([]);
    const [banner, setBanner] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);


    useEffect(() => {
         axiosClassic.get(getConferenciesUrl(''), {
            }).then((res)=>{
                if(res?.data){
                    console.log(res?.data)
                    setIsLoading(false);
                    const futureArray=res?.data['future'];
                    setActualConferencies([...futureArray]);
                    setOldConferencies(res?.data['past']);
                    setBanner(futureArray[futureArray.length-1]);
                }

            });

    }, []);


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return actualConferencies && actualConferencies.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, actualConferencies]);

    const currentTableData2 = useMemo(() => {
        const firstPageIndex = (currentPage2 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return oldConferencies && oldConferencies.slice(firstPageIndex, lastPageIndex);
    }, [currentPage2, oldConferencies]);


    return isLoading ? (
    	<h1>Loading...</h1>
    ) : (
     <div className="container">
        <h1 className={styles.heading}>{'Конференции'}</h1>
        <section>
            <ConferenceBanner conference={banner}/>
        </section>
        <section className={`${styles.current}`}>
            <h2 className={styles.sectionHeading}>{'Предстоящие события'}</h2>
            <div className={styles.sectionWrapper}>
                <ConferenceList conferencies={currentTableData}/>
                <Pagination
                    className={styles.pagination}
                    currentPage={currentPage}
                    totalCount={actualConferencies?.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </section>

        <section className={`${styles.last}`}>
            <h2 className={styles.sectionHeading}>{'Прошедшие события'}</h2>
            <div className={styles.sectionWrapper}>
                <ConferenceList conferencies={currentTableData2}/>
                <Pagination
                    className={styles.pagination}
                    currentPage={currentPage2}
                    totalCount={oldConferencies?.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage2(page)}
                />
            </div>

        </section>

    </div>
    );
};

export default ConferenceGallery;
