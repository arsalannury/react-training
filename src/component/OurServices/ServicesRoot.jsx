import { Component } from 'react'
import ParentServices from './ParentServices';
import ServicesContext from '../../Context/ServicesContext';

class ServiceRoot extends Component {
    state = {
        services: [
          {
            id: "1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "For You",
            icon: "1.png",
          },
          {
            id: "2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "Every Where",
            icon: "2.png",
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "Best",
            icon: "3.png",
          },
          {
            id: "4",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "Every Year",
            icon: "4.png",
          },
          {
            id: "5",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "With Us",
            icon: "5.png",
          },
          {
            id: "6",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio?",
            footer: "Trust",
            icon: "6.png",
          },
        ],
      };
    render() { 
        return(
            <>
            <ServicesContext.Provider
            value={{
             serviceState : this.state.services
            }}
            >
                <ParentServices />
            </ServicesContext.Provider>
            </>
        )
    }
}
 
export default ServiceRoot;