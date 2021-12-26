let start = 10;
let difference = 6;
let N = 10;
console.log(nthAP(start, difference, N));


function nthAP(start, difference, N){ 
    return (start + (N - 1) * difference);
}