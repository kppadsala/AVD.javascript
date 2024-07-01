// loop an array  of object  and remove all object  which dont have gender value  male.
 let a=[
    {name:"krunal",gebder:"male"},
    {name:"nirmal",gebder:"male"},
    {name:"jeni",gebder:"female"},
    {name:"harsh",gebder:"male"},
    {name:"yashhvi",gebder:"female"},

 ]
 let newArr=a.filter((e)=>{
return e.gender === "male"
 });

 console.log("newArr==>",newArr);
//  output= 
//   newArr==> [ 
//       { name: 'krunal', gender: 'male' }, 
//       { name: 'nirmal', gender: 'male' },
//       { name: 'harsh', gender: 'male' }]

