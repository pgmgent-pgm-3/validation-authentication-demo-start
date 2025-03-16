/**
 * An auth controller that handles login, register, and logout
 */

/**
 * Login
 */
export const login = async (req, res) => {
  res.render("login", { layout: "layouts/authentication" });
};
export const postLogin = async (req, res, next) => {};

/**
 * Register
 */
export const register = async (req, res) => {
  res.render("register", { layout: "layouts/authentication" });
};
export const postRegister = async (req, res, next) => {};

/**
 * Logout
 */
export const logout = async (req, res) => {};
