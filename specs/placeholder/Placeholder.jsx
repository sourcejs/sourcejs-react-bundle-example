import { Component, PropTypes } from 'react';

import s from './Placeholder.css';

/**
 * Image placeholders.
 */
export default class Placeholder extends Component {
	getImageUrl() {
		let { type, width, height } = this.props;
		let types = {
			animal: `http://placeimg.com/${width}/${height}/animals`,
			bacon: `http://baconmockup.com/${width}/${height}`,
			bear: `http://www.placebear.com/${width}/${height}`,
			beard: `http://placebeard.it/${width}/${height}`,
			cat: `http://lorempixel.com/${width}/${height}/cats`,
			city: `http://lorempixel.com/${width}/${height}/city`,
			food: `http://lorempixel.com/${width}/${height}/food`,
			nature: `http://lorempixel.com/${width}/${height}/nature`,
			people: `http://lorempixel.com/${width}/${height}/people`,
		};
		return types[type];
	}

	render() {
		let { width, height } = this.props;
		return (
			<img className={s.root} src={this.getImageUrl()} width={width} height={height}/>
		);
	}
}

Placeholder.propTypes = {
	type: PropTypes.oneOf(['animal', 'bacon', 'beard', 'bear', 'cat', 'food', 'city', 'nature', 'people']),
	width: PropTypes.number,
	height: PropTypes.number
};

Placeholder.defaultProps = {
	type: 'animal',
	width: 150,
	height: 150
};