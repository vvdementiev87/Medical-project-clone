import React from "react";
import {
    BrowserRouter,
    Route, Routes,
    NavLink
} from 'react-router-dom';

import styles from "./Router.module.css";
import Exit from "../../assets/images/exit.png";
import Header from "../Header/Header";
import Home from "../../pages/home/Home";
import Footer from "../Footer/Footer";
import routes from '../../routes/route';
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import Registration from "../../pages/home/Registration";
import Login from "../../pages/home/Login";
import Profile from "../../pages/profile/Profile";

const isAuth=true;

function Router() {
    return (
        <BrowserRouter>
            <Header isAuth={isAuth}/>
            <div style={{minHeight:'100vh'}}>
                <Routes>
                    <Route exec path={routes.HOME} element={<Home/>}/>
                    <Route path="signup" element={<Registration/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<h2 className={styles.h2}>Страница не найдена</h2>}/>
                    
                    <Route
					path="/profile"
					element={
						<PrivateRoute isAuth={isAuth}>
							<Profile />
						</PrivateRoute>
					}
				/>
                </Routes>
            </div>
            <BackToTopButton/>
            <Footer/>

        </BrowserRouter>
    )
}

export default Router;