import PropTypes from 'prop-types'
import { getCurrentWeatherData } from '../../utilis/fetch'

function Layout({ children }) {
	const currentWeatherData = getCurrentWeatherData(28716)
	currentWeatherData.then((data) => {
		const { location, current } = data
	})

	return (
		<div className="bg-red-400">
			<h2>I am the Layout</h2>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.any.isRequired
}

export default Layout
