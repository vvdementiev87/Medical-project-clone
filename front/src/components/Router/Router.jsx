import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Router.module.scss';
import Header from '../Header/Header';
import Home from '../../pages/home/Home';
import Footer from '../Footer/Footer';
import { routes, PrivateRoute, PublicRoute } from '../../routes/route';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import Registration from '../../pages/registration/Registration';
import Login from '../../pages/login/Login';
import Profile from '../../pages/profile/Profile';
import VideoGallery from '../../pages/video-gallery/VideoGallery';
import VideoItemPage from '../../pages/video-item/VideoItemPage';
import NewsGallery from '../../pages/news-gallery/NewsGallery';
import NewsItemPage from '../../pages/news-item/NewsItemPage';
import Forum from '../../pages/forum/Forum';
import ForumTopic from '../../pages/forum-topic/ForumTopic';
import { useAuth } from '../../hooks/useAuth';
import ArticleVideoSwitchPage from '../../pages/article-video-switch/ArticleVideoSwitchPage';
import ArticlesGallery from '../../pages/articles-gallery/ArticlesGallery';
import ArticleItemPage from '../../pages/article-item/ArticleItemPage';
import ConferenceItemPage from '../../pages/conference-item/ConferenceItemPage';
import ConferenceGallery from '../../pages/conference-gallery/ConferenceGallery';
import PhotoGallery from '../../pages/photo-gallery/PhotoGallery';
import EventPhotos from '../../pages/event-photos/EventPhotos';
import Statute from "../../pages/statute/Statute";
import Normatives from "../../pages/normatives/Normatives";
import NormativeItem from "../../pages/normative-item/NormativeItem";
import CentersGallery from "../../pages/centers-gallery/CentersGallery";
import CenterItemPage from "../../pages/center-item-page/CenterItemPage";
import Contacts from "../../pages/contacts/Contacts";
import Structure from "../../pages/structure/Structure";
import Partners from "../../pages/Partners/Partners";
import History from '../../pages/history/History';


const isAuth = true;

function Router() {
	const { user } = useAuth();

	return (
		<>
			<Header isAuth={!!user} />
			<div className={styles.router}>
				<Routes>
					<Route exec path={routes.HOME.link} element={<Home />} />
					<Route
						path={routes.LOGIN.link}
						element={
							<PublicRoute isAuth={!!user}>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path={routes.REGISTER.link}
						element={
							<PublicRoute isAuth={!!user}>
								<Registration />
							</PublicRoute>
						}
					/>

					<Route exact path="/videos" element={<VideoGallery />} />
					<Route path="/videos/:videoId" element={<VideoItemPage />} />
					<Route exact path="/news" element={<NewsGallery />} />
					<Route path="/news/:newsId" element={<NewsItemPage />} />
					<Route exact path="/conferencies" element={<ConferenceGallery />} />
					<Route
						path="/conferencies/:conferenceId"
						element={<ConferenceItemPage />}
					/>
					<Route exact path="/articles" element={<ArticlesGallery />} />
					<Route path="/articles/:articleId" element={<ArticleItemPage />} />
					<Route path="/statute" element={<Statute />} />
					<Route path="/normatives" element={<Normatives />} />
					<Route path="/normatives/:id" element={<NormativeItem />} />
					<Route path="/centers" element={<CentersGallery/>} />
					<Route path="/centers/:centerId" element={<CenterItemPage/>} />
					<Route path={routes.STRUCTURE.link} element={<Structure/>} />
					<Route path={routes.PARTNERS.link} element={<Partners/>} />

					<Route
						path={routes.FORUM.link}
						element={
							<PrivateRoute isAuth={!!user}>
								<Forum />
							</PrivateRoute>
						}
					/>
					<Route
						path={`${routes.FORUM.link}/:postId`}
						element={
							<PrivateRoute isAuth={!!user}>
								<ForumTopic />
							</PrivateRoute>
						}
					/>

					<Route
						path={routes.STUDY.link}
						element={
							<PrivateRoute isAuth={!!user}>
								<ArticleVideoSwitchPage />
							</PrivateRoute>
						}
					/>

					<Route
						path={routes.PROFILE.link}
						element={
							<PrivateRoute isAuth={!!user}>
								<Profile />
							</PrivateRoute>
						}
					/>

					<Route
						path={routes.PHOTOS.link}
						element={
							// <PrivateRoute isAuth={!!user}>
							<PhotoGallery />
							// </PrivateRoute>
						}
					/>
					<Route path={`${routes.PHOTOS.link}/:id`} element={<EventPhotos />} />
					<Route
						path={routes.CONTACTS.link}
						element={<Contacts />}
					/>
					<Route
						path={routes.HISTORY.link}
						element={<History />}
					/>
					<Route
						path="*"
						element={<h2 className={styles.h2}>Страница не найдена</h2>}
					/>
				</Routes>
			</div>
			<BackToTopButton />
			<Footer />
		</>
	);
}

export default Router;
