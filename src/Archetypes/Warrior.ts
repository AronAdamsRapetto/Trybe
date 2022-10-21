import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.warriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}