


## Authentification SSO (Instagram)(Work In Progress)

 
Utilisation de Instagram pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd instagram/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Instagram [ici](https://developers.facebook.com/apps) et en ajoutant le produit **instagram**, en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/instagram**, il contiendra les codes d'authentification a votre application Instagram
```
INSTAGRAM_CLIENT_ID=xxxxxx
INSTAGRAM_CLIENT_SECRET=xxxxxx
INSTAGRAM_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-instagram/)
