var a = 5;
var b = 2;

function vrai(c,d) 
{
	if (c > d)
	{
		document.write("La vérité sort toujours de la bouche d'une fonction...ou pas!");
		return true;		
	}
	else
	{
		document.write("Non, non, non, c'est faux !!!");
		return false;		
	}
}

vrai(a,b);

document.write("<br /><br />");

function caractere() 
{
	var char = "J'ai bon caractère";
	return char;
	
}

document.write(caractere());

document.write("<br /><br />");