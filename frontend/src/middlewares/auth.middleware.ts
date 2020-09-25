export const setSession = (user: any) => {
  console.log(user);
  localStorage.setItem("id", user.id);
  localStorage.setItem("lastName", user.lastName);
  localStorage.setItem("firstName", user.firstName);
  localStorage.setItem("email", user.email);
};

export const logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  localStorage.removeItem("lastName");
  localStorage.removeItem("firstName");
};

export const isAuth = () => {
  if (localStorage.getItem("id") != null) {
    return true;
  } else {
    return false;
  }
};
