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

document.getElementById("save-text-file").addEventListener("click", function () {
    download("text.txt", text.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}