const handler = (req, res) => {
  if (req.method == "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    res.send(200).json("Added email successfully");
  }
};

export default handler;
