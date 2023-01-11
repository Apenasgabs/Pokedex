export interface poke {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: [];
  moves: [];
  forms: [];
  types: any[];
}
export interface PokeList {
  count: number;
  next: string;
  previous: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
