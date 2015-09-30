var Cavs = {};
Cavs.Person = function(player,number, height, weight, dob)
{
	this.Player = player;
	this.Number = number;
	this.Height = height;
	this.Weight = weight;
	this.DOB = dob;

}
delete Cavs.dob; 

Cavs.Matthew = new Cavs.Person("Matthew Dellavedova", 8, "6'4", 200, 09/08/1990);
Cavs.Joe = new Cavs.Person("Joe Harris", 12, "6'6", 225, 9/7/1991);
Cavs.Kyrie = new Cavs.Person("Kyrie Irving", 2, "6'3", 193, 3/23/1992);
Cavs.LeBron = new Cavs.Person("LeBron James", 23, "6'8", 250, 12/20/1984);
Cavs.Richard = new Cavs.Person("Richard Jefferson", 34,"6'7", 234, 6/21/1980);
Cavs.James = new Cavs.Person("James Jones", 1, "6'8", 215, 10/4/1980); 
Cavs.Kevin = new Cavs.Person("Kevin Love", 0, "6'10", 243, 09/7/1988);
Cavs.Timofey = new Cavs.Person("Timofey Mozgov", 20, "7'1", 250, 7/16/1986);
Cavs.SirDominic = new Cavs.Person("Sir'Dominic Pointer", 33, "6'5", 198, 5/6/1992);
Cavs.Iman = new Cavs.Person("Iman Shumpert", 4, "6'5", 220, 6/26/1990);
Cavs.JR = new Cavs.Person("JR Smith", 5, "6'6", 225, 9/9/1985);
Cavs.Tristan = new Cavs.Person("Tristan Thompson", 13, "6'9", 238, 3/13/1991);
Cavs.Anderson = new Cavs.Person("Anderson Varejao", 17, "6'11", 267, 9/28/1982);
Cavs.Mo = new Cavs.Person("Mo Williams", 35, "6'1", 198, 12/19/1982); 

Cavs.BestPlayer = Cavs.LeBron;
Cavs.SecondBestPlayer = Cavs.Kyrie;
Cavs.ThirdBestPlayer = Cavs.Kevin; 


Cavs.Person.prototype.SetPlayer = function(name)
	{
		this.Player = name;
	}
Cavs.Person.prototype.SetNumber = function(number){

	this.Number = number; 
}

Cavs.Person.prototype.GetPlayer = function()
{
	return this.Player + " " + this.Number;
}


Cavs.LeBron.SetPlayer("Famous"); 
Cavs.Anderson.SetNumber("17"); 


document.body.innerHTML = Cavs.JR.GetPlayer();
document.body.innerHTML = Cavs.Tristan.GetPlayer();


