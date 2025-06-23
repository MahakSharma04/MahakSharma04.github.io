const score= [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore = [...score,9]
// console.log(newScore)

// score.forEach((a,b,c)=>{ //a=value,b=index,c=array
//     console.log(c[b]);
// })

// score.map((value)=>{
//     console.log(value);
// });

// const newScore= score.map((value)=>{// in new array values can be same or modified
//     return value+5;
// });
// console.log(newScore);

// const newScore1= score.filter((value)=>{
//     return value > 2; // values same but based on conditions only true elts will be coming 
//     //in the new array
// });
// console.log(newScore1);

const newScore= score.find((value)=>{
    return value === 7; 
});
console.log(newScore);

// const newScore= score.reduce((sum,value)=>
//     sum+ value, 0); 
// console.log(newScore);

