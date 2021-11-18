<h1>Todo Api</h1>

<h2>Installer l'API</h2>

Pour installer l'API, cloner le repository. NodeJS doit être présent sur votre ordinateur. 
Pour installer NodeJS: 
<ul>
<li>Sous Windows : <a href="https://nodejs.org/en/">https://nodejs.org/en/</a></li>
<li>Sous Unix : <code>sudo apt install nodejs</code></li>
<li>Avec Chocolatey : <code>choco install nodejs-lts</code></li>
</ul>

Rendez vous ensuite dans le répertoire du projet, et ouvrez un terminal. 
<ul>
<li>Installer les dépendances : <code>npm install</code></li>
<li>Initialiser la base de données ( locale ) : <code>npx sequelize db:migrate</code></li>
</ul>
La base de données est une base de données sqlite, il n'y a donc rien de plus à configurer.


<h3>Lancer le projet</h3>

Pour lancer le projet en mode "ouvert", sans authentification requise pour accéder aux Todos :
 <code>npm run start</code>

Pour lancer le projet en mode "protégé", nécéssitant un jwt pour accéder aux routes de Todo : 
<code>npm run serve</code>


Le projet devrait tourner sur le port 3000 : 
<p>
<a href='http://localhost:3000'>http://localhost:3000</a>
</p>


<h2>Utiliser l'API</h2>

<h3>Les Users</h3>
Les Users sont des objets ayant pour propriétés :
<ul>
    <li>id <code>: integer</code> <i>( lecture seule )</i></li>
    <li>email <code>: string</code></li>
    <li>password <code>: string</code></li>
    <li>token <code>: string</code> <i>( lecture seule, renvoyé uniquement après authentification )</i></li>
</ul>

<h3>Les ToDos</h3>
Les Todos sont des objets ayant pour propriétés : 
<ul>
    <li>id <code>: integer</code> <i>( lecture seule )</i></li>
    <li>name <code>: string</code></li>
    <li>description <code>: string</code></li>
    <li>table <code>: string</code></li>
</ul>

<h3>Les routes : </h3>
L'API accepte et renvoie les données en JSON. 
Les requêtes ne sont pas protégées.

<h4>Users</h4>
<ul>
    <li>POST : <code>/register + body</code> :créé un nouveau todo</li>
    <li>POST : <code>/login + body</code> : authentifie un user, et renvoie son id, son email, et un jwt valable 24h</li>
</ul>

<h4>Todos :</h4>
<ul>
    <li>GET : <code>/todo</code> : récupère une liste de tous les todos</li>
    <li>GET : <code>/todo/:id</code> :récupère un todo par son ID</li>
    <li>POST : <code>/todo + body</code> :créé un nouveau todo</li>
    <li>PUT : <code>/todo/:id + body</code> :modifie un todo</li>
    <li>DELETE : <code>/todo/:id </code> :supprime un todo</li>
</ul>

<h3>Configurer une autre base de données : </h3>

Pour configurer une base de données locale, allez dans le fichier config/config.json.
Dans les configurations "development", ajouter les champs : 
<ul>
<li>"username" : votre identifiant sql</li>
<li>"password" : votre mot de passe sql</li>
<li>"dialect": modifiez sqlite pour le remplacer par le dialect que vous souhaitez
utiliser : mysql ou mariadb</li>
<li>installer le dialect avec npm : <code>npm i mariadb</code> ou <code>npm i mysql3</code> </li>
<li>Créer la base de données : <code>npx sequelize db:create</code></li>
</ul>
