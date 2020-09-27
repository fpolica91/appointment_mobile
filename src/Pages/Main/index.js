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
import data from '../../../server.json'

const Main = () => {
  const [barbershops, setBarbershops] = useState([])

  useEffect(() => {
    setBarbershops(data?.barbers)
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
