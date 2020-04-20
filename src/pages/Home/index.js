import React from 'react';
import {MaterialCommunityIcons, AntDesign} from 'react-native-vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

import Sugestions from '../../Components/Suggestions';
import Activities from '../../Components/Activities';
import Tips from '../../Components/Tips';
import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Sugestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
