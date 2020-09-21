import React from 'react';
import { Provider } from 'react-redux';
import { Card, Table } from './components';
import store from './redux/store';

function App() {
  console.log(`🚀 ${process.env.REACT_APP_API_URL}`)
  return (
    <Provider store={store}>
      <div className="App">
        <Card />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
