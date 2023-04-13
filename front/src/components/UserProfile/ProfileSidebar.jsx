import styles from './UserProfile.module.scss';

import React from 'react';
import MaterialIcon from '../../ui/MaterialIcon';
import cn from 'classnames';

const ProfileSidebar = ({ handleOnclick, selectedComponent }) => {
	return (
		<div className={styles.sidebar}>
			<h3>Меню</h3>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 1,
				})}
				onClick={() => handleOnclick(1)}
			>
				<MaterialIcon name={'MdAccountCircle'} />
				<p>Песональные данные</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 2,
				})}
				onClick={() => handleOnclick(2)}
			>
				<MaterialIcon name={'MdPassword'} />
				<p>Смена пароля</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 3,
				})}
				onClick={() => handleOnclick(3)}
			>
				<MaterialIcon name={'MdMessage'} />
				<p>Уведомления</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 4,
				})}
				onClick={() => handleOnclick(4)}
			>
				<MaterialIcon name={'MdPayment'} />
				<p>Оплата членских взносов</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 5,
				})}
				onClick={() => handleOnclick(5)}
			>
				<MaterialIcon name={'MdFavorite'} />
				<p>Избранное</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 6,
				})}
				onClick={() => handleOnclick(6)}
			>
				<MaterialIcon name={'MdRecentActors'} />
				<p>Недавно просмотренные</p>
			</div>
			<div
				className={cn(styles.sidebarItem, {
					[styles.selectedItem]: selectedComponent === 7,
				})}
				onClick={() =>
					(window.location.href = process.env.REACT_APP_URL + '/admin')
				}
			>
				<MaterialIcon name={'MdAdminPanelSettings'} />
				<p>Панель адинистратора</p>
			</div>
		</div>
	);
};

export default ProfileSidebar;
