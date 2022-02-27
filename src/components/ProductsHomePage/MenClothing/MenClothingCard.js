import {Grid} from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import styled from 'styled-components';

function MenClothingCard() {
    const [clothing,getClothing] = useState([]);
     
    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
            try{
               console.log(response.data)
               getClothing(response.data)
            }catch(error){
                
            }
        }
        fetchData()
    },[])
    let sale = 50
  return (
    <>
   <Container container alignItems={'center'} justifyContent={'space-evenly'} rowGap={5}>
       {clothing.map((product,index) => (
            <Card key={product.id} container alignItems={'center'} justifyContent={'space-evenly'} flexDirection={'column'} >
            <Img src={product.image} />
            <Rate>{product.rating.rate.toString().toPersian()}</Rate>
            <Sale container alignItems={'center'} justifyContent={'space-between'}>
                <SaleText>تخفیف ویژه</SaleText>
                <SalePoint>{`% ${sale.toString().toPersian() }`}</SalePoint>
            </Sale>
        </Card>
       ))}
   </Container>
    </>
  )
}

export default MenClothingCard;

const Container = styled(Grid)`
margin: 30px 0 30px 0;
background: #cd1c1c;
padding: 15px 10px;
`
const Card = styled(Grid)`
max-width: 250px;
height: 300px;
background: #fff;
transition: all .4s ease;
padding: 10px;
border-radius: 5px;
`
const Img = styled.img`
width: 150px;
height: 150px;
`
const Rate = styled.p``
const Sale = styled(Grid)``
const SaleText = styled.span``
const SalePoint = styled.span``