import { WEATHER_API_BASE_URL } from './constants'

export async function getCurrentWeatherData(location) {
	const url = `${WEATHER_API_BASE_URL}current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}&aqi=no`

	const currentWeather = await fetch(url).then((response) => response.json())

	return currentWeather
}
