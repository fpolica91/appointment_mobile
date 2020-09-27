import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #312e38;
`

export const Content = styled.SafeAreaView`
  flex: 1;
`

export const SearchInput = styled.TextInput`
  margin: 20px 35px;
  height: 50px;
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
export const Recommended = styled.View``

export const AvailableToday = styled.View`
  margin-top: 30px;
`
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
  width: 270px;
`
export const ProductImage = styled.Image`
  height: 150px;
  width: 250px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: Poppins_600SemiBold;
`

export const Address = styled.Text`
  font-size: 12px;
  color: #7f7f8b;
`

export const FeatherIcon = styled(Icon)`
  font-size: 16px;
  color: #232129;
`
