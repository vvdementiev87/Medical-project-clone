import React, {useState, useMemo, useEffect} from 'react';
import Pagination from '../../ui/pagination/Pagination';
import styles from './ConferenceGallery.module.scss';
import { useQuery } from 'react-query';
import ConferenceList from "../../components/ConferenceList/ConferenceList";
import ConferenceBanner from "../../components/ConferenceList/ConferenceBanner";

const PageSize = 6;

const ConferenceGallery = () => {
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([]);
    const [banner,setBanner]=useState({});
    useEffect(()=>{
        const data=[];
        const data2=[];
        const confObj={}
        for (let i = 1; i <= 25; i++) {
            confObj[i] = {
                id: i,
                title:
                    'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
                image_url: '/imagesTest/news_1.jpg',
                short_description:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
                description:
                    '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между  Российским обществом симуляционного обучения (РОСОМЕД)  и Обществом симуляции в здравоохранении (SSH). Соглашение подписали Председатель президиума правления РОСОМЕД, Александр Колыш, и Президент SSH, Хару Окуда. Надеемся на эффективное продолжение многолетнего сотрудничества!',
                place: "Москва, проспект Пушкинский, 21",
                date_start: '2023-11-09 12:13:40',
                date_end: '2023-11-12 12:13:40'
            };
            if(i===1){
                setBanner(confObj[i])
            }
            if(i<12){
                data.push(confObj[i])
                setData(data)
            }else{
                data2.push(confObj[i])
                setData2(data2)
            }
        }

    },[])
//	const { isLoading, data } = useQuery('News list', () => NewsService.getAll());

    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data && data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    const currentTableData2 = useMemo(() => {
        const firstPageIndex = (currentPage2 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data2 && data2.slice(firstPageIndex, lastPageIndex);
    }, [currentPage2, data2]);
    console.log(currentTableData)
    console.log(currentTableData2)

    // return
    // isLoading ? (
    // 	<h1>Loading...</h1>
    // ) : (
    return <div className="container">
        <h1 className={styles.heading}>{'Конференции'}</h1>
        <section>
            <ConferenceBanner conference={banner}/>
        </section>
        <section className={`${styles.current}`}>
            <h2 className={styles.sectionHeading}>{'Предстоящие события'}</h2>
            <div className={styles.sectionWrapper}>
            <ConferenceList conferencies={currentTableData} />
                <Pagination
                    className={styles.pagination}
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </section>

        <section className={`${styles.last}`}>
            <h2 className={styles.sectionHeading}>{'Прошедшие события'}</h2>
            <div className={styles.sectionWrapper}>
                <ConferenceList conferencies={currentTableData2} />
                <Pagination
                    className={styles.pagination}
                    currentPage={currentPage2}
                    totalCount={data2.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage2(page)}
                />
            </div>

        </section>

    </div>
    // );
};

export default ConferenceGallery;
