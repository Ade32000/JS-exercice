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

function caractere(string="J'ai bon caractère !") 
{
	return string;
	
}

document.write(caractere());
document.write("<br /><br />");

function concate (e="Salut ",f="les gars !")
{
	return e + f;
}

document.write(concate());
document.write("<br /><br />");



function nombres (nb1=1,nb2=2)
{

	if (nb1 == nb2) 
	{
		return 'Les deux nombres sont identiques';
	}
	else if (nb1 > nb2)
	{
		return 'Le premier nombre est plus grand';
	} 
	else 
	{
		return 'Le premier nombre est plus petit';
	}
}

document.write(nombres(50,8)+'<br/>');
document.write(nombres(3,8)+'<br/>');
document.write(nombres(50,50));
document.write("<br /><br />");

function onsemélange (int=2,text=" c'est mieux !")
{
	return 'A ' + int + text;
}
document.write(onsemélange());
document.write("<br /><br />");

