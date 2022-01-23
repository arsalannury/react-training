// import useWeather from '../Context/WeatherContext';

function WeatherLoaction() {
//   const use = useWeather();
  const location = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJzYWxhbm5uIiwiYSI6ImNreXJmMGJxNzBtZjcyb3RncG5rMDc1dGYifQ.TS7y-VExTZnK1OA4V4GmNw";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [],
    });
  };
  return (
    <>
      <div id="map" style="width: 400px; height: 300px;"></div>
    </>
  );
}

export default WeatherLoaction;
