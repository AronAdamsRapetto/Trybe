import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static rangerInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.rangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}