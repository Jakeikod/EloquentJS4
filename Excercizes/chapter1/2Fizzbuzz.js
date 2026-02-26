//My solution
for(let n = 1; n <= 100; n++){
    let output = "";
    if(n % 3 == 0){
        output += "Fizz";
    }
    if(n % 5 == 0){
        output += "Buzz";
    }
    if(output == ""){
        output += n;
    }
    console.log(output)
}

//Website solution
for(let n = 1; n<= 100; n++){
    let output = "";
    if(n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    console.log(output || n);
}