let count= Number(sessionStorage.getItem("count")) || 0;
document.getElementById("visitorCount").textContent = count;

function increment(){
    count++;
    update();
}
function resetCounter(){
    count=0;
    update();
}
function update(){
    document.getElementById("visitCount").textcount = 0;
    sessionStorage=setItem("count", count);
}