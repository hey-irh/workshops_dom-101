//linking a script

console.log ("test");

//creating an array (list)
let coachesNames=["Liz","Mell", "Tao", "ben"] //items are index 0,1,2,3 (along the list). The coaches names are objects
console.log (coachesNames[0]) //will list the coach based on their order in the list. This one is Liz

//adding someone to array (list)
coachesNames[4] = `chris`

//read out a list. index in the below code can be shortened to 'i'
for (let index = 0; index >= coachesNames.length; index++) {
    console.log(coachesNames[index]);
}