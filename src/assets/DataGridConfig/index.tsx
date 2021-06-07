import { GridColDef } from '@material-ui/data-grid';

export interface IRawRow {
  id_attendance: number | undefined,
  schedule_date: string,
  attendance_date: string,
  attendance_value: string,
  attendance_status: string,
  FK_id_med_reg: number,
  FK_id_specialist: number,
  id_med_reg: number,
  med_reg_date: string,
  FK_id_client: number,
  id_specialist: number,
  register: string,
  specialist_name: string,
  phone: string,
  cellphone: string,
  email: string,
  FK_id_address: number,
  FK_id_profession: number
}

export interface IRow {
  id: number | undefined,
  attendance_date: string,
  specialist_name: string,
  email: string,
  couple_id: number | undefined,
}

export interface IMainRow {
  id: number | undefined,
  attendance_date: string,
  specialist_name: string,
  email: string,
  couple_id: number | undefined,
}

export const columns: GridColDef[] = [
  {
    field: 'attendance_date',
    headerName: 'Data',
    flex: 1.3
  },
  {
    field: 'specialist_name',
    headerName: 'Profissional',
    headerAlign: 'left',
    flex: 1.3
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 2
  }
];