//要素を取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//ドラッグのトリガー
fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);

//emptyを取得
for(const empty of empties){
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);
}

//関数
function dragStart(){
    console.log("start");  
    fill.className += " hold";
    setTimeout(()=>{
        fill.className = "invisible";
    },0);
};

function dragEnd(){
    console.log("end");  
    fill.className = "fill";
};

function dragOver(e){
    e.preventDefault();
    console.log("dragOver");  
};

function dragEnter(){
    console.log("dragEnter"); 
    this.className += ' hovered';
};

function dragLeave(){
    console.log("dragLeave"); 
    this.className = "empty";
};

function dragDrop(){
    console.log("dragDrop");  
    this.className = "empty";
    this.appendChild(fill);
};