

const giaCoSo = 300000;
const giaChuyenNganh = 500000;


function taoDong(){

    const row = document.createElement("div");
    row.className = "row";

   
    const ten = document.createElement("input");
    ten.type = "text";
    ten.placeholder = "Nhập tên môn";

   
    const tc = document.createElement("input");
    tc.type = "number";
    tc.placeholder = "Số tín chỉ";
    tc.min = "0";

    
    tc.oninput = function(){
        if(tc.value < 0){
            tc.value = 0;
        }
        capNhatHocPhi(row);
    };

   
    const radioDiv = document.createElement("div");
    radioDiv.className = "radio-group";

    const nameRadio = "loai" + Date.now();

    const r1 = document.createElement("input");
    r1.type = "radio";
    r1.name = nameRadio;
    r1.value = "coso";
    r1.checked = true;

    const label1 = document.createTextNode(" Cơ sở ");

    const r2 = document.createElement("input");
    r2.type = "radio";
    r2.name = nameRadio;
    r2.value = "chuyennganh";

    const label2 = document.createTextNode(" Chuyên ngành ");

    
    r1.onchange = () => capNhatHocPhi(row);
    r2.onchange = () => capNhatHocPhi(row);

    radioDiv.appendChild(r1);
    radioDiv.appendChild(label1);
    radioDiv.appendChild(r2);
    radioDiv.appendChild(label2);

    
    const cost = document.createElement("div");
    cost.className = "cost";
    cost.innerHTML = "Học phí: 0 VND";

   
    const btn = document.createElement("button");
    btn.innerHTML = "Xóa";
    btn.className = "delete-btn";
    btn.onclick = () => row.remove();

    
    row.appendChild(ten);
    row.appendChild(tc);
    row.appendChild(radioDiv);
    row.appendChild(cost);
    row.appendChild(btn);

    return row;
}


function themDong(){
    const row = taoDong();
    document.getElementById("list").appendChild(row);
}


function capNhatHocPhi(row){

    const inputs = row.getElementsByTagName("input");

    const tc = parseInt(inputs[1].value) || 0;

    let loai = "coso";
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].type === "radio" && inputs[i].checked){
            loai = inputs[i].value;
        }
    }

    let tien = 0;

    if(loai === "coso"){
        tien = tc * giaCoSo;
    }else{
        tien = tc * giaChuyenNganh;
    }

    row.querySelector(".cost").innerHTML =
        "Học phí: " + tien.toLocaleString() + " VND";
}


function tinhHocPhi(){

    const rows = document.getElementsByClassName("row");
    let tong = 0;

    for(let i=0;i<rows.length;i++){
        const text = rows[i].querySelector(".cost").innerText;
        const so = text.replace(/\D/g,''); 
        tong += parseInt(so) || 0;
    }

    document.getElementById("ketqua").innerHTML =
        "Tổng học phí: " + tong.toLocaleString() + " VND";
}


window.onload = function(){
    themDong();
};

