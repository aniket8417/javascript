function addNums(a,b){
    c = a+b;
    console.log(c);

}

addNums(34,678);

console.log(c);

const getAvg = function(m1,m2,m3,m4 = 120){

    console.log(m1,m2,m3,m4);
    let total = ((m1+m2+m3+m4)/800)*100
    console.log(total);
    return total;

}

 let percentage = getAvg(136,199,67,136);

 console.log(percentage);

 //Arrow function

 const fact = (n) => {

    let f = 1;

    for(let i=2;i<=n;i++){

        f= f*i;
    };
    return f;
    }
    
    let ans =fact(6);

    console.log(ans);

    //prime

    let a = 13;

    for ( let i=2;i<a;i++){
        if(a%i ===0){
            isPrime = false;
            break;
        }
    }

    if(isPrime)


 
