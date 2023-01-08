const cron = require("node-cron");
const Push = require("./sendNotifications");

function NotifScheduler(receiver, time) {
  const Inpdate = new Date(time);
  const unixTime = Inpdate.getTime() / 1000;
  const currentTime = Date.now() / 1000;
  const delay = unixTime - currentTime;

  setTimeout(
    Push.sendNotification(
      "Your meeting starts in 30 Mins",
      "This is a reminder for your upcoming interview",
      receiver
    ),
    delay * 1000
  );
}

module.exports = { NotifScheduler };
