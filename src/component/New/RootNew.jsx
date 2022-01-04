import CollectionContext from "../../Context/CollectionContext"
import NewAll from "./NewAll"
import {useState} from 'react';

function RootNew() {
    const [All,setAll] = useState([
        {id:'1',title:'Smart HeadPhones',image:'buds-removebg-preview.png'},
        {id:'2',title:'Touch Real Time',image:'watch.png'},
        {id:'3',title:'Best Technology',image:'note20.png'},
    ])
    return (
       <>
       <CollectionContext.Provider
       value={{
           AllProduct : All,
       }}
       >
        <NewAll />
       </CollectionContext.Provider>
       </>
    )
}

export default RootNew
