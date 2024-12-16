export const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email format.");
  }

  try {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please try again later.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
};
