console.log("inicio del programa");

setTimeout(()=> {
    console.log("primer setTimeout")
}, 3000);

setTimeout(()=> {
    console.log("segundo setTimeout")
}, 0);

setTimeout(()=> {
    console.log("tercer setTimeout")
}, 0);

console.log("fin del programa");