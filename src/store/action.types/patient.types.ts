import { IPatient, IRegistration } from "../interfaces/registration.interface";

export const CREATE_PATIENT = "CREATE_PATIENT";
export const GET_PATIENT = "GET_PATIENT";
export const GET_PATIENTS = "GET_PATIENTS";
export const UPDATE_PATIENT = "UPDATE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";
export const SET_PATIENT_LOADING = "SET_PATIENT_LOADING";

interface CreatePatientAction {
  type: typeof CREATE_PATIENT;
  payload: {
    patient: IRegistration;
    patientsLoading: boolean;
  };
}

interface GetPatientAction {
  type: typeof GET_PATIENT;
  payload: {
    patient: IPatient;
    patientsLoading: boolean;
  };
}

interface GetPatientsAction {
  type: typeof GET_PATIENTS;
  payload: {
    patients: IPatient[];
    patientsLoading: boolean;
  };
}

interface UpdatePateintAction {
  type: typeof UPDATE_PATIENT;
  payload: {
    patient: IPatient;
    patientsLoading: boolean;
  };
}

interface DeletePatientAction {
  type: typeof DELETE_PATIENT;
  payload: {
    patient: IPatient;
    patientsLoading: boolean;
  };
}

interface SetPatientLoadingAction {
  type: typeof SET_PATIENT_LOADING;
  payload: {
    patientsLoading: boolean;
  };
}

export type PatientActionTypes =
  | CreatePatientAction
  | GetPatientAction
  | GetPatientsAction
  | UpdatePateintAction
  | DeletePatientAction
  | SetPatientLoadingAction;
