import React from 'react';
import * as S from './styles';
import { FooterNav } from '../Constant';
import { NavLink, Redirect } from 'react-router-dom';

const checkPath = (pathname) => {
	return pathname === '/main' ||
		pathname === '/attendance/class' ||
		pathname === '/attendance/club'
		? 0
		: location.pathname === '/schedule'
		? 1
		: location.pathname === '/bugreport'
		? 2
		: location.pathname === '/tonggei'
		? 3
		: -1;
};

const NavFooter = ({ location }) => {
	const linkIndex = checkPath(location.pathname);

	return (
		<S.Container>
			{linkIndex !== -1 ? (
				FooterNav.map((footerItem, index) =>
					linkIndex === index ? (
						<S.FooterNavItem
							as={NavLink}
							to={{ pathname: footerItem.link, state: { indexNum: index } }}
							imgonlink={footerItem.imgOnLink}
							key={footerItem.imgLink}
						/>
					) : (
						<S.FooterNavItem
							as={NavLink}
							to={{ pathname: footerItem.link, state: { indexNum: index } }}
							imglink={footerItem.imgLink}
							key={footerItem.imgLink}
						/>
					),
				)
			) : (
				<Redirect to="/main" />
			)}
		</S.Container>
	);
};

export default NavFooter;
