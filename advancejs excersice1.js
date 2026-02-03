// //Exercise 1 
// //1.destructuring assignment

let{name="jhon",year=30}=user;
console.log(name);
console.log(year);

//2.Give the right name
const ourplante="earth";
let visitor="jhon";

// //3.Look at the code. What will be the result
// Hello Jhon

//4.Write the code, one line for each action

const user = {  
    name:'Jhon',  
    surname:'smith',
}
user.name= 'pete'
console.log(user.name)
console.log(user)

//5.Is it possible to change an object declared with const, how do you think and why?
//yes , we cannot override the new object but we can change the property in it.

//6.We have an object storing the salaries of our team:
let sum=0
let salaries={
 Fred: 100,
  Ted: 160,
  Ghaith: 130

}
for(key in salaries){
    sum+=salaries[key]
}
  console.log(sum)

//7.ternary operator '?':

result= (a+b<4)? 'below': 'over';

//8.Rewrite if..else using multiple ternary operators '?'.

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';





