import {
  PokemonAbility,
  NamedAPIResource,
  VersionGameIndex,
  PokemonHeldItem,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  GenerationISprites,
  GenerationIISprites,
  GenerationIIISprites,
  GenerationIVSprites,
  GenerationVSprites,
  GenerationVISprites,
  GenerationVIISprites,
  GenerationVIIISprites
} from "pokenode-ts";

export interface GetPokemonProps {
  limit: number;
  offset: number;
  generationPath: string;
}


export interface PokemonIndexProps {
  id: string;
  image: string
  name: string;
  url: string;
  pokemonPath: string;
}

export interface PokemonListProps {
  pokemons: PokemonIndexProps[]
}

export interface PokemonIDPageProps {
  pokemon: Pokemon
  error: string
  name: string;
}

export interface PokemonIndexPageProps {
  pokemons: PokemonIndexProps[]
  error: string;
}

export interface AbilityProps {
  ability: {
    name: string;
    url: string;
  }
}

export interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[];
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
}

export interface TypeBadgeProps {
  type: string;
}

export interface VersionSprites {
  'generation-i': GenerationISprites;
  'generation-ii': GenerationIISprites;
  'generation-iii': GenerationIIISprites;
  'generation-iv': GenerationIVSprites;
  'generation-v': GenerationVSprites;
  'generation-vi': GenerationVISprites;
  'generation-vii': GenerationVIISprites;
  'generation-viii': GenerationVIIISprites;
}

