import { UserEvents } from "./userEvents.mjs";

const userEvent = new UserEvents();

function saveToDB() {
  console.log("Saving Post to Data Base");
}
function sendNotifications() {
  console.log("Sending Notifications");
}
function updateTimeline() {
  console.log("Updating Timeline");
}
userEvent.addListener("postCreated", saveToDB);
userEvent.addListener("postCreated", sendNotifications);
userEvent.addListener("postCreated", updateTimeline);

userEvent.createPost("This is my first post");
