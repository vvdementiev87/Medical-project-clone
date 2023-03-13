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
import NewsItemPage from '../../pages/news-item/NewsItemPage';
import NewsGallery from '../../pages/news-gallery/NewsGallery';

import Forum from '../../pages/forum/Forum';
import ForumTopic from '../../pages/forum-topic/ForumTopic';

const isAuth = true;
import { useAuth } from '../../hooks/useAuth';
import ArticleVideoSwitchPage from '../../pages/article-video-switch/ArticleVideoSwitchPage';
import ArticlesGallery from '../../pages/articles-gallery/ArticlesGallery';
import ArticleItemPage from '../../pages/article-item/ArticleItemPage';

function Router() {
	const { user } = useAuth();

	return (
		<>
			<Header isAuth={!!user} />
			<div style={{ minHeight: '100vh' }}>
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
					<Route exact path="/articles" element={<ArticlesGallery />} />
					<Route path="/articles/:articleId" element={<ArticleItemPage />} />

					<Route path="/forum" element={<Forum />} />	
					<Route path="forum/:topicId" element={<ForumTopic />} />

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
