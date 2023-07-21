import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  public race: Race;
  public archetype: Archetype;
  public _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.race.maxLifePoints / 2;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage; 
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._lifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    if (this._lifePoints > this.race.maxLifePoints) {
      this._lifePoints = this.race.maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    const damage = this.strength * 3;
    enemy.receiveDamage(damage);
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._strength;
  }

  get energy() {
    return { ...this._energy };
  }

  get dexterity() {
    return this._dexterity;
  }
}