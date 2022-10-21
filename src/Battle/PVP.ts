import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _otherPlayer: Fighter;

  constructor(player: Fighter, otherPlayer: Fighter) {
    super(player);
    this._otherPlayer = otherPlayer;
  }

  fight(): number {
    for (let i = 0; i < 100; i += 1) {
      this.player.attack(this._otherPlayer);
      this._otherPlayer.attack(this.player);
      if (this.player.lifePoints === -1
        || this._otherPlayer.lifePoints === -1) break;
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}