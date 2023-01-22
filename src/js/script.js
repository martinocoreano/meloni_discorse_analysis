let pElem = document.createElement("p");

const response = fetch('./dataset.tsv')
    .then(response => response.text())
    .then(v => parseTSV(v))
    .catch(err => console.log(err))

response.then(v => v.forEach(i => i.forEach(item => pElem.innerText += item + "\n")))

const parseTSV = (data) => {
    const tsvData = [];
    const lines = data.split("\n");

    for (let i = 0; i < lines.length; i++) {
        tsvData[i] = lines[i].split("\t");
    }
    
    return tsvData;
};

document.querySelector(".text-box").appendChild(pElem);
