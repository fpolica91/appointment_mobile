import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {
  Container,
  Content,
  Header,
  UserImage,
  UserName,
  UserNumber,
  UserInfo,
  Section,
  Tab,
  Item,
  TouchableText,
  ItemContent,
  ItemIcon,
} from './styles'

import { Text } from 'react-native'

const Profile = () => {
  return (
    <Container>
      <Content>
        <Header>
          <UserImage
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C4D03AQG0mrO-8sbvjA/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=Eym7uDCw_LAoGf36fsNMNn6289IlLtBVqq-4rMfaBQM',
            }}
          />
          <UserInfo>
            <UserName>Jesus Garcia</UserName>
            <UserNumber>(561) 273-3977</UserNumber>
          </UserInfo>
        </Header>
        <Section>
          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>Payments</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>

          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>Account Details</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>
          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>Reviews</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>
          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>Address</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>
          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>Feedback and Support</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>
          <Tab>
            <Item>
              <ItemContent>
                <TouchableText>About Us</TouchableText>
                <Icon name="chevron-right" color="#000" size={18} />
              </ItemContent>
            </Item>
          </Tab>
        </Section>
      </Content>
    </Container>
  )
}

export default Profile
