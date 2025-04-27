let rows = 6;
let triangle = '';
for(let i = 1; i < rows; i++){
    for(let j = 0; j < i; j++){
        triangle += "*"
    }

    triangle += "\n"
}

console.log(triangle);