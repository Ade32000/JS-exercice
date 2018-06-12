var mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];

document.write(mois[2]+"<br />"+"<br />"); //Affiche la 3ème valeur du tableau "mois"
document.write(mois[5]+"<br />"+"<br />"); //Affiche la valeur du tableau "mois" dont l'index est 5
document.write(mois[10]+"<br />"+"<br />"); // Affiche la valeur du tableau "mois" dont l'index est 10

mois [7] = "août"; //Affecte une nouvelle valeur à l'index 7
document.write(mois.join()+"<br />"+"<br />"); //Affiche toutes les valeurs du tableau "mois"

var courgette = array.push('Courgette'); //Ajoute une nouvelle valeur à la fin du tableau "array";
document.write(array+"<br />"+"<br />");

var citron = array[4].push('Citron'); // Ajoute "Citron dans le tableau imbriqué situé à l'index 4"
document.write(array+"<br />"+"<br />");

var enleve = array.splice(1,1); // Enlève l'élèment situé à l'index 1
document.write(array+"<br />"+"<br />");

var ajout = array.splice(2,0,"Poire"); // Ajoute l'élèment "Poire" à l'index 2, ceci a pour effet de décaler les autres (index,valeur)
document.write(array+"<br />"+"<br />");