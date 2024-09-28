let num=Number(prompt("Enter the table you want: "))

for (let i = 1; i <= 10; i++) {
    if(!num){
        console.log("5 x ", i , " = ", i*5);
    }
    else{
        console.log(num," x ", i , " = ", i*num);
    }
}
