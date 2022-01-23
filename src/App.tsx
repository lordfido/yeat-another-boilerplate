import React from 'react'
import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import Bitcoin from './containers/Bitcoin';

const App: React.FC = () => {
  return (
    <MainLayout className="App">
      <Bitcoin />
    </MainLayout>
  );
}

export default App;
