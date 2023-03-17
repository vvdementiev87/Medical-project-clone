import React, {useEffect, useState} from 'react';
import styles from './TopSection.module.scss';
import topFoto from '../../assets/testImages/Top.png';
import { Parallax } from 'react-parallax';
import NewsBanner from "../NewsBanner/NewsBanner";
import {useNavigate} from "react-router-dom";

const text="Новые технологии в медицине. Конференция с международным участием. 10 апреля 2023 года во Дворце Республики." || null;

const TopSection = () => {

	const [announcement,setAnnouncement]=useState();
	useEffect(()=>{
		setAnnouncement(text);
	},[])
	const navigate = useNavigate();
	return (
		<div className={styles.topSection} id="topSection">
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col-sm">
						<div className={`${styles.topWrapper}`}>
							<h1 className={`${styles.topHeading}`}>
								Белорусское общество симуляционного обучения в медицине
							</h1>
							<p className={`${styles.topDescription}`}>
								БОСОМ объединяет профессионалов в области различных направлений
								медицины и ставит целью широкое внедрение в медицинскую практику
								симуляционных технологий в медицинском образовании, повышение
								квалификации медицинских работников, проведение сертификации и
								аттестации, внедрение передовых технологий в сфере
								здравоохранения
							</p>
							{text?
								<button onClick={() => {
									navigate(`/news`);
								}}>
									<NewsBanner text={announcement}/>
								</button>:""
							}
						</div>
					</div>
					<div className={`col-lg p-0 ${styles.topImage}`}>
						<Parallax
							blur={10}
							bgImage={topFoto}
							bgImageAlt="the cat"
							strength={200}
						>
							<img src={topFoto} alt="Foto" className={`${styles.mainFoto}`} />
						</Parallax>
					</div>
				</div>

			</div>
		</div>
	);
};

export default TopSection;
