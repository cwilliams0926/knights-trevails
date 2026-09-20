export default class Queue {
  #items;

  constructor() {
    this.#items = [];
  }

  enqueue(element) {
    this.#items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.#items.shift();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}
