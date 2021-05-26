import React from 'react';

import { HomeContent } from './styles';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columnsA: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'Nome', width: 155 },
  { field: 'lastName', headerName: 'Ultimo nome', width: 165 },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 115,
  }
];

const rowsA = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 500 },
  { id: 6, lastName: 'Melisandre', firstName: 'Rossini', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const columnsB: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'nome', headerName: 'Nome', width: 115 },
  {
    field: 'idade',
    headerName: 'Idade',
    type: 'number',
    width: 125,
  }
];

const rowsB = [
  { id: 1, nome: 'Jon', idade: 35 },
  { id: 2, nome: 'Cersei', idade: 42 },
  { id: 3, nome: 'Jaime', idade: 45 },
  { id: 4, nome: 'Arya', idade: 16 },
  { id: 5, nome: 'Daenerys', idade: 500 },
  { id: 6, nome: 'Rossini', idade: 150 },
  { id: 7, nome: 'Ferrara', idade: 44 },
  { id: 8, nome: 'Rossini', idade: 36 },
  { id: 9, nome: 'Harvey', idade: 65 },
  { id: 10, nome: 'Rossini', idade: 36 },
  { id: 11, nome: 'Harvey', idade: 65 },
];

const Home: React.FC = () => {

  return (
    <HomeContent>
      <div className="container">
        <div className="navbar-y secondary-item">
          <h1>Logo</h1>
        </div>
        <div className="col-b secondary-item flex">
          <div className="col-m primary-item">
            <DataGrid rows={rowsA} columns={columnsA} pageSize={10} checkboxSelection />
          </div>
          <div className="col-s primary-item">
            <DataGrid rows={rowsB} columns={columnsB} pageSize={10} checkboxSelection />
          </div>
        </div>
      </div>
    </HomeContent>
  );
}

export default Home;