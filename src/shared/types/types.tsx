import { ReactNode } from "react";

export interface Event {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  // imageUrl: string;
  location?: {
      address: string;
      city: string;
      country: string;
  };
}
export interface NavItemProps {
  to:string;
  children: ReactNode
} 