/*function sum(a,b){
    return (a+b);
}
console.log(sum(6,8));*/

let sum = (a,b) => a+b
console.log(sum(6,8));

let test = () => {
    const x = 30;
    let a = 20;
    console.log(`y = ${y}`);
    if(a!=0){
        let b = 30;
        var c = 40;
        console.log(`----Inside if block----`);
        console.log(`a = ${a}`); // Template String Literal
        console.log(`b = ${b}`);
        console.log(`c = ${c}`);
        
        if(a!=0){
            let y = 64;
            b = 87;
            console.log(`b = ${b}`);
            console.log(`y = ${y}`);
        }
        console.log(`y = ${y}`);
    }
    let b = 30;
    console.log(`----Outside if block----`);
    console.log(`a = ${a}`);
    console.log(`c = ${c}`);
    console.log(`b = ${b}`);
    console.log(`y = ${y}`);
}
