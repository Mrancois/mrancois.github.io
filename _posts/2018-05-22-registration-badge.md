---
layout: post
title: "Registration Website & Badge"
author: "Francois Devove"
type: [js]
pathimg: "registration"
screens: [screen_pdf]
technologies: [javascript, nodejs, express, jwt, handlebars, wkhtmltopdf]
background: "badge"
---
### Registration website:

It gives participants more information on the subject of the event, location, speakers, schedules and other practical details.
The participant registers via a form (multiple choice question, checkbox, drop-down menu, ...).
Front-End, Jekyll who is a static website builder. Thanks to this system we can create reusable templates.
Back-End, we use the Google Sheet (GScript) to manage the list of participants, we have this need because the customers, project director and other actors had to be able to modify in real time this list.

### Badge:

This web application, generates the badge that customers can print themselves.
Then scan the QRCode to validate the presence of the person during the event. This updates the Google Sheet in real time.
