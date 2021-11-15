import React from 'react'
import ConditionsDisplay from './ConditionsDisplay/ConditionsDisplay'
import Layout from './Layout/Layout'
import LocationSearch from './LocationSearch/LocationSearch'

function WeatherController() {
	const [location, setLocation] = React.useState('')

	const handleLocationSearch = (e) => setLocation(e)

	return (
		<Layout>
			<LocationSearch onLocationSearch={handleLocationSearch} />
			<ConditionsDisplay location={location} />
		</Layout>
	)
}

export default WeatherController
