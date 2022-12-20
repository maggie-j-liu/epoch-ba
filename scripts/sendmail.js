const TOKEN = "";
const email = [];
const res = await fetch("https://epochba-mail.mliu.workers.dev", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    email,
    textMessage: `Hey!
Epoch Bay Area <https://epochba.hackclub.com> is in 10 days! If you haven't already, please sign (and have your parent sign) the waiver that was sent to your email. If your waiver hasn't been completed yet, you'll receive an email reminder in the next few hours. 

In addition to the event liability waiver that was sent out, our venue also has their own waiver, which you must sign here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver.

Once you've filled out those two waivers, you're all set! You can join the Hack Club Slack <https://hackclub.com/slack> to meet other teenage hackers, and organize with us in the #epoch-ba <https://hackclub.slack.com/archives/C04AKL9UKEY> channel. Can't wait to see you all at Circuit Launch on December 30th, at 9am :D

Best,
The Epoch Bay Area Team

P.S. Here's a sneak peek of the stickers we'll have at the event 👀
https://cloud-3bu3aq8ph-hack-club-bot.vercel.app/0img_20221216_154948490.jpg
    `,
    htmlMessage: `<div>Hey!</div>
<br />
<div><a href="https://epochba.hackclub.com">Epoch Bay Area</a> is in 10 days! If you haven't already, please sign (and have your parent sign) the waiver that was sent to your email. If your waiver hasn't been completed yet, you'll receive an email reminder in the next few hours.</div>
<br />
<div>In addition to the event liability waiver that was sent out, our venue also has their own waiver, which you must sign here: https://www.webwaiver.com/sign/circuitlaunch/clml-waiver.</div>
<br />
<div>Once you've filled out those two waivers, you're all set! You can join the <a href="https://hackclub.com/slack">Hack Club Slack</a> to meet other teenage hackers, and organize with us in the <a href="https://hackclub.slack.com/archives/C04AKL9UKEY">#epoch-ba</a> channel. Can't wait to see you all at Circuit Launch on December 30th, at 9am :D</div>
<br />
<div>
Best,
</div>
<div>
The Epoch Bay Area Team
</div>
<br/>
<small>P.S. Here's a sneak peek of the stickers we'll have at the event 👀</small>
<br />
<img width="500px" src="https://cloud-3bu3aq8ph-hack-club-bot.vercel.app/0img_20221216_154948490.jpg" alt="Epoch stickers">`,

    subject: "New Epoch Bay Area Waiver + Stickers!",
  }),
});

console.log(await res.text());
