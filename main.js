const btn = document.getElementById("btn");
const container=document.getElementById('container');

btn.addEventListener("click", () => {
    creatNotification();
});

function creatNotification(){
const notif=document.createElement('div');
notif.classList.add('toast');
notif.innerText='This is Notification';
container.appendChild(notif);
setTimeout(()=>{
    notif.remove();
},3000);
}