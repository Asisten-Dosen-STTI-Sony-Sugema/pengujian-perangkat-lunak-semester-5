const Inventory = require("../src/inventory");

describe("Sistem Inventori", () => {
  let inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  test("Menambah barang ke inventori", () => {
    inventory.addItem({ name: "Laptop", quantity: 10 });
    expect(inventory.getItem("Laptop")).toEqual({
      name: "Laptop",
      quantity: 10,
    });
  });

  test("Mengambil barang dari inventori berdasarkan nama", () => {
    inventory.addItem({ name: "Laptop", quantity: 10 });
    const item = inventory.getItem("Laptop");
    expect(item).toEqual({ name: "Laptop", quantity: 10 });
  });

  test("Menghapus barang dari inventori berdasarkan nama", () => {
    inventory.addItem({ name: "Laptop", quantity: 10 });
    inventory.removeItem("Laptop");
    expect(inventory.getItem("Laptop")).toBeUndefined();
  });
});
