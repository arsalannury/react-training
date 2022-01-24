// import axios from "axios";
import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
  return (
    <>
      <WeatherContext.Provider
        value={{
         
        }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
};

export default WeatherProvider;
