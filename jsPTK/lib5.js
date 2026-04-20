function inBang() {
    const myForm = document.forms["frmBang"];

    let myNum = parseInt(myForm.elements[0].value);

    let kq = "";

    for (let i = 1; i <= 10; i++) {
        kq += myNum + " x " + i + " = " + (myNum * i) + "<br>";
    }

    document.querySelector(".kq").innerHTML = kq;
}
