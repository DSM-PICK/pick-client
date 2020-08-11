import React from 'react';
import * as G from '../../GlobalStyle';
import * as S from './styles';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Main = () => {
	return (
		<G.GlobalContainer>
			<Header>
				<S.MainHeader>
					<S.MainHeaderLogo />
				</S.MainHeader>
			</Header>
			<Body></Body>
			<Footer></Footer>
		</G.GlobalContainer>
	);
};

export default Main;
