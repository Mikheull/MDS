

## Authentification SSO (Spotify)

 
Utilisation de Spotify pour s'authentifier et récupérer les données liées au compte

## Installation
```
git clone https://github.com/Mikheull/SSO_courses.git
cd spotify/
npm install
```

## Configuration 
Pour commencer, créez et configurez votre application Spotify [ici](https://developer.spotify.com/dashboard/applications), en configurant bien l'app et en ajoutant `http://localhost:3030/login/callback` en url de **callback**, puis récupérez les `client_id` et `client_secret`

Ensuite, créez un fichier .env a la racine du dossier **/spotify**, il contiendra les codes d'authentification a votre application Spotify
```
SPOTIFY_CLIENT_ID=xxxxxx
SPOTIFY_CLIENT_SECRET=xxxxxx
SPOTIFY_CALLBACK=http://localhost:3030/login/callback
```

## Utilisation
```
npm start
```

## Annexe
[tuto Paspport](http://www.passportjs.org/packages/passport-spotify/)
