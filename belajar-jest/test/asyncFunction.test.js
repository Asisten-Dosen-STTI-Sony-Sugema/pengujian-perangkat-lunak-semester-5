const fetchData = require("../src/asyncFunction");

test("fetchData returns expected data", async () => {
  const data = await fetchData();
  expect(data).toBe("Data berhasil diambil");
});
