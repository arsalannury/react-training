import { Component } from 'react'
import { useAdsContext } from '../../Context/AdsContext';
import AllAds from './AllAds';
import Ads from './Ads';
import axios from 'axios';

class AdsProvider extends Component {

    constructor(){
        super()
        this.state = {electronic : []}
    } 

   async componentDidMount(){
       const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
       this.setState({electronic : response.data})
    }
    render() { 
        return (
            <>
            <useAdsContext.Provider
            value={{
            electronics : this.state.electronic
            }}
            >
            <AllAds />
            <Ads />
            </useAdsContext.Provider>
            </>
        );
    }
}
 
export default AdsProvider;
