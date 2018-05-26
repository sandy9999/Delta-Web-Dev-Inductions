var array = [];
//var deleteee;
function addfn()
{
	var mentee = document.getElementById('mentee').value;
	var d = new Date();
	var time = d.getTime();
	var todo = {id: time, name: mentee, rating:0/*, comments:inputcomments*/};
	array.push(todo);
	document.getElementById('mentee').value = '';
	displayfn();
	//console.log(array);
	
}

function displayfn()
{
	var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
	for(var i = 0; i<array.length; i++)
	{
		
		var todoli = document.createElement('li');
		todoli.className = "collapsible";
		var menteename = document.createElement('input');
		menteename.setAttribute('type','text');
		menteename.value = array[i].name;
		menteename.id = "menteename";
		var ratingbox = document.createElement("input");
		if(array[i].rating != 0)
			ratingbox.value = array[i].rating;
		ratingbox.setAttribute('type', 'number');
		ratingbox.className = "ratingbox";
		ratingbox.id = "ratingbox" + i;
		var remarkarea = document.createElement('textarea');
		var deletebutton = document.createElement('button');
		deletebutton.innerHTML = 'Delete';
		deletebutton.className = 'deletebutton';
		deletebutton.id = i;
		deletebutton.onclick = function()
		{
			array.splice(i,1);
			displayfn();
		};
		todosUl.appendChild(todoli);
		todosUl.appendChild(menteename);
		todosUl.appendChild(ratingbox);
		todosUl.appendChild(remarkarea);
		todosUl.appendChild(deletebutton);
	}

}

function sortfn()
{
	for(var i=0; i<array.length; i++)
	{
		array[i].rating = document.getElementById("ratingbox" + i).value;
	}
	//console.log(array);
	for(var i=0; i<(array.length -1) ; i++)
		for(var j=i+1; j<array.length; j++)
		{
			if(array[i].rating > array[j].rating)
			{
				var temp = array[i].rating;
				array[i].rating = array[j].rating;
				array[j].rating = temp;
				var temp = array[i].name;
				array[i].name = array[j].name;
				array[j].name = temp;
			}
		}
	displayfn();
}

/*deleteee = document.getElementsByClassName("deletebutton");
for(var i = 0; i<deleteee.length; i++)
{
	deleteee[i].addEventListener('click',function()
	{
		array.splice(deleteee[i].id,1);
	});
	//console.log(deleteee[i]);
}*/