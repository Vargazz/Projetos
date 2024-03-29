import Race from './Race';

export default class Elf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints; 
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}