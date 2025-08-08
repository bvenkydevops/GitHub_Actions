//Do-while loop statements

// print values 0 to 10 diff 1

/*
0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10

let result = '';
let i=0;
do{
    if(i<=9){
        result += `${i} , ` ;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while(i<=10);
console.log(result);


10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0

let result = '';
let i=10;
do{
    if(i>=1){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i--;
}
while(i>=0);
console.log(result);
*/
let result= '';
let i=1;
do{
    result += '*';
    let j=1;
    j++;
    do{
        result += '\n';
        i++;
    }
        
}
while(i<=1);
while(j<=i);
console.log(result);