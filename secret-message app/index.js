const {hash}=window.location;
console.log(atob(hash.replace('#', '')));

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