const listDiv = document.getElementById("listDiv")
const addBtn = document.getElementById("addBtn")
const input = document.getElementById("input")
let index = 0;
addBtn.onclick = add;
function add(){
    if(input.value == "")
    return;
    index++;
    const divbox = document.createElement("div");

    const line = document.createTextNode(input.value)
    const para = document.createElement("h4");
    para.style.display = "inline";
    para.appendChild(line)
    divbox.appendChild(para)
    const removeBtn = document.createElement("button");
const btn = document.createTextNode("x")
 removeBtn.appendChild(btn)
 removeBtn.style.backgroundColor = "rgba(83, 87, 95,0.3)";
 removeBtn.style.marginLeft = "10px";
 removeBtn.style.border = "none";
 removeBtn.style.float = "right";
 divbox.style.backgroundColor = "rgba(226, 239, 239, 0.8)";
 divbox.style.borderRadius = "5px";
 divbox.style.padding = "5px 10px";
 divbox.style.margin = "2px 0px";
 
 divbox.appendChild(removeBtn);

    
    listDiv.appendChild(divbox);
    removeBtn.addEventListener("click", function() {
        divbox.remove();
    });
    input.value = "";
    
}