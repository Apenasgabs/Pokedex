export interface pokeList {
  count: number;
  next: string | null;
  previous: string | null;
  results: uniPoke[];
}
export interface uniPoke {
  name: string;
  url: string;
}
