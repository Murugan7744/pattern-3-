var n=parseInt(prompt("enter the number of rows of pattern(1 to 9)"));
for(let i=1;i<=n;i++)
{
for(j=n;j>i;j--)
{
	document.write("*");
	document.write("&nbsp");
}
for(k=1;k<=i;k++)
{
	document.write(i);
	document.write("&nbsp");
}
for(l=1;l<=i;l++)
{
	document.write(i);
	document.write("&nbsp");
}
for(m=n;m>i;m--)
{
	document.write("*");
	document.write("&nbsp");
}
document.write("<br>");
}
