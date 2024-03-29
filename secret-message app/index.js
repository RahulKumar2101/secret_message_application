const {hash}=window.location;
const message=atob(hash.replace('#', ''));
if(message){
    document.querySelector("#messageForm").classList.add('hide');
    document.querySelector("#messageShow").classList.remove('hide');

    document.querySelector('h1').innerHTML=message;
}

document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();

    document.querySelector("#messageForm").classList.add('hide');
    document.querySelector("#linkForm   ").classList.remove('hide');

    const input= document.querySelector("#messageInput");
    const encrypted = btoa(input.value);
    
    const linkInput=document.querySelector("#linkInput");
    linkInput.value=`${window.location}#${encrypted}`;
    linkInput.select();
});