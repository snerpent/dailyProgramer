
function justify(file, side){

		if (side = "right"){
			alert(readTextFile("http://localhost:8000/file.txt"));
		}
		else {
			alert(readTextFile("http://localhost:8000/file.txt"));
		}
		
}


function readTextFile(file)
{
		var allText;	
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);
		return allText;
}




justify("http://localhost:8000/file.txt", "right");

