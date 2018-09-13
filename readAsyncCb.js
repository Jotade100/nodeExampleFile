var fs = require('fs')
//Read file function
function callback  (err, data) {
	var txtFile = "./fileResult.txt";
    if (err) return console.error(err);
    var textPlain = data
	var myArray = textPlain.split("\n")
	fs.writeFileSync(txtFile, "");
    myArray.forEach(function(value){
		var result = " N° de palabras: " +  value.split(" ").length
        console.log(result);
		fs.appendFileSync(txtFile, result+"\n")	
	
	
    });
};
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest", "utf8", callback )
  
}
readFile()