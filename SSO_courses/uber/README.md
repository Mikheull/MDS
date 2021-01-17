
## Authentification SSO (Uber)

 
Utilisation de Uber pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd uber/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Uber [ici](https://developer.uber.com/dashboard), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/uber**, il contiendra les codes d'authentification a votre application Uber
```
UBER_CLIENT_ID=xxxxxx
UBER_CLIENT_SECRET=xxxxxx
UBER_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-uber-v2/)
