export enum Subscription {
    Basic = "Basic",
    Gardener = "Gardener",
    Enterprise = "Enterprise"
  }
  
  export enum PlantationType {
    Indoor = "Indoor",
    Outdoor = "Outdoor"
  }
  
  export enum PlantType {
    Tomato = "Tomato",
    BellPepper = "Bell_pepper",
    Capsicum = "Capsicum"
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
    plant_type: PlantType;
    plantation_type: PlantationType;
    city: string;
    province: string;
    country: string;
    area: Area;
    subscription: Subscription;
  }
  
export interface UserPlantation{
    plantation_id: string;
    name: string;
    plant_type: PlantType;
    plantation_type: PlantationType;
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