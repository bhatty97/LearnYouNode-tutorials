var sum = 0 //initialize sum variable
var i = 2 //set loop variable to start at 2 because first to argv values are the location
while (i<process.argv.length){ //loop till end of command line arguments
	sum = sum + Number(process.argv[i]) //calculate sum of all the command line arguments
	i++ //increment i 
}
console.log(sum) //print sum variable as output with console log