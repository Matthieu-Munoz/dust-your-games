# Dust your Games - Projet

![logo](./src/assets/images/logo_dyg-dark.png)
### **[Live Version](https://dustyourgames.com)**

## Bienvenue ! 👋

Voici notre projet dans le cadre d'une formation en développement web & web mobile SYMFONY/REACT.

### 🎲 Présentation du projet
À quoi allons-nous jouer ce soir ? Qu’avons-nous sur nos étagères ? Depuis combien de temps ce jeu prend la poussière ? Autant de questions qui ne facilitent pas la vie des joueurs de jeux de société.

C’est pourquoi aujourd’hui, nous vous proposons Dust Your Games : l’application qui va révolutionner notre façon d'organiser et d’utiliser nos jeux.
Dust your Games est une ludothèque personnelle, un moyen de répertorier virtuellement nos jeux, mais pas seulement :
Depuis notre application, nous souhaitons pouvoir trouver rapidement un jeu adapté pour toutes situations : que vous ayez 5 minutes ou 3 heures, que vous soyez jeune ou moins jeune, que vous soyez un, deux, trois, douze… !

Avec Dust Your Games, dépoussiérons nos jeux en un seul clic. Fini les jeux laissés derrière, vous saurez quand vous aurez joué à votre jeu favori et lesquels commencent à prendre la poussière. Fini aussi les heures passées à décider quel jeu sortir. Grâce à notre fonction Dépoussiérage et à la magie de notre algorithme, vous aurez plus de chance de déterrer des jeux que vous n’aurez pas vu depuis des années et qui correspondent à vos envies du moment.
Connectons nos listes de jeu en ajoutant des amis, nous savons enfin qui possède tel jeu ou telle extension pour être facilement complémentaire, ou bien pour les plus généreux, faire des cadeaux afin de compléter la collection de vos amis !

### L'équipe
![team](./docs/team.png)

### Le cahier des charges

Voici le [cahier des charges](./docs/cdc.pdf) réalisé expliquant notre MVP.

## Déploiement

### Front

Ce projet est livré avec un fichier package.json déjà rempli, toutes les dépendances utilisées y sont donc configurées.

Pour déployer le projet en local :

1. Cloner ce repo sur votre machine
2. Ouvrir un terminal dans le répertoire du projet
3. Faire un `yarn` pour installer toutes les dépendances
4. Pour lancer un serveur de développement faire un `yarn start`
5. Pour consulter le code, ouvrir dans VSCode à partir du terminal avec un `code . `

Pour déployer le projet en ligne :

1. Dans un terminal à la racine du projet, exécuter un `yarn build`. Cette commande va provoquer la compilation du code du projet et créer un dossier build à la racine contenant la version déployable du projet.

### Back

## Technologies Utilisées

## Fonctionnalités développées

### Craco : 

### LocalStorage with expiration date : 

Nous nous sommes retrouvés face au besoin de sauvegarder des infos utiles dans le localStorage mais celui-ci a une durée de vie infinie (du moins jusqu'à ce que l'utilisateur le supprime).
Nous avons donc mis en place [deux fonctions](./src/utils/localStorage.js) : `setWithExpiry` et `getWithExpiry`.
La première `setWithExpiry` permet, en indiquant la clé, la valeur à sauvegarder et un temps à garder en storage (1s = 1000), de mettre en localStorage l'item donné.
Il n'est pas nécessaire de jsonifier l'item, cette action est effectuée dans la fonction directement.
La seconde `getWithExpiry` récupère l'item en fonction de la clé et s'occupe de vérifier si la durée de vie de l'item est dépassée. Retourne null et supprime l'item du storage si c'est le cas.

### SCSS Theming : 

### SCSS ResponsiveTheming : 

