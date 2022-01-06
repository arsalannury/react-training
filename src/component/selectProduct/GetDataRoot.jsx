import SelectContext from '../../Context/SelectContext';
import GetData from './GetData';
import {useState} from 'react';
import SelectProduct from './SelectProduct';

function GetDataRoot() {
    const [counts,setCount] = useState([
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
        {count : 0},
    ]);

  const handleIncrement = (id) =>{
   const incremented = [...counts];
   const index = incremented.findIndex(item => item.id === id);
   incremented[index].count += 1;
   setCount(incremented);
  }
  const handleDecrement = (id) =>{
   const decremented = [...counts];
   const index = decremented.findIndex(item => item.id === id);
   decremented[index].count -= 1;
   setCount(decremented);
  }
  const handleReset = () =>{
   const reseted = counts.map(item => {
       item.count = 0;
       return item;
   })
   setCount(reseted);
  }
    return (
       <>
       <SelectContext.Provider
       value={{
        countState : counts,
        increment : handleIncrement,
        decrement : handleDecrement,
        reseted : handleReset
       }}
       >
           <GetData />
           <SelectProduct />
       </SelectContext.Provider>
       </>
    )
}

export default GetDataRoot
