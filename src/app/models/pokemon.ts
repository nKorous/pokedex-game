export interface Pokemon {
  name: string;
  classification: string;
  pokedexNumber: number;
  type1: string;
  type2?: string;
  weight_kg?: number;
  generation: number;
  is_legendary: boolean;
  height_m?: number;
  spriteURL?: string;
  evolution?: Array<string>
}

export interface IPokeAPIPokemon {
  abilities: [];
  base_experiance: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {};
  stats: [];
  types: [];
  weight: number
}
