function randomPuppyNames() {
    const names = [
        "Shakira",
        "Mira",
        "Lykke liten",
        "Rocky",
        "King",
        "Lynet",
        "Bingo",
        "Bella",
        "Panda",
        "Luregutt",
    ];

    let outPut = document.getElementById("randomElementOutPut");
    let child = outPut.firstChild;

    while (child) {
        outPut.removeChild (child);
        child = outPut.firstChild;
    }


let randomNumber = Math.floor(Math.random()*names.length);
let newParagraph = document.createElement("p");
newParagraph.textContent = names[randomNumber];
outPut.appendChild(newParagraph);
return outPut;
}