import { connectDatabase, insertDocument } from "../../helpers/db-util";

const handler = async(req, res) => {
  if (req.method == "POST") {
    
    const userEmail = req.body.email;
    let client;
    try{
      client = await connectDatabase();
    }catch(error){
      res.status(500).json({message: "conect to database failed !"})
    }
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
};

export default handler;
