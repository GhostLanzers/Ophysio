export interface StateData {
  name: string;
  cities: string[];
}

export const statesAndCities: StateData[] = [
  {
    name: "Maharashtra",
    cities: [
      "Mumbai",
      "Pune", 
      "Nashik",
      "Nagpur",
      "Ahmednagar",
      "Jalgaon",
      "Amravati",
      "Thane",
      "Palghar",
      "Ratnagiri",
      "Sindhudurg"
    ]
  },
  {
    name: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Kurnool",
      "Vijayawada",
      "Nellore",
      "Kadapa",
      "Pulivendula"
    ]
  }
];

export const getStates = (): string[] => {
  return statesAndCities.map(state => state.name);
};

export const getCitiesByState = (stateName: string): string[] => {
  const state = statesAndCities.find(state => state.name === stateName);
  return state ? state.cities : [];
};