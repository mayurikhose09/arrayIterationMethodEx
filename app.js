/* ==================Callback function=====================*/
function Add(){
    console.log("hello");
}
function Add2(){
    console.log("hellohiiiii");
}
function sum(num1,num2,callback){
    console.log(num1+num2);
    callback();
}
let a=12;
let b=10;
 sum(a,b,Add)
 sum(30,4,Add2)
// Map filter and reduce method 
//map method transform every element is an array individuallly and creates new array
//filter remove element that are not required and create new array that once needed
//reduce all array element into a single value
 let arr=[2,4,5,3,7,10,67,34,89,100]
  let arr2=[];
  for(let i=0;i<arr.length;i++){
    arr2[i]=arr[i]*2
    
  }
  console.log(arr2);

  let arr4=arr.map((val)=> val*3);
  console.log(arr4);

  let arr3=arr.filter(val=> val>10);
  console.log(arr3)

let employee=[
    {
        name:"mayuri",
        position:"manager",
        
    },
    {
        name:"sunil",
        position:"developer",
        
    },
    {
        name:"monika",
        position:"tester",
        
    },
    {
        name:"komal",
        position:"developer",
        
    },
    {
        name:"vaishu",
        position:"Team leader",
        
    }
]
 let developer = employee.filter(val=>val.position=="developer")
 console.log(developer);
//  Assume, we have an array of employees along with their years of work experience. 
//  We only want the total years of all employees’ work experience as the output.
 var employees = [

    {
  
      id: 111,
  
      name: "Chelsea Foster",
  
      years: 7,
  
    },
  
    {
  
      id: 102,
  
      name: "Aggie Sparling",
  
      years: 13,
  
    },
  
    {
  
      id: 123,
  
      name: "Timmy Matthews",
  
      years: 23,
  
    },
  
    {
  
      id: 119,
  
      name: "Emmet Foster",
  
      years: 22,
  
    }
  
  ];

//   let emp=employees.reduce(function(prev,employees){
// return prev +employees.years
//   },0)
//   console.log(emp);
// ======================// Now, if we want one array for the interns and one for employees:


var members =

[

  {

    id: 111,

    name: "Chelsea Foster",

    position: "Intern",

  },

  {

    id: 102,

    name: "Aggie Sparling",

    position: "Employee",

  },

  {

    id: 123,

    name: "Timmy Matthews",

    position: "Intern",

  },

  {

    id: 66,

    name: "Emmet Foster",

    position: "Employee",

  }

];
let intern=members.filter(function(value){
    return value.position =="Intern"
})
console.log(intern);

let employee1=members.filter(val=>val.position=="Employee");
console.log(employee1);

// for an array with multiple objects, each representing an individual,
//  we need a final array containing just the id of every individual.

var council = [

    { id: 2100, name: 'President Jacqueline' },
  
    { id: 2114, name: 'Vice-president James' },
  
    { id: 3016, name: 'House-captain Otis' },
  
    { id: 4818, name: 'Prefect Finneas' }
  
  ];

  let output=council.map(function(val2){
    return val2.id;
  })
 console.log(output);


 var htmlstring=[];
 council.forEach(function(coun){
 htmlstring.push(coun.id);
 })
 console.log(htmlstring);

let html=[];
 for(let data of council){
    html=data.id
    console.log(html);
 }

//  If we want the total score of permanent employees only, 
//  we will first filter out the non-permanent members:
var members =
[
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  {
    id: 66,
    name: "Emmet Foster",
    workExp: 22,
    deptExp: 9,
    isPermanent: true,
  },
  {
    id: 89,
    name: "Brent Dolan",
    workExp: 16,
    deptExp: 12,
    isPermanent: true,
  },
];


let Npm=members.filter(val=>val.isPermanent);
console.log(Npm);

// now that the resulting array has three elements, 
// we want to create an array with the total score of each one of those:
let totalscore=Npm.map(function(score){
return score.deptExp+score.workExp
});
console.log("total score is "+ totalscore[0]+ " " 
+ "total score is "+ totalscore[1] +" " + "total score is "+ totalscore[2]);

// Now add the total score of permanent employees:

let data2=totalscore.reduce(function(total,number){
    return total+number
})
console.log(data2);

/*++++++++++++ForEach() Method+++++++++++*/
//for each executes a provided function for each array element it does not return any value 
 let number=[1,2,3,4,5,6,7,8,9,10]
 let sum2=0;
 number.forEach(function(value){
    sum2 +=value
 });
 console.log(`the addtion of numbers is ${sum2}`);