# react-native-simple-progressbar
A simple, lightweight and fully customizable progress bar for React Native.

## Usage
```
import ProgressBar from 'react-native-simple-progressbar';

<ProgressBar progress={200} size={1000} />
<ProgressBar height={20} progress={200} size={1000} />
<ProgressBar width={100} progress={200} size={1000} />
<ProgressBar 
    width={250} 
    height={15} 
    progress={200} 
    size={1000} 
    style={{ borderWidth: 0, backgroundColor: '#eee' }} 
/>
 <ProgressBar 
    width={250} 
    height={25} 
    progress={300} 
    size={1000} 
    style={{ borderWidth: 0, backgroundColor: '#eee' }} 
    hideProgressText={true} 
/>
 <ProgressBar 
     width={250} 
     height={15} 
     progress={200} 
     size={1000}
     onProgress={(progressValue) => this.setState({ progressValue })} 
     style={{ borderWidth: 0, backgroundColor: '#eee' }} 
     hideProgressText={true} 
/>
<Text>Progress: {this.state.progressValue}%</Text>
<ProgressBar 
    width={250} 
    height={12} 
    progress={200} 
    size={1000} 
    color={'#3F51B5'} 
    style={{ borderWidth: 0, backgroundColor: '#eee' }} 
 />
 <ProgressBar 
    width={250} 
    height={12} 
    progress={200} 
    size={1000} 
    color={'#3F51B5'} 
    style={{ borderRadius: 1, borderWidth: 0, backgroundColor: '#eee' }} 
  />
 <ProgressBar 
    width={170} 
    height={12} 
    progress={200} 
    size={1000} 
    color={'#3F51B5'} 
    style={{ borderRadius: 1, borderWidth: 0.5, backgroundColor: '#fff', borderColor: '#3F51B5' }} 
  />
```
## Screenshot
![alt text](https://media.giphy.com/media/Z45MOkrqzZjNe/giphy.gif)

## Installation
`npm install react-native-simple-progressbar@https://github.com/httpdeveloper/react-native-simple-progressbar.git --save`

## Supports following props 
| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| progress | integer | Progress of Indicator (Required) |  |
| size | integer | Max size of Indicator (Required) | |
| width | integer | Width of the progress bar (optional) | 200 |
| height | integer | Height of the progress bar (optional) | 12 |
| color | string | Color of progress bar (optional) | red |
| hideProgressText | bool | Hide the progress indicator text (optional) | false |
| onProgress | function | Callback function (optional) | 0 |
| style | [style](https://facebook.github.io/react-native/docs/text.html#style) | Optional style override for the progress bar component (optional) | |

# License
MIT
