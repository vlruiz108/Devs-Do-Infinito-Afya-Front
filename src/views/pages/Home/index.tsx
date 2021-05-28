import React from 'react';

import { HomeContent } from './styles';

import MainDataGrid from '../../../components/MainDataGrid';
import MainNavBar from '../../../components/MainNavBar';

const Home: React.FC = () => {

  return (
    <HomeContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <MainDataGrid />
        </div>
      </div>
    </HomeContent>
  );
}

export default Home;