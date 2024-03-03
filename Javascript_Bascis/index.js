/*--------------------map function-----------------------*/
/* The map method creates a new array by applying a function to 
each element in the original array. 
It does not mutate the original array. */

/*const arr_one = [1,2,3,4,5];
const arr_two = arr_one.map((num)=>num*num)
console.log(arr_two)*/

/*---------------------filter in javascript-------------------------- */
/* The filter method creates a new array with all elements that pass 
the test implemented by the provided function. */


/*const arr_one = [1,2,5,8,10,16,18,15,25]
const arr_two = arr_one.filter((num)=>num%2==0)
console.log(arr_two)*/



/*------------------------ Reduce in javascript ------------------------*/
/* The reduce method applies a function against an accumulator and 
each element in the array (from left to right) to reduce it to a single value. 
It's often used to perform calculations or to transform data. */


const arr_one = [1,5,8,9,40]
const arr_two = arr_one.reduce((accumulator,currentValue)=>(accumulator+currentValue),0)
console.log(arr_two)