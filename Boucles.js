var x = 0;

	for (; x <= 10; x++) 
	{
	document.write(x+'<br />');
	}

document.write("<br />"+"<br />");

var nb1 = 0;
var nb2 = 50;

	while (nb1 <= 20)
	{
		var res = nb1 * nb2;
		document.write(res+'<br />');
		nb1++;
	}

document.write("<br />"+"<br />");

var Cent = 100;
var other = 43;

	while (Cent >= 10)
	{
		var res1 = Cent * other;
		document.write(res1+'<br />');
		Cent--;
	}

document.write("<br />"+"<br />");

var y = 1;

	while (y < 11)
	{
		document.write(y+'<br />');
		y += y/2;
	}

document.write("<br />"+"<br />");

for (i=1; i <16; i++)
{
	document.write(i+"  "+'On y arrive presque.'+'<br />');
}

document.write("<br />"+"<br />");

for (j=20; j >= 0 ; j--) 
{ 
	document.write(j+"  "+"C'est presque bon."+'<br />');
}

document.write("<br />"+"<br />");

for (k=1; k < 101 ; k+= 15) 
{ 
	document.write(k+" "+"On tient le bon bout."+" "+'<br />');
}
