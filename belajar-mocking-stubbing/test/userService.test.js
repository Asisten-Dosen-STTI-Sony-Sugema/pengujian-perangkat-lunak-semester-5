jest.mock("axios");

const { fetchAndFormatUser } = require("../src/userService");
const axios = require("axios");

test("fetch and format user data", async () => {
  const mockResponse = { data: { firstName: "John", lastName: "Doe" } };
  axios.get.mockResolvedValue(mockResponse);

  const result = await fetchAndFormatUser(1);

  expect(result).toBe("John Doe");
  expect(axios.get).toHaveBeenCalledWith("https://api.example.com/users/1");
});
