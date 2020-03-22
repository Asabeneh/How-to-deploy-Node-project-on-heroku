# How to deploy your node.js project on Heroku

#### Follow the following steps:

1. Create a Heroku account by signing up on herok website:https://www.heroku.com/
2. Install the Heroku CLI on your computer:https://devcenter.heroku.com/articles/heroku-cli
3. After installing Heroku CLI, login using the Heroku CLI by typing the following command:

```sh
    heroku login
```

4. Provide the credential you used to sign up on Heroku if it asks. Now your project can be pushed to heroku server using git from your computer terminal
5. The package.json scripts should have scripts and the "start" should be the "node sever.js". As shown below

```js
    "scripts": {
        "start": "node server.js"
    }
```

6. Initiating your project using git init and deploying on herkou

```sh
    git init
    git add .
    git commit -m "ready to deploy on heroku"
    heroku create your-app-name
    git push heroku master
    heroku open
```

CONGRATULATONS! Now you project is running on Heroku web server
