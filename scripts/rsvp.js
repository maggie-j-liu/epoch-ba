const TOKEN = "";
const PAGE_SIZE = 50;
const email = [];

for (let idx = 0; idx < email.length; idx += PAGE_SIZE) {
  const list = email.slice(idx, Math.min(email.length, idx + PAGE_SIZE));
  const res = await fetch("https://epochba-mail.mliu.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      email: list,
      textMessage: `Hello!
  Epoch Bay Area <https://epochba.hackclub.com> is this Friday! Please RSVP here to let us know if you're coming to the event: https://forms.gle/aGs2YRWfe622k6TT6.

  If you're planning to come, make sure to sign both the waiver that was sent to your email and the venue's waiver here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver. See you all at 9am this Friday (December 30th), at Circuit Launch!

  Best,
  The Epoch Bay Area Team`,
      htmlMessage: `<div>Hello!</div>
  <br />
  <div><a href="https://epochba.hackclub.com">Epoch Bay Area</a> is this Friday! Please RSVP here to let us know if you're coming to the event: https://forms.gle/aGs2YRWfe622k6TT6.</div>
  <br />
  <div>
  If you're planning to come, make sure to sign both the waiver that was sent to your email and the venue's waiver here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver. See you all at 9am this Friday (December 30th), at Circuit Launch!
  </div>
  <br />
  <div>
  Best,
  </div>
  <div>
  The Epoch Bay Area Team
  </div>`,
      subject: "RSVP for Epoch Bay Area (it's this Friday!)",
    }),
  });

  console.log(await res.text());
}
