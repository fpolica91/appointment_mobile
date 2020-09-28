import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
export const Container = styled.SafeAreaView`
  background: #312e38;
  flex: 1;
`

export const Content = styled.View``

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px 25px;
  border-radius: 10px;
  /* margin: 30px 25px; */
  background: #fff;
  width: 100%;
`

export const UserImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`
export const UserInfo = styled.View`
  justify-content: center;
  margin-left: 15px;
`

export const UserName = styled.Text`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`
export const UserNumber = styled.Text`
  color: #7f7f8b;
  font-size: 14px;
`

export const Section = styled.ScrollView`
  border-radius: 10px;
  margin-top: 15px;
`
export const Tab = styled.View`
  padding: 30px 25px;
  margin-bottom: 1px;
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #7f7f8b;
  /* border-bottom: 1px solid  #7f7f8b; */
`

export const Item = styled.TouchableHighlight`
  padding: 0;
`
export const ItemContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
export const ItemIcon = styled(Icon)`
  height: 20px;
`

export const TouchableText = styled.Text`
  font-size: 16px;
`
