import PropTypes from 'prop-types'

function ConditionsDisplay({ location }) {
	return <h2>Conditions</h2>
}

ConditionsDisplay.propTypes = {
	location: PropTypes.string.isRequired
}

export default ConditionsDisplay
