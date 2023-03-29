import React, { useState, useMemo, useEffect } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../ui/pagination/Pagination';
import styles from './NewsGallery.module.scss';
import {NewsService} from '../../services/news.service';
import {useQuery} from 'react-query';
import Loader from "../../components/Loader/Loader";


const PageSize = 6;

const NewsGallery = () => {

    const {isLoading, data} = useQuery('News list', () => NewsService.getAll());

    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data && data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);
    console.log(currentTableData);

    return isLoading ? (
        // <h1>Loading...</h1>
        <Loader/>
    ) : (<div className="container">
            <h1 className={styles.heading}>{'Новости'}</h1>
            <Pagination
                className={styles.pagination}
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
            <NewsList news={currentTableData}/>
        </div>
    );

};

export default NewsGallery;
