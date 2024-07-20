import axios from "axios";


export function login(data) {
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:3005/users/login`, data)
      .then(res => {
        const authToken = res.data.token;
        console.log("token",authToken)
        if (authToken) {
          localStorage.setItem("authToken", authToken);
          resolve(true); // Indicate successful login
        } else {
          reject("Invalid credentials"); // Indicate login failure due to invalid credentials
        }
      })
      .catch(error => {
        console.error("Error occurred during login:", error);
        reject("Login failed"); // Indicate login failure due to error
      });
  });
}

