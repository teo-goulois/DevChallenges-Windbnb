export interface PostType {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
}

export interface formValuesType {
  input: string;
  location: {
    country: string;
    city: string;
  };
  guests: {
    adults: number;
    children: number;
  };
}
