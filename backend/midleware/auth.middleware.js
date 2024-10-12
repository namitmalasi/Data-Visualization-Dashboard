import jwt from "jsonwebtoken";
export const protectRoute = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({ message: "Authentication required" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status({ message: error.message });
  }
};
