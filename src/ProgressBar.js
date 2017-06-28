import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';

const styles = require('./style');

const barMinWidthOffset = 20;	
const maxFontSize = 15;
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
		};
	}

	componentDidMount() {
		this.animate();
		if (this.props.progress > 0 && this.props.size > 0) {
			setTimeout(() => {
				const sizeWidthRatio = this.props.size / this.props.width;
				const progress = (this.props.progress > this.props.size) ? this.props.size : this.props.progress;
				this.state.width.setValue(progress / sizeWidthRatio);
			}, 100);
		}
	}

	componentWillReceiveProps(props) {
		if (this.props.progress !== props.progress) {
			const sizeWidthRatio = props.size / props.width;
			const progress = (props.progress > props.size) ? props.size : props.progress;
			this.state.width.setValue(progress / sizeWidthRatio); 
		}
	}

	animate() {
		const percentageWidthRatio = 100 / this.props.width;
		this.state.width.setValue(0);

		this.state.width.addListener((progress) => {
			const progressValue = parseInt(progress.value * percentageWidthRatio, 10);
			this.setState({
				progress: progressValue
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
			hideProgressText,
			height
		} = this.props;

		if (!(size > 0)) return <View />;

		let fontSize = (this.state.progress <= barMinWidthOffset) ? (height / 3) : (height / 2);
		fontSize = (fontSize > maxFontSize) ? maxFontSize : fontSize;

		return (
		<View style={[styles.container, { width: this.props.width, height: this.props.height }, style]}>
			<Animated.View 
					style={[styles.progressBar, { 
					width: this.state.width, 
					borderRadius: (style && style.borderRadius ? style.borderRadius : 5),
					backgroundColor: (color ? color : '#f00') }]} 
			>
				{!children && !hideProgressText && 
					<Text style={[styles.progressTxt, { fontSize }, textStyle]}>{this.state.progress}%</Text>
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
