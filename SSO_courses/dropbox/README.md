## Authentification SSO (Dropbox)

 
Utilisation de Dropbox pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd dropbox/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Dropbox [ici](https://www.dropbox.com/developers/apps/create), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/dropbox**, il contiendra les codes d'authentification a votre application Dropbox
```
DROPBOX_CLIENT_ID=xxxxxx
DROPBOX_CLIENT_SECRET=xxxxxx
DROPBOX_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-dropbox/)
