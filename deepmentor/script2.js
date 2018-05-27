var array = [];

function addfn()
{
	var todosUL = document.querySelector('ul');
	if(array.length==0)
	{
		//console.log("hello");
		todosUL.innerHTML = '';
	}
	//console.log(array);
	var mentee = document.getElementById('mentee').value;
	var todo = {id: array.length, name: mentee, rating:0, comments:''};
	array.push(todo);
	document.getElementById('mentee').value = '';
		var todoli = document.createElement('li');
		todoli.id = "todoli" + array.length - 1;
		var menteename = document.createElement('input');
		menteename.setAttribute('type','text');
		menteename.value = array[array.length-1].name;
		menteename.className = "menteename";
		menteename.id = "menteename" + array.length-1;
		var ratingbox = document.createElement("input");
		ratingbox.setAttribute('type', 'number');
		ratingbox.className = "ratingbox";
		ratingbox.id = "ratingbox" + array.length-1;
		var remarkarea = document.createElement('textarea');
		remarkarea.className = "remarkarea";
		remarkarea.id = "remarkarea" + array.length - 1;
		var deletebutton = document.createElement('button');
		deletebutton.innerHTML = 'Delete';
		deletebutton.className = 'deletebutton';
		deletebutton.id = "deletebutton" + array.length - 1;
		todoli.appendChild(menteename);
		todoli.appendChild(ratingbox);
		todoli.appendChild(remarkarea);
		todoli.appendChild(deletebutton);
		todosUL.appendChild(todoli);
		deletebutton.onclick = function()
		{
			array.splice(array.length - 1,1);
			/*var ul = document.getElementsByTagName('ul')[0];
			var li = document.getElementById('todoli' + array.length-1);
			ul.removeChild(li);*/
			todosUL.removeChild(this.parentNode);
		};
			//console.log(array);
	
}


function sortfn()
{
	for(var i=0; i<array.length; i++)
	{
		if(document.getElementById("ratingbox" + array[i].id).value!='')
		array[i].rating = document.getElementById("ratingbox" + array[i].id).value;
		array[i].comments = document.getElementById("remarkarea"+array[i].id).value;
	}
	//console.log(array);
	for(var i=0; i<(array.length -1) ; i++)
		for(var j=i+1; j<array.length; j++)
		{
			if(array[i].rating > array[j].rating)
			{
				var temp = array[i].id;
				array[i].id = array[j].id;
				array[j].id = temp;
				var temp = array[i].rating;
				array[i].rating = array[j].rating;
				array[j].rating = temp;
				var temp = array[i].name;
				array[i].name = array[j].name;
				array[j].name = temp;
				var temp = array[i].comments;
				array[i].comments = array[j].comments;
				array[j].comments = array[i].comments;
			}
		}
		
	var todosUL = document.querySelector('ul');
	todosUL.innerHTML = '';
	for(var i=0; i<array.length; i++)
	{
		var todoli = document.createElement('li');
		todoli.id = "todoli" + i;
		var menteename = document.createElement('input');
		menteename.setAttribute('type','text');
		menteename.value = array[i].name;
		menteename.className = "menteename";
		menteename.id = "menteename" + i;
		var ratingbox = document.createElement("input");
		ratingbox.setAttribute('type', 'number');
		ratingbox.className = "ratingbox";
		ratingbox.id = "ratingbox" + i;
		var remarkarea = document.createElement('textarea');
		remarkarea.className = "remarkarea";
		remarkarea.id = "remarkarea" + i;
		var deletebutton = document.createElement('button');
		deletebutton.innerHTML = 'Delete';
		deletebutton.className = 'deletebutton';
		deletebutton.id = "deletebutton" + i;
		todoli.appendChild(menteename);
		todoli.appendChild(ratingbox);
		todoli.appendChild(remarkarea);
		todoli.appendChild(deletebutton);
		todosUL.appendChild(todoli);
		deletebutton.onclick = function()
		{
			array.splice(i,1);
			/*var ul = document.getElementsByTagName('ul')[0];
			var li = document.getElementById('todoli' + array.length-1);
			ul.removeChild(li);*/
			todosUL.removeChild(this.parentNode);
		};
	}
	
}


