import React from 'react'
import IntroduceAll from './IntroduceAll';
import { useState } from "react";
import ShoesContext from '../../context/ContextShoes';

const RootShoes =()=> {
    const [deal,setDeal] = useState('active');
    const [cards, setCard] = useState([
        {
          id: "1",
          count: 0,
          price: '110 $',
          priceSell: '99 $',
          image: 'shoes1.png',
          name: "00ZY",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
        },
        {
          id: "2",
          count: 0,
          price: '230 $',
          priceSell: '99 $',
          image: 'shoes2.png',
          name: "GTX",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
        },
        {
          id: "3",
          count: 0,
          price: '450 $',
          priceSell: '99 $',
          image: 'shoes3.png',
          name: "RUN98",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
        },
        {
          id: "4",
          count: 0,
          price: '110 $',
          priceSell: '99 $',
          image: 'shoes4.png',
          name: "FA55",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
        },
        {
            id: "5",
            count: 0,
            price: '210 $',
            priceSell: '99 $',
            image: 'shoes5.png',
            name: "FA55",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
          },
          {
            id: "6",
            count: 0,
            price: '180 $',
            priceSell: '99 $',
            image: 'shoes6.png',
            name: "FA55",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, odio.",
          },
      ]);
    
      const handleIncrement =(id)=> {
          const increment = [...cards];
          const index = increment.findIndex(ind => ind.id === id);
          if(increment[index].count >= 20) return;
          increment[index].count += 1;
          setCard(increment);
      }
    
      const handleDecrement =(id)=> {
          const decrement = [...cards];
          const index = decrement.findIndex(ind => ind.id === id);
          if(decrement[index].count <=0) return;
          decrement[index].count -=1;
          setCard(decrement);
      }
    
      const handleDelete =(id)=> {
        const deleted = [...cards]
        const index = deleted.findIndex(ind => ind.id === id);
        deleted[index].image = 'addidaslogo.png';
        deleted[index].name = 'Addidas 2022';
        deleted[index].text = 'Happy Christmas';
        deleted[index].price = '';
        deleted[index].priceSell = '';
        setCard(deleted)
      }
    
      const handleReset =()=> {
          const reseted = cards.map(each => {
              each.count = 0;
              return each;
          })
          setCard(reseted)
      }
    return (
        <>
        <ShoesContext.Provider
        value = {{
            State: cards,
            increment: handleIncrement,
            decrement: handleDecrement,
            deleted: handleDelete,
            reseted: handleReset,
        }}
        >
         <IntroduceAll />
         
        </ShoesContext.Provider>
        </>
    )
}

export default RootShoes;
