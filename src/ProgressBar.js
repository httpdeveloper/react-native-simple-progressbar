import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';

const styles = require('./style');

const barMinWidthOffset = 20;	
const defaultProps = {
		height: 12,
		width: 200,
		onProgress: null,
		hideProgressText: false
	};

export default class ProgressBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			width: new Animated.Value(0),
			progress: 0,
			percentageWidthRatio: 0,
			sizeRatio: 0,
			oldprogress: 0
		};
	}

	componentDidMount() {
		const percentageWidthRatio = 100 / this.props.width;
		const sizeWidthRatio = this.props.size / this.props.width;

		this.setState({ percentageWidthRatio, sizeWidthRatio });
		this.animate();
	}

	componentWillReceiveProps(props) {
		if (this.state.oldprogress !== props.progress) {
			this.state.width.setValue(props.progress / this.state.sizeWidthRatio); 
			this.setState({ oldprogress: props.progress });
		}
	}

	animate() {
		this.state.width.setValue(0);

		this.state.width.addListener((progress) => {
			const progressValue = parseInt(progress.value * this.state.percentageWidthRatio, 10);
			this.setState({
				progress: `${progressValue}%`
			});
			if (this.props.onProgress) {
				this.props.onProgress(progressValue);
			}
		});

		Animated.timing(this.state.width, {
			toValue: 0,
			//duration: 1000,
		}).start();
	}

	render() {
		const { 
			size,
			color,
			children,
			style,
			textStyle,
			hideProgressText
		} = this.props;

		if (!(size > 0)) return <View />;

		const fontSize = (this.state.width._value <= barMinWidthOffset) ? (this.props.height / 4 ) : (this.props.height / 2);

		return (
		<View style={[styles.container, { width: this.props.width, height: this.props.height }, style]}>
			<Animated.View 
					style={[styles.progressBar, { 
					width: this.state.width, 
					borderRadius: (style && style.borderRadius ? style.borderRadius : 5),
					backgroundColor: (color ? color : '#f00') }]} 
			>
				{!children && !hideProgressText && 
					<Text style={[styles.progressTxt, { fontSize }, textStyle]}>{this.state.progress}</Text>
				}
			</Animated.View>
			{children}
		</View>
		);
	}
}

ProgressBar.propTypes = {
    children: PropTypes.node,
    style: View.propTypes.style,
    textStyle: View.propTypes.style,
    onProgress: PropTypes.func,
};

ProgressBar.defaultProps = defaultProps;
