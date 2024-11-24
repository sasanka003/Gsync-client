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
  
export interface PlantationResponse {
    message: string;
}