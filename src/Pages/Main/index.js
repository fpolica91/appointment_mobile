import React, {useState, useEffect, useCallback} from 'react';
import {Container, Content, SearchInput, Section, ListContatiner, Title, ProductImage, HorizontaList} from './styles'
import {Text} from 'react-native'
import api from '../../services/api'
import axios from 'axios'


const Main = () => {
  const [barbershops, setBarbershops] = useState([])

  async function loadBarbers(){
    // http://localhost:3000/barbers
    try{

      
    const response = await axios.get('http://127.0.0.1:3333/barbers')
    // await api.get('/barbers')
    console.log(response)
    setBarbershops(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
    loadBarbers()
  },[])

  return ( 
    <>  
    {/* <Container> */}
      <Content>
        <SearchInput/>
      </Content>
      <Section>
      <HorizontaList
        horizontal
        data={barbershops}
        keyExtractor={shop => String(shop.id)}
        renderItem={({item}) => (
          <ListContatiner>
            <ProductImage source={{uri: item.image}} />
            <Title>{item.title}</Title>
            <Text>{item.address}</Text>
          </ListContatiner>
        )}
      />
      </Section>
    {/* </Container> */}
    </>
   );
}
 
export default Main;