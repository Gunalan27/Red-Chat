const list=document.querySelector('.chat-list')
const msgbox=document.querySelector('.getMessage');
const namebox=document.querySelector('.getName');
const update=document.querySelector('.updatemsg');
const room=document.querySelector('.room');


//room select
room.addEventListener('click',(e)=>{
    if(e.target.tagName=='BUTTON')
    {
        ui.clear();
        red.updateRoom(e.target.getAttribute('id'));
        red.getChats(chat=>ui.render(chat));
    }
    //room.reset();
});

//username in localstorage
 const username=localStorage.username?localStorage.username:'Anonymous';

//get input msg and add to list

msgbox.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg=msgbox.message.value;
    red.addChat(msg);
    msgbox.reset();
});


namebox.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nam=namebox.name.value;
    red.updateName(nam);
    update.innerHTML+=`<h6>your name has been updated to ${nam}</h6>`;
    setTimeout(()=>update.innerHTML='',2000);
    namebox.reset();
})

const ui=new chatUI(list);

const red=new chatroom(username,'general');

red.getChats((data)=>ui.render(data));