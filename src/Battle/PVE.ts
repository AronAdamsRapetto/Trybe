import Fighter, { SimpleFighter } from "../Fighter";
import Monster from "../Monster";
import Battle from "./Battle";

export default class PVE extends Battle {
  private _environments: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, environments: (Fighter | SimpleFighter)[]) {
    super(player);
    this._environments = environments;
  }

  fight(): number {
    for(let i = 0; i < this._environments.length; i += 1) {
      this.player.attack(this._environments[i]);
      this._environments.forEach((env) => {
      if (env.lifePoints > 0) env.attack(this.player);
      });
      
      if (!this._environments.every((env) => env.lifePoints < 0)) i = 0;
      if (this.player.lifePoints < 0) break;
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}