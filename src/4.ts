const tenants: Person[] = [];

class Key {
  private readonly signature: number;
  constructor() {
    this.signature =
      Math.floor(Math.random() * (999_999_999 - 100_000_000 + 1)) + 100_000_000;
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  constructor(public readonly key: Key) {}
  public comeIn(person: Person) {
    if (this.door) {
      tenants.push(person);
      this.door = false;
    } else {
      console.error("Access denied.");
    }
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key) {
    if (this.key === key) {
      this.door = true;
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

console.log(tenants); // person

const key2 = new Key();
const person2 = new Person(key2);

house.openDoor(person2.getKey());
house.comeIn(person2); // Accees denied

console.log(tenants); // person
export {};
