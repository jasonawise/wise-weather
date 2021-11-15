import React from 'react'

function LocationSearch() {
	const [location, setLocation] = React.useState(``)

	return (
		<>
			<h2>Location Search</h2>
			<label htmlFor="location">Enter, city or zip to get conditions</label>
			<input type="text" name="location" id="location" />
		</>
	)
}

export default LocationSearch
