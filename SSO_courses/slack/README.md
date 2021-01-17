
## Authentification SSO (Slack)

 
Utilisation de Slack pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd slack/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Slack [ici](https://api.slack.com/apps), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/slack**, il contiendra les codes d'authentification a votre application Slack
```
SLACK_CLIENT_ID=xxxxxx
SLACK_CLIENT_SECRET=xxxxxx
SLACK_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-slack/)
