import React, {useEffect, useState} from 'react';
import styles from './CentersGallery.module.scss';
import styled from 'styled-components';
import {CentersService} from "../../services/centers.service";
import Loader from "../../components/Loader/Loader";
import CenterList from "../../components/CentersList/CenterList";


const Tab = styled.button`
  font-size: 20px;
  font-family: 'Rubik';
  font-weight: 500;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: transparent;
  border: 0;
  outline: 0;
  flex-basis: 30%;
   background: rgba(255, 255, 255, 1);
   box-shadow: 0 0 6px rgba(68, 68, 167, 0.3);
   margin-bottom:20px;
    @media screen and (max-width:576px) {
    flex-basis: 100%;
  }
  ${({active}) =>
    active &&
    `
    border-bottom: 2px solid rgba(68, 68, 167, 0.5);
    background: rgba(68, 68, 167, 0.1);
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;
  margin-bottom: 20px;
`;
// const categories = {
//     UNIVERSITIES: 'Высшее медицинское образование',
//     COLLEGES: 'Среднее специальное медицинское образование',
//     POST_DIPLOMA: 'Постдипломное медицинское образование',
// };
// const types = [categories.UNIVERSITIES, categories.COLLEGES, categories.POST_DIPLOMA];


const CentersGallery = () => {
    const [active, setActive] = useState(null);
    const [centers, setCenters] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredCenters, setFilteredCenters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            CentersService.getCentersAndCategories().then((res) =>{
                setCenters(res['centers']);
                setCategories(res['categories']);
            });
            setFilteredCenters([...centers]);
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }, []);

    const filterCenters = (category) => {
        const filteredCenters = centers.filter(item => item?.category_id === category.id);
        setFilteredCenters([...filteredCenters]);
    };

    return centers.length < 1 ? (
            <Loader/>
        ) :
      (
            <div className="container">
                <h1 className={styles.heading}>{'Симуляционные центры'}</h1>
                <ButtonGroup>
                    {categories.map(category => (
                        <Tab
                            key={category?.id}
                            active={active?.id === category?.id}
                            onClick={() => {
                                filterCenters(category);
                                setActive(category);
                            }}
                        >
                            {category.name}
                        </Tab>
                    ))}
                </ButtonGroup>
                <div className={styles.centerWrapper}>
                    <CenterList centers={filteredCenters.length>0?filteredCenters:centers}/>
                </div>
            </div>
        );
};

export default CentersGallery;





