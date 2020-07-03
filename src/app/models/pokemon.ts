export interface Pokemon {
  name: string;
  classification: string;
  pokedexNumber: number;
  type1: string;
  type2?: string;
  weight_kg: number;
  generation: number;
  is_legendary: boolean;
  height_m: number;
}
