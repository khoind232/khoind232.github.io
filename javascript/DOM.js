function changefontsize(x)
{ var a=document.getElementsByClassName("b1");
	for(var i=0;i<a.length;i++)
		a[i].style.fontSize=x+"px";

	return a;
}
function changecolor()
{
	document.getElementById("p1").style.color="green ";
	document.getElementById("p2").style.color="yellow";
	document.getElementById("p3").style.color="red";
}
function changeBGcolor(color)
{
	document.body.style.backgroundColor=color;
}
function copycontent(a,b)
{	if(a==1 && b==2)
	document.getElementById("p1").innerHTML=document.getElementById("p2").innerHTML;
	if(a==2 && b==3)
	document.getElementById("p2").innerHTML=document.getElementById("p3").innerHTML;
	if(a==3 && b==1)
	document.getElementById("p3").innerHTML=document.getElementById("p1").innerHTML;
}
function increasefontsize(b)
{
	if(b==1)
	{	var e;				
		var a = document.getElementById("p1");
		var m = parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++ ;
		if( m < 30)
		{
			e = m;
		}
		else
			e = 30;

	}
	else if ( b == 2)
	{
		var a=document.getElementById("p2");
		var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++;
		if ( m < 30)
		{
			e = m;
		}
		else 
		{
			e = 30;
		}

	}
	else if(b==3)
	{
		var a = document.getElementById("p3");
		var m = parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++;
		if( m < 30)
		{
			e = m;		
		}
		else 
			e = 30;

	}
	return a.fontSize=e+"px";

}