import React from 'react';
import Nav from './components/Nav'
import BaseCard from './components/base/BaseCard'
import SumForm from './components/forms/SumForm';

function App() {
  return (
    <div className="App">
      <Nav className="mb-4" />
      <BaseCard className="md:w-2/3 lg:w-1/3 mx-5 mt-14 md:m-auto md:mt-11">
        <SumForm className="m-auto" />
      </BaseCard>
    </div>
  );
}

export default App;
