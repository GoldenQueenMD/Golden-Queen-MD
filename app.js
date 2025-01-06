{
  "name": "Golden-Queens-MD-BOT",
  "description": "DEVELLOPER BY VIMA-MODS",
  "logo": "https://i.ibb.co/4TJt2B3/Golden-Queen-MD-VIMAMODS-b591c345d177a4d0.jpg",
  "keywords": ["bot"],
  "success_url": "/",
  "env": {
    "OWNER_NUMBER": {
      "description": "Enter Owner Number (94776734030)",
      "required": false,
      "value": ""
    },
    "SESSION_ID": {
      "description": "Add Golden Queen Session ID",
      "required": true
    },
    "MONGODB": {
      "description": "Enter Mongodb Url",
      "required": true
    }
  },
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
    }
  ],
  "stack": "heroku-24"
}
