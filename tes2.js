let rows = 6;
let segitiga = '';

for(let i = 1; i < rows; i++){
    for(let j = 0; j < i; j++){
        segitiga += "*";
    }

    segitiga += "\n";
}

console.log(segitiga);