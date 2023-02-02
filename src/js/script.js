// let pElem = document.createElement("p");

// const response = fetch('./dataset.tsv')
//     .then(response => response.text())
//     .then(v => parseTSV(v))
//     .catch(err => console.log(err))

// response.then(v => v.forEach(i => i.forEach(item => pElem.innerText += item + "\n")))

// const parseTSV = (data) => {
//     const tsvData = [];
//     const lines = data.split("\n");

//     for (let i = 0; i < lines.length; i++) {
//         tsvData[i] = lines[i].split("\t");
//     }
    
//     return tsvData;
// };

// document.querySelector(".text-box").appendChild(pElem);


(function (){
    const barElem = document.querySelector(".progress-bar");
    const mousePos = { x : 0, y : 0 };
    let maxScrollValue;


    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener("scroll", function () {
        const scrollPer = scrollY / maxScrollValue;
        const zMove =  scrollPer * 980 - 490;
        // houseElem.style.transform = `translateZ(${zMove}vw)`
        console.log(scrollPer);
        barElem.style.width = `${scrollPer * 100}%`;
        if (scrollPer < 0.333) {
            barElem.style.backgroundColor = "#009246";
        }
        if (scrollPer >= 0.333 && scrollPer < 0.666){
            barElem.style.backgroundColor = "white";
        }
        if (scrollPer >= 0.666){
            barElem.style.backgroundColor = "#cf2b37";
        }
    });

    window.addEventListener("mousemove", function (e) {
        // 마우스의 위치를 중앙을 0,0으로 하고 상하좌우의 좌표를 -1 ~1 으로 재설정
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        // stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`;
    });

    window.addEventListener("resize", resizeHandler);

    resizeHandler();
})();