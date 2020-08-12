import React from 'react';
import * as S from './styles';
import { FooterNav } from '../Constant';
import { NavLink } from 'react-router-dom';

const MainFooter = () => {
	return (
		<S.Container>
			{FooterNav.map((footerItem, index) =>
				index === 0 ? (
					<S.FooterNavItem
						as={NavLink}
						to={footerItem.link}
						imglink={footerItem.imgLink}
						imgonlink={footerItem.imgOnLink}
						key={footerItem.imgLink}
					/>
				) : (
					<S.FooterNavItem
						as={NavLink}
						to={footerItem.link}
						imglink={footerItem.imgLink}
						key={footerItem.imgLink}
					/>
				),
			)}
		</S.Container>
	);
};

export default MainFooter;
