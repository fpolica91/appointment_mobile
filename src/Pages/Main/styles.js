import { View } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #312e38;
`

export const Content = styled.SafeAreaView`
  flex: 1;
`

export const SearchInput = styled.TextInput`
  margin: 30px 35px;
  height: 56px;
  width: 340px;
  border-radius: 10px;
  background: #232129;
  color: #ffffff;
  padding: 0 16px;
  font-size: 16px;
`

export const Section = styled.View`
  position: absolute;
  top: 150px;
`

export const AvailableToday = styled.View``
export const AvailableTodayTitle = styled.Text`
  font-size: 24px;
  color: #fff;
  margin-left: 15px;
  margin-top: 5px;
  font-family: Archivo_700Bold;
`

export const HorizontaList = styled.FlatList``

export const ListContatiner = styled(View)`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  width: 220px;
`
export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins_600SemiBold;
`
