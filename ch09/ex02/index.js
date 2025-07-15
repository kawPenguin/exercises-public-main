export class C {
  #counter = 0;

  get x() {
    return this.#counter++;
  }
}