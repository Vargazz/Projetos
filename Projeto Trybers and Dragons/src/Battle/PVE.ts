import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        if (monster.lifePoints > 0) monster.attack(this.player);
      }
    });

    return super.fight();
  }
}