/* Antonio Rios
 * May 28, 2015
 * 12th javascripting tutorial
 * from NodeSchool on the concept
 * of using the filter() method of
 * an array and using inner functions.
 */

var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function evenNumbers(number){
    return number % 2 === 0;
})
console.log(filtered);
