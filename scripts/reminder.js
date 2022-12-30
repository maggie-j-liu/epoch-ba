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
  We're super excited to see you at Epoch Bay Area <https://epochba.hackclub.com> tomorrow! If you haven't already, please RSVP here: https://forms.gle/aGs2YRWfe622k6TT6. And make sure to sign the waiver sent to your email, as well as Circuit Launch's waiver here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver.

  Some important information:
  Epoch Bay Area will be from 9am - 9pm at Circuit Launch (8000 Edgewater Dr., Ste. 200, Oakland, CA 94621).  If you're taking BART, we've created a transit guide <https://epochba.notion.site/epochba/Epoch-BA-Transit-Guide-d0b7a7630b424805bd7f43b1e4e76ac5>.

  You'll need to bring:
  - A student ID, government-issued ID, or an image of one
  - Laptop and charger

  We'll be providing breakfast, lunch, dinner, water, and snacks :)

  See you tomorrow!
  The Epoch Bay Area Team`,
      htmlMessage: `<div>Hello!</div>
  <br />
  <div>We're super excited to see you at <a href="https://epochba.hackclub.com">Epoch Bay Area</a> tomorrow! If you haven't already, please RSVP here: https://forms.gle/aGs2YRWfe622k6TT6. And make sure to sign the waiver sent to your email, as well as Circuit Launch's waiver here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver.</div>
  <br />
  <div>
  Some important information:
  <br />
  Epoch Bay Area will be from 9am - 9pm at Circuit Launch (<a href="https://goo.gl/maps/NzU8Vy29XPRyFdN46">8000 Edgewater Dr., Ste. 200, Oakland, CA 94621</a>). If you're taking BART, we've created a <a href="https://epochba.notion.site/epochba/Epoch-BA-Transit-Guide-d0b7a7630b424805bd7f43b1e4e76ac5">transit guide</a>.
  </div>
  <br />
  <div>
  You'll need to bring:
  <ul>
  <li>A student ID, government-issued ID, or an image of one</li>
  <li>Laptop and charger</li>
  </ul>
  </div>
  <br />
  <div>
  We'll be providing breakfast, lunch, dinner, water, and snacks :)
  </div>
  <br />
  <div>
  See you tomorrow!
  </div>
  <div>
  The Epoch Bay Area Team
  </div>`,
      subject: "Epoch Bay Area is tomorrow!",
    }),
  });

  console.log(await res.text());
}
