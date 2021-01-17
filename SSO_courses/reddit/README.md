## Authentification SSO (Reddit) (Work In Progress)

 
Utilisation de Reddit pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd reddit/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Reddit [ici](https://ssl.reddit.com/prefs/apps/) , en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/reddit**, il contiendra les codes d'authentification a votre application Reddit
```
REDDIT_CLIENT_ID=xxxxxx
REDDIT_CLIENT_SECRET=xxxxxx
REDDIT_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-reddit/)
