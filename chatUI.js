class chatUI
{
    constructor(list)
    {
        this.list=list;
    }
    render(data)
    {
        const from=dateFns.distanceInWordsToNow(
            data.created_on.toDate(),
            {addSuffix:true}
        );
        let html=
        `<li class='list-group-item'>
        <span id='name'>${data.username}</span>
        <span id='msg' class="text-center">     ${data.message}</span>
        <div class="time">${from}</div>
        </li>`
        this.list.innerHTML+=html;
    }
    clear()
    {
        this.list.innerHTML='';
    }
}