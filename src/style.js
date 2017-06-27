import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
	container: { 
		backgroundColor: '#fff', 
		borderRadius: 5, 
		borderWidth: 0.5,
		borderColor: '#f00',
	},

	progressBar: {
		flex: 1, 
		backgroundColor: '#f00', 
		justifyContent: 'center', 
		alignItems: 'center',
	},

	progressTxt: {
		color: '#fff', 
		fontWeight: 'bold' 
	}
});
