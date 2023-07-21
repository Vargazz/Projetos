import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _challenger: Fighter;

  constructor(player: Fighter, challenger: Fighter) {
    super(player);
    this._challenger = challenger;
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this._challenger.lifePoints > 0) {
      this.player.attack(this._challenger);
      if (this._challenger.lifePoints > 0) this._challenger.attack(this.player);
    }
    return super.fight();
  }
}