



## Authentification SSO (Amazon)(Work In Progress)

 
Utilisation de Amazon pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd amazon/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Amazon [ici](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html) et en ajoutant le produit **instagram**, en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/amazon**, il contiendra les codes d'authentification a votre application Amazon
```
AMAZON_CLIENT_ID=xxxxxx
AMAZON_CLIENT_SECRET=xxxxxx
AMAZON_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-amazon/)
