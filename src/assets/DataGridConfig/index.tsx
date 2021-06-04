import { GridCellParams, GridColDef } from '@material-ui/data-grid';

export interface IRow {
  [index: number]: { id: string; name: string; age: string; date: string; };
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
  {
    field: 'date',
    headerName: 'Data',
    renderCell: (params: GridCellParams) => (
      <p>(params.value as Date).getFullYear()</p>
    ),
    flex: 2
  }
];