import React from 'react';

import { MedRecordContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';

const MedRecords: React.FC = () => {
  return (
    <MedRecordContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            teste
          </div>
        </div>
      </div>
    </MedRecordContent>
  );
}

export default MedRecords;