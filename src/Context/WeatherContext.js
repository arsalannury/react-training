import axios from "axios";
import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
  const [currents,setCurrent] = useState({});
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "tehran" },
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "bb6e17a5demshb2a313ac71021fbp1b5d73jsn3265ae4bfcb6",
    },
  };
  useEffect(() => {
    
  },[]);

  return (
    <>
      <WeatherContext.Provider value={{
      currents,
      setCurrent,
      }}>
          {children}
      </WeatherContext.Provider>
    </>
  );
};

export default WeatherProvider;
