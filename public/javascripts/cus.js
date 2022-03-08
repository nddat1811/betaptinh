let resultText = document.getElementById("resultText");
function isNumber(a, id) {
    if (id == "num1") {
        if (a == "") {
            resultText.innerHTML = "Giá trị nhập ở ô <em>Số thứ nhất </em> chưa nhập";
            return;
        }
        if (isNaN(a)) {
            resultText.innerHTML = "Giá trị nhập ở ô <em>Số thứ nhất </em> không phải là số thực";
            return;
        }
    }
    if (id == "num2") {
        if (a == "") {
            resultText.innerHTML = "Giá trị nhập ở ô <em>Số thứ hai </em> chưa nhập";
            return;
        }
        if (isNaN(a)) {
            resultText.innerHTML = "Giá trị nhập ở ô <em>Số thứ hai </em> không phải là số thực";
            return;
        }
    }
    resultText.innerHTML = "";
}