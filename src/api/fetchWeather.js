import axios from "axios"
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c739d67f33c6686cf7172b8cd1c08da9';

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return data
}