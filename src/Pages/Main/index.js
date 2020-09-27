import React, { useState, useEffect, useMemo } from 'react'
import {
  Container,
  Content,
  SearchInput,
  Section,
  ListContatiner,
  Title,
  ProductImage,
  HorizontaList,
  AvailableToday,
  AvailableTodayTitle,
  Recommended,
  FeatherIcon,
  Address,
} from './styles'
import { Text } from 'react-native'

import axios from 'axios'

const Main = () => {
  const [barbershops, setBarbershops] = useState([])

  async function loadBarbers() {
    // http://localhost:3000/barbers
    try {
      const response = await axios.get('http://127.0.0.1:3333/barbers')
      setBarbershops(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    loadBarbers()
  }, [])

  const distance = useMemo(() => {
    const number = Math.floor(Math.random() * 3 + 1)
    return number
  }, [])

  return (
    <>
      <Container>
        <Content>
          <SearchInput
            placeholder="Book your cut"
            placeholderTextColor="#FFF"
          />
        </Content>
        <Section>
          <Recommended>
            <AvailableTodayTitle>Recommended</AvailableTodayTitle>
            <HorizontaList
              horizontal
              data={barbershops}
              keyExtractor={(shop) => String(shop.id)}
              renderItem={({ item }) => (
                <ListContatiner>
                  <ProductImage source={{ uri: item.image }} />
                  <Title>
                    {item.title} <FeatherIcon name="scissors" />
                  </Title>

                  <Address>
                    {distance}mi - {item.address}
                  </Address>
                </ListContatiner>
              )}
            />
          </Recommended>

          <AvailableToday>
            <AvailableTodayTitle>Available Today</AvailableTodayTitle>
            <HorizontaList
              horizontal
              data={barbershops}
              keyExtractor={(shop) => String(shop.id)}
              renderItem={({ item }) => (
                <ListContatiner>
                  <ProductImage source={{ uri: item.image }} />
                  <Title>
                    {item.title} <FeatherIcon name="scissors" />{' '}
                  </Title>
                  <Address>
                    {distance}mi - {item.address}
                  </Address>
                </ListContatiner>
              )}
            />
          </AvailableToday>
        </Section>
      </Container>
    </>
  )
}

export default Main
