
## Authentification SSO (Facebook)

 
Utilisation de Facebook pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd facebook/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Facebook [ici](https://developers.facebook.com/apps/), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/facebook**, il contiendra les codes d'authentification a votre application Facebook
```
FACEBOOK_CLIENT_ID=xxxxxx
FACEBOOK_CLIENT_SECRET=xxxxxx
FACEBOOK_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/docs/passport-facebook/)
