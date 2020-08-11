import React from 'react';
import * as G from '../../GlobalStyle';
import * as S from './styles';
import Header from '../Header/Header';
import Body from '../Body/Body';

const Main = () => {
	return (
		<G.GlobalContainer>
			<Header></Header>
			<Body></Body>
		</G.GlobalContainer>
	);
};

export default Main;
