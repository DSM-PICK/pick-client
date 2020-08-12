import React from 'react';
import * as S from './styles';
import { FooterNav } from './Constant';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
	const FooterItems = FooterNav;

	return (
		// <S.Container>
		// 	<S.FooterNavItem
		// 		as={NavLink}
		// 		to={FooterItems[0].link}
		// 		activeStyle={S.FooterNavItemActiveStyle}
		// 		imglink={FooterItems[0].imgLink}
		// 		imgonlink={FooterItems[0].imgOnLink}
		// 		key={FooterItems[0].imgLink}
		// 	/>
		// </S.Container>
		<S.Container>
			{FooterItems.map((footerItem) => (
				<S.FooterNavItem
					as={NavLink}
					to={footerItem.link}
					// activeStyle={S.FooterNavItemActiveStyle}
					imglink={footerItem.imgLink}
					imgonlink={footerItem.imgOnLink}
					key={footerItem.imgLink}
				/>
			))}
		</S.Container>
		// <S.Container>
		// 	{FooterItems.map((footerItem) => (
		// 		<S.FooterNavItem
		// 			as={Link}
		// 			to={footerItem.link}
		// 			key={footerItem.imgLink}
		// 		>
		// 			<S.FooterNavItemImg
		// 				as={NavLink}
		// 				to={footerItem.link}
		// 				// activeStyle={}
		// 				imgLink={footerItem.imgLink}
		// 				key={footerItem.imgLink}
		// 			/>
		// 		</S.FooterNavItem>
		// 	))}
		// </S.Container>
	);
};

export default Footer;
