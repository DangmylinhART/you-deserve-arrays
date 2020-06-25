/******************
 * YOUR CODE HERE *
 ******************/

 //// 1 Done ///////////////////////
 function getFirstItemFrom(arr){
 return arr[0]
 }
 let test1 = ['what','linh2','linh3']
 let test2 = ['linh1','linh2','linh3']
 
console.log(getFirstItemFrom(test2))
console.log(getFirstItemFrom(test1))



//// 2 Done  ///////////////////////
function getLastItemFrom(arr){
 return arr[arr.length-1]
}
let test3 = [1,2,3,4,'hoho']
console.log(getLastItemFrom(test3))




///3  Done ///////////////////////
function getIndex3(arr){
  if (!arr[3]){
    return arr[arr.length-1]  
  }else { return arr[3]}
}
let test4 = ['hihi', 'don', 'no']
console.log(getIndex3(test4))



/// 4 DONE ///////////////////////
function isLongList(arr){
if ( arr.length >= 10 ) { 
  return  true 
}  
else { return false}
}
let test5 = ['hihi', 'don', 'no', 5,6,7,7,89,9,2,4,4,5]
console.log (isLongList(test5))



//5 DONEl
 ///////////////////////
function firstItemIsNumber(arr){
  return arr[0] === arr[0]*1 ? true : false;
}
let test6 = [4,5,'bla',6,'hhe']
let result1 = firstItemIsNumber(test6)
result1;



//6 DONE ///////////////////////
function secondCharOfThirdString(arr){
  let third = arr[3]
  return arr[2][1]
}
test7 =['linh','huong','bla','blade','hhe']
console.log(secondCharOfThirdString(test7))




 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
