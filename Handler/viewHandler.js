exports.testView = (req, res) => {
    try {
      res.status(200).render("test", {
        title: "Test",
      });
    } catch (err) {
      res.status(500).send("Error");
    }
  };