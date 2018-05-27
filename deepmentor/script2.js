//Note the rating is from 1 to 10
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
	//console.log(array.length);
	array.push(todo);
	//if(array.length>2)
	//console.log(array[2].id);
	document.getElementById('mentee').value = '';
		var todoli = document.createElement('li');
		var menteename = document.createElement('input');
		menteename.setAttribute('type','text');
		menteename.value = array[array.length-1].name;
		menteename.className = "menteename";
		menteename.id = "menteename" + (array.length-1).toString();
		var ratingbox = document.createElement("input");
		ratingbox.setAttribute('type', 'number');
		ratingbox.className = "ratingbox";
		ratingbox.id = "ratingbox" + (array.length-1).toString();
		//console.log(ratingbox.id);
		ratingbox.onkeyup = function()
		{
			if(ratingbox.value>0 && ratingbox.value<=5)
				ratingbox.style.backgroundColor = 'red';
			else if(ratingbox.value>5 && ratingbox.value<=10)
				ratingbox.style.backgroundColor = 'green';
			/*for(var i=0; i<array.length; i++)
				console.log(array[i].id);*/
			for(var i=0; i<array.length; i++)
				if(ratingbox.id.substr(9) ==array[i].id)
				{
					//console.log(ratingbox.id.substr(9));
					array[i].rating = ratingbox.value;
					break;
				}
					
		};
		var remarkarea = document.createElement('textarea');
		remarkarea.className = "remarkarea";
		remarkarea.id = "remarkarea" + (array.length - 1).toString();
		remarkarea.onkeyup = function()
		{
			for(var i=0; i<array.length; i++)
				if(remarkarea.id.substr(10) ==array[i].id)
				{
					array[i].comments = remarkarea.value;
					break;
				}
					
		};
		var deletebutton = document.createElement('button');
		deletebutton.innerHTML = 'Delete';
		deletebutton.className = 'deletebutton';
		deletebutton.id = "deletebutton" + (array.length - 1).toString();
		todoli.appendChild(menteename);
		todoli.appendChild(ratingbox);
		todoli.appendChild(remarkarea);
		todoli.appendChild(deletebutton);
		todosUL.appendChild(todoli);
		deletebutton.onclick = function()
		{
			var pos = parseInt(deletebutton.id.substr(12));
			array.splice(pos,1);
			console.log(array);
			/*var ul = document.getElementsByTagName('ul')[0];
			var li = document.getElementById('todoli' + array.length-1);
			ul.removeChild(li);*/
			todosUL.removeChild(this.parentNode);
		};
			//console.log(array);
	
}


function sortfn()
{
	console.log(array);
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
				array[j].comments = temp;
			}
		}
	//console.log(array);
	var todosUL = document.querySelector('ul');
	todosUL.innerHTML = '';
	for(var i=0; i<array.length; i++)
	{
		array[i].id = i;
		var todoli = document.createElement('li');
		var menteename = document.createElement('input');
		menteename.setAttribute('type','text');
		menteename.value = array[i].name;
		menteename.className = "menteename";
		menteename.id = "menteename" + i.toString();
		var ratingbox = document.createElement("input");
		ratingbox.setAttribute('type', 'number');
		ratingbox.className = "ratingbox";
		ratingbox.id = "ratingbox" + toString();
		ratingbox.value = array[i].rating;
		var remarkarea = document.createElement('textarea');
		remarkarea.className = "remarkarea";
		remarkarea.id = "remarkarea" + i.toString();
		remarkarea.value = array[i].comments;
		var deletebutton = document.createElement('button');
		deletebutton.innerHTML = 'Delete';
		deletebutton.className = 'deletebutton';
		deletebutton.id = "deletebutton" + i.toString();
		todoli.appendChild(menteename);
		todoli.appendChild(ratingbox);
		todoli.appendChild(remarkarea);
		todoli.appendChild(deletebutton);
		todosUL.appendChild(todoli);
		deletebutton.onclick = function()
		{
			var pos = parseInt(deletebutton.id.substr(12));
			array.splice(pos,1);
			console.log(array);
			/*var ul = document.getElementsByTagName('ul')[0];
			var li = document.getElementById('todoli' + array.length-1);
			ul.removeChild(li);*/
			todosUL.removeChild(this.parentNode);
		};
		ratingbox.onkeyup = function()
		{
			if(ratingbox.value>0 && ratingbox.value<=5)
				ratingbox.style.backgroundColor = 'red';
			else if(ratingbox.value>5 && ratingbox.value<=10)
				ratingbox.style.backgroundColor = 'green';
			for(var i=0; i<array.length; i++)
				if(ratingbox.id.substr(9) ==array[i].id)
				{
					array[i].rating = ratingbox.value;
					break;
				}
		};
		remarkarea.onkeyup = function()
		{
			for(var i=0; i<array.length; i++)
				if(remarkarea.id.substr(10) ==array[i].id)
				{
					array[i].comments = remarkarea.value;
					break;
				}
		};
	}
	
}


