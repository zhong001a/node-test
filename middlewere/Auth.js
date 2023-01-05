export const Auth = (req, res, next) => {
  try {
    const role = req.headers.role;
    console.log(role);
    if (role != "admin") {
      return res.json({ status: "nok", message: "Unauthorized" });
    }
    next();
  } catch {
    return res.json({ status: "nok", message: "Unauthorized" });
  }
};
