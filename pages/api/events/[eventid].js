const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method == "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    res.status(201).json({ message: "Added comment.", comment: newComment });
  } else if (req.method == "GET") {
    const dummy_data = [
      {
        email: "mansi@gmail.com",
        name: "Mansi",
        text: "This is comment section",
        eventId,
      },
      {
        email: "prathamesh@gmail.com",
        name: "Prathamesh",
        text: "This is comment section",
        eventId,
      },
      ,
      {
        email: "Ovee@gmail.com",
        name: "Ovee",
        text: "This is comment section",
        eventId,
      },
    ];
    res.send(200).json({ comments: dummy_data });
  }
};

export default handler;
