import { GridColDef } from '@material-ui/data-grid';

export interface IRow {
  [index: string]: { id: number; name: string; age: number, date: string };
}


export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', flex: 2 },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    headerAlign: 'left',
    flex: 1.3
  },
  { field: 'date', headerName: 'Data', flex: 2 }
];