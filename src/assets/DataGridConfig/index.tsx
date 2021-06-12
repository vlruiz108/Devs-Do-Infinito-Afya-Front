import { GridColDef } from '@material-ui/data-grid';

export interface IRawRow {
  id_attendance: number | undefined,
  schedule_date: string,
  attendance_date: string,
  attendance_value: string,
  attendance_status: string,
  FK_id_med_reg: string,
  FK_id_specialist: string,
  id_med_reg: string,
  med_reg_date: string,
  FK_id_client: string,
  id_specialist: string,
  register: string,
  specialist_name: string,
  phone: string,
  cellphone: string,
  email: string,
  FK_id_address: string,
  FK_id_profession: string
}

export interface IMainRow {
  id: number | undefined,
  attendance_date: string,
  specialist_name: string,
  client_name: string,
  email_client: string,
  attendance_value: string,
  attendance_status: string,
  couple_id: number | undefined,
}

export interface IProRow {
  id: number | undefined,
  register: string,
  profession_name: string,
  specialist_name: string,
  email: string,
  couple_id: number | undefined,
}

export interface IPatientRow {
  id: number | undefined,
  cpf: string,
  cellphone: string,
  client_name: string,
  email: string,
  id_med_reg: string,
  couple_id: number | undefined,
}


export const columnsPatient: GridColDef[] = [
  {
    field: 'cpf',
    headerName: 'N° de CPF',
    flex: 1.5
  },
  {
    field: 'client_name',
    headerName: 'Paciente',
    flex: 2
  },
  {
    field: 'cellphone',
    headerName: 'Telefone',
    headerAlign: 'left',
    flex: 2
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 2
  }
];

export const columnsPro: GridColDef[] = [
  {
    field: 'register',
    headerName: 'N° de registro',
    flex: 1
  },
  {
    field: 'profession_name',
    headerName: 'Especialidade',
    flex: 2
  },
  {
    field: 'specialist_name',
    headerName: 'Profissional',
    headerAlign: 'left',
    flex: 2
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 2
  }
];