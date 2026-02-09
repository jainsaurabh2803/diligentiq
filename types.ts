export interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface Testimonial {
  name: string;
  title: string;
  imageUrl: string;
}
