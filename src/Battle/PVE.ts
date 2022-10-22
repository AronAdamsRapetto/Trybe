import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _environments: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, environments: (Fighter | SimpleFighter)[]) {
    super(player);
    this._environments = environments;
  }

  fight(): number {
    this._battleTurn();
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private _battleTurn() {
    for (let i = 0; i < this._environments.length; i += 1) {
      this.player.attack(this._environments[i]);
      this._environments.forEach((env) => {
        if (env.lifePoints > 0) env.attack(this.player);
      });
      
      i = this._verifyBattle() as number;
    }
  }

  private _verifyBattle(): number | undefined {
    const endLoop = this._environments.length + 1;
    
    if (!this._environments.every((env) => env.lifePoints < 0)) return endLoop;
    if (this.player.lifePoints < 0) return endLoop;
    return 0;
  }
}