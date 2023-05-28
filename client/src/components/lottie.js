import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Animation/upload.json';
class LottieAnimation extends React.Component {
    state = {
      isStopped: false,
      isPaused: false,
    };
  
    render() {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // The imported animation data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
      return (
        <div>
          <Lottie
            options={defaultOptions}
            height={400} // Adjust the height as needed
            width={400} // Adjust the width as needed
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
        </div>
      );
    }
  }
  