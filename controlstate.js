// conditional & looping statements

   // if-else
/*
   let time = 16;
   let wishMessage = ' ';
   if(time <=12){
    wishMessage = 'hey Good Morining';
   }
   else if(time >12 && time <= 17){
    wishMessage = 'hey Good Afternoon';
   }
   else if(time >17 && time <= 23){
    wishMessage = 'hey Good Evening';
   }
   else{
    wishMessage = 'Enter proper Time'
   }
   console.log(wishMessage);
   */


// switch statements

// let day = new Date().getDay();
// console.log(day);

/*
let day = new Date().getDay();
let today = '';
switch(day){

case 0 :
    today = 'sunday';
    break;
    case 1 :
    today = 'Monday';
    break;
    case 2 :
    today = 'Tuesday';
    break;
    case 3 :
    today = 'wendessday';
    break;
    case 4 :
    today = 'Thursday';
    break;
    case 5 :
    today = 'Friday';
    break;
    case 6 :
    today = 'saturday';
    break;
    default:
        today = 'Enter proper Day';
        break;
    
}
console.log(`Today is : ${today}`);
*/



// Forloop statements

//    for(let i = 10; i >= 0; i--){
//    console.log(i);
//    }

/*
let result = '';
for(let i = 0; i<=10;i++){
    if(i <=9){
 result = result + `${i} , `;
}
else{
    result = result + `${i} `

}
}
console.log(result);
*/


//or 
/*
let result = '';
for(let i=0; i<=10; i++){
    if(i<=9){
        result += `${i} , `
    }
    else{
        result += `${i}`
    }
}
console.log(result);
*/

// for loop inside nested for loop
/*
*
**
***
****
*****

let result = '';
for(let i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        result +=  '*';
    }
    result += '\n';
}
console.log(result);


*****
****
***
**
*


let result = '';
for(let i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        result +=  '*';
    }
    result += '\n';
}
console.log(result);


1
12
123
1234
12345


let result = '';
for(let i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        result += `${j}` ;
    }
    result += '\n';
}
console.log(result);



12345
1234
123
12
1


let result = '';
for(let i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        result +=  j ;
    }
    result += '\n';
}
console.log(result);



1
22
333
4444
55555

let result = '';
for(let i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        result += `${i}` ;
    }
    result += '\n';
}
console.log(result);


55555
4444
333
22
1

let result = '';
for(let i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        result += `${i}` ;
    }
    result += '\n';
}
console.log(result);
*/

