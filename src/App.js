import './App.css';
import React from 'react';
import Screen from './Components/screen/screen';
import BagDetailsProvider from './Components/screen/bagDetailsProvider';

function App() {
  return (
      <>
        <BagDetailsProvider>
          <Screen/>
        </BagDetailsProvider>
      </>
  );
}

export default App;
