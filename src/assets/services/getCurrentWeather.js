import axios from "axios";
import { kelvinTOCelsious } from "../../utils/kelvinToCelsius";
import { kelvinToFarenheit } from "../../utils/KelvinToFarenheit";
import { getIconById } from "../../utils/getIconById";
export const getCUrrentWeather = async (lat, lon) => {
    try {
        const params = { lat, lon,  appid:"c33c450ad6dd07a7a1097ff7467f6b52"};
        const res = await axios.get ("https://api.openweathermap.org/data/2.5/weather", {params});
        const weatherInfo =  {
            country:res.data.sys.country,
            city: res.data.name,
            weather: {
                main: res.data.weather[0].main,
                description:  res.data.weather[0].description,
                icon: getIconById (res.data.weather[0].icon)
            },
            temperature: {
                kelvin: res.data.main.temp,
                celsius: kelvinTOCelsious(res.data.main.temp),
                farenheit: kelvinToFarenheit(res.data.main.temp),
            }
        }
        return weatherInfo
        } catch (error) {
            console.error(error);
        }
    };
            

        