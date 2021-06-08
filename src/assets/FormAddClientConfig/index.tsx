export interface IPatientId {
  name: string;
  cpf: string;
  phone?: string;
  cellphone?: string;
  email: string;
  blood_type: bloodType | unknown;
  zip_code: string;
  street: string;
  number: string;
  district: string;
  locale: string;
  uf: string;
}

export interface IProId {
  specialist_name: string;
  cpf: string;
  phone?: string;
  cellphone?: string;
  email: string;
  id_profession: number | unknown;
  zip_code: number;
  street: string;
  number: string;
  district: string;
  locale: string;
  uf: string;
  register: string;
}


export interface IProfession {
  id: number; profession_name: string
}

export interface IProfessional {
  id: number; name: string | readonly string[]
}

export interface IPatient {
  id: number; name: string | readonly string[]
}

export interface IZipContent {
  cep: string
}

export enum bloodType {
  'A+',
  'A-',
  'B+',
  'B-',
  'O+',
  'O-',
  'AB+',
  'AB-'
}