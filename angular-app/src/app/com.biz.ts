import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.biz{
   export enum AnimalType {
      SHEEP_GOAT,
      CATTLE,
      PIG,
      DEER_OTHER,
   }
   export enum MovementStatus {
      IN_FIELD,
      IN_TRANSIT,
   }
   export enum ProductionType {
      MEAT,
      WOOL,
      DAIRY,
      BREEDING,
      OTHER,
   }
   export abstract class User extends Participant {
      email: string;
      firstName: string;
      lastName: string;
   }
   export class Farmer extends User {
      address1: string;
      address2: string;
      county: string;
      postcode: string;
      business: Business;
   }
   export class Regulator extends User {
   }
   export class Field extends Asset {
      cph: string;
      name: string;
      business: Business;
   }
   export class Animal extends Asset {
      animalId: string;
      species: AnimalType;
      movementStatus: MovementStatus;
      productionType: ProductionType;
      location: Field;
      owner: Farmer;
   }
   export class Business extends Asset {
      sbi: string;
      address1: string;
      address2: string;
      county: string;
      postcode: string;
      owner: Farmer;
      incomingAnimals: Animal[];
   }
   export abstract class AnimalMovement extends Transaction {
      logs: string[];
      animal: Animal;
      from: Business;
      to: Business;
   }
   export class AnimalMovementDeparture extends AnimalMovement {
      fromField: Field;
   }
   export class AnimalMovementArrival extends AnimalMovement {
      arrivalField: Field;
   }
   export class SetupDemo extends Transaction {
   }
// }
