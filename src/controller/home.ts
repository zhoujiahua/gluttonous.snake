import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  // res.render("home", {
  //   title: "Home",
  // });
  // res.json({ title: "Hi Node" });
  return res.send("Hi Home.");
};
