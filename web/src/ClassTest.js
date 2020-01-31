

class Animal
{
	constructor(name)
	{
		this.name = name;
	}
}

class Bird extends Animal
{
	constructor()
	{
		super();
	}
	fly()
	{
		console.log("This Bird " + name + " is flying");
	}
}