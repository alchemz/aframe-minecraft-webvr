AFRAME.registerComponent('random-color',{
	dependencies: ['material'],
	init: function(){
		//set material components's color property to a random color.
		this.el.setAttribute('material', 'color', getRandomColor());
	}
});

function getRandomColor(){
	const letters ='0123456788ABCDEF';
	var color='#';
	for(bar i=0; i<6; i++){
		color +=letters[Math.floor(Math.random()*16)];
	}

	return color;
}