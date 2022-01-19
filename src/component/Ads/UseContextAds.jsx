import { Component } from 'react'
import { useAdsContext } from '../../Context/AdsContext';
import AllAds from './AllAds';
import Ads from './Ads';
import axios from 'axios';
import { TextureEncoding } from 'three';

class AdsProvider extends Component {

    constructor(){
        super()
        this.state = {electronic : [], isLoading : true}
    } 

   async componentDidMount(){
       const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
       this.setState({electronic : response.data})
       this.setState({isLoading : false});
    }
    render() { 
        return (
            <>
            <useAdsContext.Provider
            value={{
            electronics : this.state.electronic,
            loading : this.state.isLoading,
            }}
            >
            <AllAds />
            </useAdsContext.Provider>
            </>
        );
    }
}
 
export default AdsProvider;
