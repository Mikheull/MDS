## Authentification SSO (Pinterest)(Work In Progress, require https)

 
Utilisation de Pinterest pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd pinterest/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Pinterest [ici](https://developers.pinterest.com/apps), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/pinterest**, il contiendra les codes d'authentification a votre application Pinterest
```
PINTEREST_CLIENT_ID=xxxxxx
PINTEREST_CLIENT_SECRET=xxxxxx
PINTEREST_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-pinterest/)
