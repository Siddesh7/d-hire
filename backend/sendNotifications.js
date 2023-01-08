const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");

const Pkey = `0x${process.env.PRIVATE_KEY}`;
console.log(Pkey);
const signer = new ethers.Wallet(Pkey);

async function sendNotification(title, body, receiver) {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: title,
        body: body,
      },
      payload: {
        title: title,
        body: body,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${receiver}`, // recipient address
      channel: "eip155:5:0xb44a29524433dBC639C35124459c741bC241d4f4", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
}

module.exports = { sendNotification };
