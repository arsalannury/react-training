// import axios from "axios";
import { createContext,useState,useContext  } from "react";

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
  const [location,getLocation] = useState('');
  return (
    <>
      <WeatherContext.Provider
        value={{
         location,
         getLocation ,
        }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
};

export default WeatherProvider;
