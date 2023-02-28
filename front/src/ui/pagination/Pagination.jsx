import React from 'react';
import cn from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './Pagination.module.scss';

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		console.log(currentPage);
		if (currentPage >= totalCount / pageSize) {
			onPageChange(currentPage);
		} else {
			onPageChange(currentPage + 1);
		}
	};

	const onPrevious = () => {
		console.log(currentPage);

		if (currentPage === 1) {
			onPageChange(currentPage);
		} else {
			onPageChange(currentPage - 1);
		}
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul className={cn(styles.pagination_container, { [className]: className })}>
			{/* Left navigation arrow */}
			<li
				className={cn(styles.pagination_item, {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}
			>
				<div className={cn(styles.arrow, styles.left)} />
			</li>
			{paginationRange.map((pageNumber, i) => {
				// If the pageItem is a DOT, render the DOTS unicode character
				if (pageNumber === DOTS) {
					return (
						<li key={i} className={cn(styles.pagination_item, styles.dots)}>
							&#8230;
						</li>
					);
				}

				// Render our Page Pills
				return (
					<li
						key={i}
						className={cn(styles.pagination_item, {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			{/*  Right Navigation arrow */}
			<li
				className={cn(styles.pagination_item, {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}
			>
				<div className={cn(styles.arrow, styles.right)} />
			</li>
		</ul>
	);
};

export default Pagination;
