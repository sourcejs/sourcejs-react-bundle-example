import { Component, PropTypes } from 'react';

import s from './Button.css';

/**
 * The only true button.
 */
export default class Button extends Component {
	constructor(props) {
		super(props);

		this.sizes = {
			small: '10px',
			normal: '14px',
			large: '18px'
		};
	}

	onClick() {
		alert('click');
	}

	render() {
		let styles = {
			color: this.props.color,
			fontSize: this.sizes[this.props.size]
		};

		return (
			<button className={s.root} style={styles} onClick={this.onClick}>{this.props.children}</button>
		);
	}
}

Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};

Button.defaultProps = {
	color: '#333',
	size: 'normal'
};
