
## Authentification SSO (Github)

 
Utilisation de Github pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd github/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Github [ici](https://github.com/settings/applications/new), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/github**, il contiendra les codes d'authentification a votre application Github
```
GITHUB_CLIENT_ID=xxxxxx
GITHUB_CLIENT_SECRET=xxxxxx
GITHUB_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-github/)
