## Authentification SSO (Deezer)

 
Utilisation de Deezer pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd deezer/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Deezer [ici](https://developers.deezer.com/myapps/app), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/deezer**, il contiendra les codes d'authentification a votre application Deezer
```
DEEZER_CLIENT_ID=xxxxxx
DEEZER_CLIENT_SECRET=xxxxxx
DEEZER_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-deezer/)
