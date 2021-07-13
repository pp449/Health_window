import Community from "../models/Community";
import routes from "../routes";

export const postCommunityWrite = async (req, res) => {
  const {
    body: { title, content, category },
    user,
  } = req;
  try {
    const newCommunity = await Community.create({
      title,
      content,
      category,
      creator: user.id,
    });
    newCommunity.save((err) => {
      if (err) console.error("fail to save community data..");
    });
    res.redirect("http://localhost:3000/community");
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getCommunity = (req, res) => {
  let url = req.url.split("/")[1];
  if (url === "") {
    Community.find(function (err, com) {
      if (err) return res.statue(500).send({ error: "fail" });
      res.json(com);
    });
  } else {
    Community.find({ category: url }, function (err, com) {
      if (err) return res.statue(500).send({ error: "fail" });
      if (com.length === 0)
        return res.status(404).json({ error: "nothing here" });
      res.json(com);
    });
  }
};
