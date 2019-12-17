function fibonacci(range){

    var firstnum = 0;
		var secondnum = 1;
		var nextnumber;
 
		
 
		console.log("" + firstnum +"");
	    console.log("" + secondnum +"");
 
		for(var i=3; i <= range;i++)
		{
			nextnumber = firstnum + secondnum;
			firstnum = secondnum;
			secondnum = nextnumber;
 
			console.log(""+ nextnumber +"");
		}
}

fibonacci(10)