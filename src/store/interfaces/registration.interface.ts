export interface IRegistration {
  id?: number;
  client_uuid: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  nick_name: string;
  date_of_birth: Date;
  sex: string;
  age: number;
  estimated_age: number;
  language: string;
  notes: string;
  enabled: boolean;
}

// tslint:disable-next-line: no-empty-interface
export interface IPatient extends IRegistration {
  id: number;
}

export interface IPatientState {
  patient: {
    patient: IPatient | null;
    patientLoading: boolean;
  };
  patients: {
    patients: IPatient[];
    patientsLoading: boolean;
  };
}
