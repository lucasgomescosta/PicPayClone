import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from 'react-native-vector-icons'

import {Actions,Option,OptionLabel,Date, Divider, Value, Details, Bold, Description, Avatar, Container, Header, Title, Card, CardHeader, CardBody, UserName, CardFooter} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@lucas1gomes</Bold>
          </Description>
        <CardHeader
      </Card>

      <CardBody>
        <UserName>Lucas Gomes</UserName>
      </CardBody>

      <CardFooter>
        <Details>
          <Value>R$ 18,00</Value>

          <Divider />

          <Feather name="lock" color="#fff" size={14} />
          <Date>há 2 anos</Date>
        </Details>

        <Actions>
          <Option>
            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} /> 
            <OptionLabel>0</OptionLabel>
          </Option>
          <Option>
            <AntDesign name="hearto" color="#fff" size={14} /> 
            <OptionLabel>0</OptionLabel>
          </Option>
        </Actions>
      </CardFooter>
    </Container>
  );
}
