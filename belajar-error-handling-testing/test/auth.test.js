import { loginUser } from "../src/auth";

// Mocking fetch
global.fetch = jest.fn();

describe("loginUser", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should throw an error if email or password is missing", async () => {
    await expect(loginUser("", "password")).rejects.toThrow(
      "Email and password are required."
    );
    await expect(loginUser("test@example.com", "")).rejects.toThrow(
      "Email and password are required."
    );
  });

  it("should throw an error if email format is invalid", async () => {
    await expect(loginUser("invalid-email", "password")).rejects.toThrow(
      "Invalid email format."
    );
  });

  it("should throw an error if the API response is not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(loginUser("test@example.com", "password")).rejects.toThrow(
      "Login failed. Please try again later."
    );
  });

  it("should return data if login is successful", async () => {
    const mockResponse = { token: "12345" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await loginUser("test@example.com", "password");
    expect(result).toEqual(mockResponse);
  });

  it("should throw a generic error if fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(loginUser("test@example.com", "password")).rejects.toThrow(
      "Network error"
    );
  });
});
