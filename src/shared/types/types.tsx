import { ChangeEvent, ReactNode } from "react";



export interface Session {
  id: number;
  name: string;
  presenter: string;
  level: string;
  duration:number;
  abstract:string;
  voters: string[];
}


export interface NavItemProps {
  to:string;
  children: ReactNode
} 

export interface TextInputFieldWithLabelProps {
  id:string;
  type?: "text" | "password" | "email";
  label:string;
  value: string;
  isFieldActive: boolean;
  onChange(e:ChangeEvent):void;
  onBlur():void;
}


//==================== Redux Types =======================//
export interface Event {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl:string;
  location?: {
      address: string;
      city: string;
      country: string;
  };
  onlineUrl?: string;
  sessions: Session[];
}

export interface EventsState {
  isLoading: boolean;
  data: Event[],
  error: boolean
}

export interface UserState {
  isAuthenticated: boolean,
  name: string
}