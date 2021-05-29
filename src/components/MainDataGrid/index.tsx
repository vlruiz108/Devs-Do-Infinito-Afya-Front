import React from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { rowsA, columns, rowsB } from '../../assets/DataGridConfig'

const MainDataGrid: React.FC = () => {

  return (
    <GridContent>
      <div className="main-item">
        <DataGrid rows={rowsA} columns={columns} pageSize={15} checkboxSelection />
      </div>
      <div className="co-item">
        <DataGrid rows={rowsB} columns={columns} pageSize={15} checkboxSelection />
      </div>
    </GridContent>
  );
}

export default MainDataGrid;