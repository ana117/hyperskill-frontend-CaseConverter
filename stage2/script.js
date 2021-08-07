let text = document.getElementById("text");

document.getElementById("upper-case").addEventListener("click", function () {
    text.value = text.value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click", function () {
    text.value = text.value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function () {
    let textArr = text.value.toLowerCase().split(" ");
    for (let i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1);
    }
    text.value = textArr.join(" ");
})

document.getElementById("sentence-case").addEventListener("click", function () {
    let textArr = text.value.toLowerCase().split(". ");
    for (let i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1);
    }
    text.value = textArr.join(". ");
})