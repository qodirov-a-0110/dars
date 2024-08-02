

//misol
//et counter=0;
//or(let i = 4;i<=50;i++){
//   counter =0;
//
//   for(let j=1;j<=i;j++){
//       if(i%j==0){
//           counter++
//       }
//   }
//   if (counter>2){
//       console.log(i);
//   }
//
//misol
//let num= +prompt("sonni kiriting")
//let max=num;
//let min=num;
//for(let i=1; i<=4;i++){
//    num= +prompt("sonni kiriting")
//    if(num>max){
//        max=num
//    }
//    if(num<min ){
//        min=num
//    }
//}
//misol
//let num = 1234
//let res=0;
//while(num>=){
//    res=res-10+num%10
//    num=Math.trunc(num/10)
//}
//console.log(res);
//misol
//let num=10;
//let sum=0;
//for(let i=10;i<=100;i++){
//    if(i%2==1){
//        sum=sum+i
//    }
//
//}


//misol
//let num= +prompt("sonni kiriting")
//let p=1;
//for(let i=1;i <= num;i++){
//    p*=i
//}


//misol
//et sum=0;
//or(let i=1;i<=20;i++){
//   sum+=i **2


// misol
//let counter=0;
//or(let i = -2;i<=30;i++){
//   counter =0;
//
//   for(let j=1;j<=i;j++){
//       if(i%j==0){
//           counter++
//       }
//   }
//   if (counter>2){
//       console.log(i);
//   }


// misol
//let num=10;
//let sum=0;
//for(let i=1;i<=10;i++){
//    if (i%2==0){
//        sum+=i**2
//    }else if(i%2==1){
//        sum+=i**3
//    }
//}

// misol
//let num=50;
//for(let i=1;i<=50;i++){
//    if(i%3==0&& i%5==0){
//
//    }
//}
//console.log(i);


// misol
//let num=100;
//let sum
//for(let i=1;i<=100;i++){
//    sum+=i/i
//}

// misol
//et num= +prompt("sonni kiriting")
//or(let i=1;i<=num;i++){
//   if(i/-1){
//
//   }
//
//onsole.log(i);


// misol
//let num=200;
//let sum=0;
//for(let i=1;i<=200;i++){
//    sum=sum+i
//}

// misol
//let num=20
//let sum=0;
//for(let i=1;i<=20;i++){
//    sum=sum+i
//}
//break/continue


// misol
//let num=10
//for(let i=1;i<=10;i++){
//    if(i==5){
//        break;
//    }
//}
//console.log(i);


// misol
//let num=10
//for(let i=1;i<=10;i++){
//    if(i==3 && i==7){
//        continue;
//    }
//}
//console.log(i);


//misol
//let num=10
//for(let i=1;i<=10;i++){
//    if(i==7){
//        break;
//console.log("topildi");
//    }
//}
//console.log(i);


// misol
//let num=10
//for(let i=1;i<=10;i++){
//    if(i%2==0){
//        continue;
//    }
//}
//console.log(i);
//5-misol
//let num=100
//for(let i=1;i<=100;i++){
//    if(i<50){
//        break;
//    }
//}
//console.log(i);

// let arr = [1,4,8,7,9,6,2,3];
// let num = 4;
// let res = arr.indexOf(num);
// console.log(res);

// let arr = [1,4,8,7,9,6,2,3];
// let num = 4;
// let res = arr.includes(num);
// console.log(res);


// let arr = [1,4,7,8,9,5,-5,-3,-7,-5];

// function test(arr) {
//     let a = [];
//     let b = [];
//    for (const iterator of arr) {
//         if (iterator >= 0) {
//             a.push(arr)
//         }else{
//             b.push(arr);
//         }
//    }
//    return [a,b] ;
   
// }


// console.log(arr);


// let arr = [1,2,3];
// let n = 3;
// let res = arr.forEach(function (value) {
    
// })

let arr = [1,4,5,1,0,5];
function test(arr) {
    let res = Math.trunc(Math.random()*arr.length);
    return arr[res];

}
console.log(test(arr));