import { IRegistration } from "../interfaces/registration.interface";

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAIL = "REGISTRATION_FAIL";
export const SET_REGISTRATION_LOADING = "SET_REGISTRATION_LOADING";

interface IRegistrationStart {
  type: typeof REGISTRATION_START;
  payload: {
    registration: IRegistration;
    registrationLoading: boolean;
  };
}

interface IRegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS;
}

interface IRegistrationFail {
  type: typeof REGISTRATION_FAIL;
}

interface ISetRegistrationLoading {
  type: typeof SET_REGISTRATION_LOADING;
  payload: {
    registrationLoading: boolean;
  };
}

export type RegistrationActionTypes =
  | IRegistrationStart
  | IRegistrationSuccess
  | IRegistrationFail
  | ISetRegistrationLoading;
