import { ReactNode } from "react";

export interface Event {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl:any;
  location?: {
      address: string;
      city: string;
      country: string;
  };
  onlineUrl?: any;
}
export interface NavItemProps {
  to:string;
  children: ReactNode
} 