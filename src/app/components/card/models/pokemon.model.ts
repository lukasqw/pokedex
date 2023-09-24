/* eslint-disable prettier/prettier */
import { Sprites } from './sprites.model';
import { Stat } from './stat.model';
import { Type } from './type.model';

export class Pokemon {
  id: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  sprites: Sprites;
  types: Type[];
  stats: Stat[];

  constructor(
    name: string,
    id?: number,
    description?: string,
    height?: number,
    weight?: number,
    sprites?: Sprites,
    types?: Type[],
    stats?: Stat[]
  ) {
    this.name = name;
    this.id = id ?? 0;
    this.description = description ?? '';
    this.height = height ?? 0;
    this.weight = weight ?? 0;
    this.sprites = sprites ?? new Sprites();
    this.types = types ?? [];
    this.stats = stats ?? [];
  }

  get index (): string {
    return this.id.toString().padStart(4, '0');
  }

  get primaryType(): string {
    let primaryType = 'normal';
    if(this.types.length > 0) {
      primaryType = this.types[0].name;
      if(primaryType === 'normal' && this.types.length > 1) {
        primaryType = this.types[1].name;
      }
    }
    return primaryType;
  }

  get weightInKg(): number {
    return this.weight / 10;
  }

  get heightInMeters(): number {
    return this.height / 10;
  }

  get isEmpty(): boolean {
    return this.id === 0;
  }
}
