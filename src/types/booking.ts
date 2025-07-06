export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  healthIssue: string;
  selectedServices: Service[];
  selectedDate: Date | null;
  selectedTime: string;
}