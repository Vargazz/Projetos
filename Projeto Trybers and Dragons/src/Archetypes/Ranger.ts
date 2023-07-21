import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstance = 0;
  private _energyType: EnergyType;

  constructor(name : string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._createdArchetypeInstance;
  }
}