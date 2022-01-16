// const x = document.getElementsByClassName('div1')[0].innerHTML;
// const t = document.getElementsByClassName('sub_div')[0];
// t.innerHTML = x;
// const x = document.forms["frm1"];


// let z = document.querySelectorAll('form input[value]');
// let text = "";
// let i = 0;
// do {
//     text += x.elmentst[i].value + '<br>';
//     i++;
// } while (i < x.length);
// document.getElementById("demo").innerHTML = text;


// const x = document.forms['frm1']['fname'];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// const z = x.elements[0].name;

// const x = document.getElementsByClassName('one'); 
// const x = document.querySelector('.two');
// x.style.color = 'red';


// let amtch = true;
// console.log(!amtch);


// let i = 0;
// let v = setInterval(function(){
// console.log("k" + i++);
// },10);
// setInterval((i)=>{return i++},60);
// if(i<3){
// clearInterval(v);
// }
//drag and drop....
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrag(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}