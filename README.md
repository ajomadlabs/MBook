# Care Hacks [![CircleCI token](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=flat-square)]() [![AUR](https://img.shields.io/aur/license/yaourt.svg?style=flat-square)]() [![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg?style=flat-square)]()

## Description

<p>An application to help users to book appointments in different hospitals</p>

## Workflow

- Users Login using Google
- Searches for the Hospital
- Chooses the Department
- Chooses the Doctors
- Selects the Date
- Enters the Mobile number
- Enters the OTP send to the Mobile number
- Gets the Booking Confirmation along with the token
- Users can view their current and previous appointments
- They also get their booking dates synced with their respective Google Calenders

## Stack

**Frontend**

- Vuejs
- Bootstrap

**Backend**

- Nodejs
- Express

**Database**

- MongoDB

**Dependencies**

- Express
- body-parser
- mongoose
- cors
- random-number
- passport


## Pre-Requisites

**Google OAUth**

1. Go to `https://console.developers.google.com`
2. Setup a Google OAuth
3. Copy and Paste the credentials in `auth.js` in `chserver` folder

**MLabs**

1. Setup a MLabs Account
2. Create a database
3. Copy and Paste the second URL into the `db.js` in `chserver` folder

**OTP**

1. Create an account in `http://site21.way2sms.com/content/index.html`
2. Set the username, password and key as the environment variables in the following manner

   `export MOBNO=<Mobile number>`
   `export SMSPASSWORD=<Password>`
   `export SMSKEY=<Key>`

## Installation

1. Create a folder Carehacks `mkdir Carehacks`
2. Navigate to that folder `cd Carehacks`
3. Clone this repository `git clone https://github.com/ajomadlabs/CareHack.git`
4. Navigate into chclient `cd chclient`
5. Install all the nodemodules `npm install`
6. Run the client `npm run dev`
7. Navigate into chserver `cd chserver`
8. Install all the nodemodules `npm install`
9. Run the server `npm run dev`
10. Go to `http://localhost:8081`

## Contributors

- [Ashik Jose](https://github.com/ashikjose)
- [Aravind K P](https://github.com/scriptonist)
- [Arun V Mathew](https://github.com/arunvm123)
