# kuma-bot

## Trello Board
https://trello.com/b/lB0h4nwX/kuma-bot

## Project setup
```
npm install
```
- Please fork this repo and set up upstream
- Create PR's, don't commit directly to master :)
- Thanks!

## How to run locally
1. Create an .env file
2. Refer to the .env.template file for your .env file
3. Go to https://discord.com/developers/applications and create a bot I think?
4. https://discordapi.com/permissions.html#3072 --> Go here with your Application ID to create an invite link for your bot
5. Use that link to invite your bot to a discord server. Preferably create a private discord server for your own testing reasons
6. Get your token. Don't show this to anyone!!!
7. Put that token in your .env
8. npm run build (this compiles the typescript and transposes it into JS files)
9. npm run server


## How to deploy to Heroku
1. Create a Heroku account and install Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)
2. Push changes to main branch 
3. Run the command `heroku login`
4. Run the command `heroku git:remote -a frozen-tor-28234` in the root directory of kuma-bot.
5. Run the command `git push heroku main`
