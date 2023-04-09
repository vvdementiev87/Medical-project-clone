import React, { useState } from 'react';
import ProfileAccount from '../../components/UserProfile/ProfileAccount';
import ProfileFavorites from '../../components/UserProfile/ProfileFavorites';
import ProfileMessages from '../../components/UserProfile/ProfileMessages';
import ProfileRecentViewed from '../../components/UserProfile/ProfileRecentViewed';
import ProfileSidebar from '../../components/UserProfile/ProfileSidebar';
import styles from './Profile.module.scss';
import cn from 'classnames';
import ProfilePayment from '../../components/UserProfile/ProfilePayment';
import ProfilePasswordChange from '../../components/UserProfile/ProfilePasswordChange';

const Profile = () => {
	const [chidrenComponent, setChildrenComponent] = useState(<ProfileAccount />);
	const [selectedComponent, setSelectedComponent] = useState(1);
	const handleOnclick = (id = 0) => {
		console.log(id);
		switch (id) {
			case 1:
				setChildrenComponent(<ProfileAccount />);
				setSelectedComponent(1);
				break;
			case 2:
				setChildrenComponent(<ProfilePasswordChange />);
				setSelectedComponent(2);
				break;
			case 3:
				setChildrenComponent(<ProfileMessages />);
				setSelectedComponent(3);
				break;
			case 4:
				setChildrenComponent(<ProfilePayment />);
				setSelectedComponent(4);
				break;
			case 5:
				setChildrenComponent(<ProfileFavorites />);
				setSelectedComponent(5);
				break;
			case 6:
				setChildrenComponent(<ProfileRecentViewed />);
				setSelectedComponent(6);
				break;
			case 7:
				setChildrenComponent(<>Empty 2</>);
				break;
			default:
				break;
		}
	};
	return (
		<div className={cn('container', styles.wrapper)}>
			<div className={styles.main}>
				<ProfileSidebar
					handleOnclick={handleOnclick}
					selectedComponent={selectedComponent}
				/>
				{chidrenComponent}
			</div>
		</div>
	);
};

export default Profile;
