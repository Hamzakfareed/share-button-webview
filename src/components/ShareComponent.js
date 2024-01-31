// src/ShareComponent.js

import React from 'react';

const ShareComponent = () => {
    const shareInfo = () => {
        if (navigator.share) {
          navigator.share({
            title: 'Web Share Example',
            text: 'Check out this cool website!',
            url: window.location.href, // You can set any URL you want to share here
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error in sharing:', error));
        } else {
          // Fallback for browsers that don't support the Web Share API

            window.ReactNativeWebView.postMessage('requestNativeShare');
        }
      };
    
      return (
        <button onClick={shareInfo}>Share...</button>
      );
};

export default ShareComponent;
