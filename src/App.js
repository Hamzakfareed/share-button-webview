// App.js in your React Native project

import React from 'react'
import ShareComponent from './components/ShareComponent';

const App = () => {
  return <ShareComponent/>;
};

export default App;

const script = `
  document.getElementById('shareButton').addEventListener('click', function() {
    window.ReactNativeWebView.postMessage('share');
  });
`;
