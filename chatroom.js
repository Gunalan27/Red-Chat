// create a db class

class chatroom
{
    constructor(username,room)
    {
        this.username=username;
        this.room=room;
        this.chats=db.collection('chat');
        this.unsub;
    }
    
    async addChat(message)
    {
        const now =new Date();
        const data={
            message,
            created_on:firebase.firestore.Timestamp.fromDate(now),
            room:this.room,
            username:this.username
        }

        const response=await this.chats.add(data);
        return response;
    }

    getChats(callback){
         this.unsub=this.chats
        .where('room','==',this.room)
        .orderBy('created_on')
        .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added')
                {
                    callback(change.doc.data());
                }
            })
        })
    }

    updateName(name){
        this.username=name;
        localStorage.setItem('username',this.username);
    }
    updateRoom(room)
    {
        this.room=room;
        console.log('room changed');
        if(this.unsub())
        this.unsub();
    }
}


