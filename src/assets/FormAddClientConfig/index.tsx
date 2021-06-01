export interface IClientId {
  client_name: string;
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