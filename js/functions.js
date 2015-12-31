function printDebugInfo(str)
{
	var temp=document.getElementById("debuginfo").innerHTML;
	temp+=str;
	document.getElementById("debuginfo").innerHTML=temp;
	
}

function sortUnitsByZindex()
{
	//debuginfo+=units[0].getType();
	for (var i=0; i<units.length-1; i++)
	{
		if (units[i].getPosZ()>units[i+1].getPosZ())
		{
			var temp = units[i];
			units[i]=units[i+1];
			units[i+1]=temp;
			
			i=-1;
			
		}
	}
		
}