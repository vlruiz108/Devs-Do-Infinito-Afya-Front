import React from 'react';

import { MedRecordContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import FormMedRecords from '../../../components/FormMedRecords';

const MedRecords: React.FC = () => {
  return (
    <MedRecordContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <FormMedRecords />
          </div>
        </div>
      </div>
    </MedRecordContent>
  );
}

export default MedRecords;