const nums =[3,5,66,9,98];

//Wap tp print all the even number

//1st way

for(let i=0;i<nums.length;i++){
    if(nums[i]%2=== 0){
    console.log(nums[i]);
    }
};

//2nd way for each loop

for(let n of nums){
    if(n%2===0)
    console.log(n);
}
// third way

nums.forEach( (n)  =>{
    if(n%2===0)
    console.log(n);

});

//programe print 

for(let n of nums){

    console.log(n**2);
}

    const newNums =[];

    for (let a of nums){
    console.log(a**2);
    newNums.push(a*a);

    }

    console.log(newNums);
