

## Authentification SSO (Linkedin)(Work In Progress)

 
Utilisation de Linkedin pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd linkedin/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Linkedin [ici](https://www.linkedin.com/developers/apps/new), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/linkedin**, il contiendra les codes d'authentification a votre application Linkedin
```
LINKEDIN_CLIENT_ID=xxxxxx
LINKEDIN_CLIENT_SECRET=xxxxxx
LINKEDIN_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-linkedin-oauth2/)
