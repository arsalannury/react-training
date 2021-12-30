import { Component } from 'react'
import SaleContext from '../../context/SaleContext';
import GetProductSale from './GetProductSale';
class ProviderSale extends Component {
    state = {
        saleProduct: [
          {
            id: "1",
            image: "shirt1.jpg",
            name: "Zayn00",
            price: "50 $",
            salePrice: "40 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "2",
            image: "shirt2.jpg",
            name: "Ass09",
            price: "75 $",
            salePrice: "55 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "3",
            image: "shirt3.jpg",
            name: "QQ12",
            price: "70 $",
            salePrice: "55 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "4",
            image: "shirt4.jpg",
            name: "SDA",
            price: "99 $",
            salePrice: "50 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "5",
            image: "shirt5.jpg",
            name: "OO6",
            price: "99 $",
            salePrice: "50 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "6",
            image: "shirt6.jpg",
            name: "Dayan22",
            price: "120 $",
            salePrice: "90 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "7",
            image: "shirt7.jpg",
            name: "Kayrin0012",
            price: "110 $",
            salePrice: "99 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "8",
            image: "shirt8.jpg",
            name: "Mad0056",
            price: "87 $",
            salePrice: "60 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "9",
            image: "shirt9.jpg",
            name: "Lq12",
            price: "130 $",
            salePrice: "90 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
          {
            id: "10",
            image: "shirt10.jpg",
            name: "Er33",
            price: "120 $",
            salePrice: "95 $",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
            timer: 600000000,
          },
        ],
      };
    render() { 
        return(
           
            <SaleContext.Provider
            value={{
                States : this.state.saleProduct
            }}
            >
             <GetProductSale />
            </SaleContext.Provider>
            
        )
    }
}
 
export default ProviderSale;