## Authentification SSO (Google)

 
Utilisation de Google pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd google/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Google [ici](https://console.developers.google.com/apis/credentials), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/google**, il contiendra les codes d'authentification a votre application Google
```
GOOGLE_CLIENT_ID=xxxxxx
GOOGLE_CLIENT_SECRET=xxxxxx
GOOGLE_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/docs/google/)
