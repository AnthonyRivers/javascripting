/* Antonio Rios
 * May 28, 2015
 * 14th javascripting tutorial
 * from NodeSchool on how to 
 * loop through the items in
 * an array.
 */

var pets = ['cat','dog','rat'];

for (var i = 0; i < pets.length; i++){
    pets[i] = pets[i] + 's';
}
console.log(pets)

