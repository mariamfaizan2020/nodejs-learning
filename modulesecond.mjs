//commom js module

// function simple(){
//     console.log('this is common js module')
// }
// module.exports =simple;

//if we change our modulesecond file to mjs module ie=ES module then we can not export it in taht way
//mjs module
//for mjs module we have to add "type:"module" in our pakage.json file
export function simple(){
    console.log('this is mjs module')
}