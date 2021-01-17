


## Authentification SSO (Trello)

 
Utilisation de Trello pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd trello/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Trello [ici](https://trello.com/app-key), en configurant bien l'app et en ajoutant `http://localhost:3030` en **origine autorisée**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/trello**, il contiendra les codes d'authentification a votre application Trello
```
TRELLO_CLIENT_ID=xxxxxx
TRELLO_CLIENT_SECRET=xxxxxx
TRELLO_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-trello/)
