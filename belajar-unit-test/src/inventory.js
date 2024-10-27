class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItem(name) {
    return this.items.find((item) => item.name === name);
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }
}

module.exports = Inventory;
