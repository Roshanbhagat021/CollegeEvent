const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const Event = require("../model/event.model");

const eventRouter = express.Router();

eventRouter.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ events });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventRouter.use(auth);

eventRouter.post("/create", async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      userID: req.user.userID,
    });
    await event.save();
    res.status(200).json({ msg: "New event created!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventRouter.get("/my-events", async (req, res) => {
  try {
    const userID = req.user.userID;
    const userEvents = await Event.find({ userID });
    res.status(200).json({ events: userEvents });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventRouter.delete("/delete/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: "Event not found!" });
    }
    res.status(200).json({ msg: "Event deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


eventRouter.post("/increment-participant/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: "Event not found!" });
    }
    event.participantsCount += 1;
    await event.save();
    res.status(200).json({ msg: "Participant count incremented!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

eventRouter.post("/increment-volunteer/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: "Event not found!" });
    }
    event.volunteersCount += 1;
    await event.save();
    res.status(200).json({ msg: "Volunteer count incremented!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { eventRouter };
