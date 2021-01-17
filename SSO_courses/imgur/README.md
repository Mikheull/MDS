
## Authentification SSO (Imgur)

 
Utilisation de Imgur pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd imgur/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Imgur [ici](https://developers.pinterest.com/apps), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/imgur**, il contiendra les codes d'authentification a votre application Imgur
```
IMGUR_CLIENT_ID=xxxxxx
IMGUR_CLIENT_SECRET=xxxxxx
IMGUR_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-imgur/)
