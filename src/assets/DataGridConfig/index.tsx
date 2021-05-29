import { GridColDef } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core";

export const gridStyle = makeStyles(theme => ({
  root: {
    "& div.react-grid-Container": {
      color: theme.palette.text.primary
    }
  }
}));

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'firstName', headerName: 'Nome', flex: 2 },
  { field: 'lastName', headerName: 'Ultimo nome', flex: 2 },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    headerAlign: 'left',
    flex: 1.3
  }
];

export const rowsA = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export const rowsB = [
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