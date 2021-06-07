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
  name: string;
  cpf: string;
  phone?: string;
  cellphone?: string;
  email: string;
  pro_type: string | unknown;
  zip_code: string;
  street: string;
  number: string;
  district: string;
  locale: string;
  uf: string;
}

export interface IPros {
  [index: string]: { id: number; name: string | readonly string[] };
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