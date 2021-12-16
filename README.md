# Besoin du client
  
  Le but du projet est d'obtenir les informations des voiles subjéré grâce aux mesures du bateau qu'on obtient avec une liste de bateaux avec lequel on reçoit la référence de       celui-ci. 

# Étape réalisé 

    Le site doit pouvoir appeller trois API. 
    - Le première appel doit permettre de rechercher une liste de bateaux à l'aide d'une API. 

    - Le deuxième appel doit permettre d'afficher les informations sur les mesures du bateau à l'aide de sa référence. 
    
    - Le troisième appel doit permettre d'afficher la liste de voiles adapté aux mesures du bateau. 
    
   Le site doit contenir des validations au niveau des champs pour que l'utilisateur soit en mesure de voir les erreurs dans les champs. 
   La validation des champs permet aussi de sécurisé l'API. L'utlisateur ne peut pas entrer des informations qui pourraient être inutile.
  
   Le site doit être ergonomique pour les utilisateurs qui l'utilisent.
  
# Prérequis
   
   Avoir : 
   - @angular/cli 13.0.3
   - typescript
   - bootstrap 
   - Un outil de développement qui supporte la programmation en angular et en typescript (ex: Webstorm, VSCode, notepad++, etc)
   
# Tâche non réalisé

  Les voiles restent afficher à l'écran même si il y a aucune valeur de validé.

# Difficulté rencontré 

  La validation des champs rencontre quelques problèmes au niveau des valeurs entrés. Un "0" ne passera pas comme un nombre, mais dans un autre champs celui-ci passera normalement.
  
