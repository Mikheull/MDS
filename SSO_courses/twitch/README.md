
## Authentification SSO (Twitch) (WorkInProgress)

 
Utilisation de Twitch pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd twitch/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Twitch [ici](https://api.slack.com/apps), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/twitch**, il contiendra les codes d'authentification a votre application Twitch
```
TWITCH_CLIENT_ID=xxxxxx
TWITCH_CLIENT_SECRET=xxxxxx
TWITCH_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-twitchtv/)
