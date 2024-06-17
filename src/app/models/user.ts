export class Auth {
    id?: number;
    username?: string;
    password?: string;
    role?: number;
  }
  
  export class Location {
    id?: number;
    country?: string;
    city?: string;
    zone?: string;
    address?: string;
    neighborhood?: string;
  }
  
  export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    birthDate?: string;
    gender?: string;
    maritalStatus?: string;
    housingType?: string;
    childrenPresent?: number;
    petsPresent?: number;
    availableHours?: number;
    auth_id?: number;
    location_id?: number;
  }
  