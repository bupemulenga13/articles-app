export interface IClientBirthDetails {
  id?: number;
  client: number;
  place_of_birth: string;
  district_of_birth: string;
  province_of_birth: string;
  born_in_zambia: boolean;
  country_of_origin: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientAuxiliaryDetails {
  id?: number;
  client: number;
  nupin: string;
  nrc: string;
  passport: string;
  drivers_license: string;
  art_number: string;
  nhima_number: string;
  safe_motherhood_number: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientAddress {
  id?: number;
  client: number;
  house_number: string;
  street_name: string;
  district_of_birth: number;
  province_of_birth: number;
  post_code: string;
  landmarks: string;
  address_type: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientContact {
  id?: number;
  client: number;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}

export interface IClientRelationship {
  id?: number;
  client: number;
  relative_client_id: number;
  full_name: string;
  primary_phone: string;
  secondary_phone: string;
  address: string;
  relation: string;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
}
