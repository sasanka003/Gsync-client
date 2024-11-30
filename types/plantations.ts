export enum Subscription {
    Basic = "Basic",
    Gardener = "Gardener",
    Enterprise = "Enterprise"
  }

export interface Location {
    city: string;
    province: string;
    region: string;
}
  
export interface Area {
 length: number;  
  width: number; 
}
  
export interface Plantation {
    user_id: string;
    name: string;
    type: string;
    location: Location;
    area: Area;
    subscription: Subscription;
}

export interface UserPlantation{
    plantation_id: string;
    name: string;
    type: string;
    city: string;
    province: string;
    country: string;
    plantation_length: number;
    plantation_width: number;
    verified: boolean;
    subscription: Subscription;
    payment_status: boolean;
    user_id: string;
}
  
export interface PlantationResponse {
    message: string;
}