export const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.email === "admin@test.com";
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};
