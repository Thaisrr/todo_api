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
<li>Lancer le projet : <code>npm run start</code></li>
</ul>

Le projet devrait tourner sur le port 3000 : 
<p>
<a href='http://localhost:3000'>http://localhost:3000</a>
</p>

La base de données est une base de données sqlite, il n'y a donc rien à configurer.

<h2>Utiliser l'API</h2>

<h3>Les ToDos</h3>
Les Todos sont des objets ayant pour propriétés : 
<ul>
    <li>id <code>: integer</code></li>
    <li>name <code>: string</code></li>
    <li>description <code>: string</code></li>
    <li>table <code>: string</code></li>
</ul>

<h3>Les routes : </h3>
L'API accepte et renvoie les données en JSON. 
Les requêtes ne sont pas protégées.

<ul>
    <li>GET : <code>/todo</code> : récupère une liste de tous les todos</li>
    <li>GET : <code>/todo/:id</code> :récupère un todo par son ID</li>
    <li>POST : <code>/todo + body</code> :créé un nouveau todo</li>
    <li>PUT : <code>/todo/:id + body</code> :modifie un todo</li>
    <li>DELETE : <code>/todo/:id </code> :supprime un todo</li>
</ul>
