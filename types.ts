import { type JSX } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: JSX.Element;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface Company {
    name: string;
    logoUrl: string;
    website: string;
}
