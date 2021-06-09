import { Button } from '@material-ui/core';
import { GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Check, Close, Reorder } from '@material-ui/icons';

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

export interface IMainRow {
  id: number | undefined,
  attendance_date: string,
  specialist_name: string,
  email: string,
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
    field: 'attendance_value',
    headerName: 'Valor',
    headerAlign: 'left',
    flex: 1.3
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 2
  },
  {
    field: 'attendance_status',
    headerName: 'Status',
    flex: 1.5,
    renderCell: (params: GridCellParams) => (
      <strong>
        {params.value === "1" &&
          <Button
            variant="contained"
            className="done"
            startIcon={<Check />}
          >Status 1</Button>
        }
        {params.value === "2" &&
          <Button
            variant="contained"
            className="canceled"
            startIcon={<Close />}
          >Status 2</Button>
        }
        {params.value === "3" &&
          <Button
            variant="contained"
            className="scheduled"
            startIcon={<Reorder />}
          >Status 3</Button>
        }
      </strong>
    ),
  }
];

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