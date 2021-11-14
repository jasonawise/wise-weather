import PropTypes from 'prop-types'

function Layout({ children }) {
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
