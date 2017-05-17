var Storage = {
    get(name){
        return JSON.parse(window.localStorage.getItem(name))
    },
    set(name,data){
        window.localStorage.setItem(name,JSON.stringify(data))
    },
    save(name,item){
        var data = this.get(name);
        data.push(item);
        this.set(name,data)
    },
    delet(name,id){
        console.log(this)
        var data = this.get(name);
        var index = 0;
        data.forEach((e,i)=> {
            if(e.id == id){
                console.log(i)
                index = i;
            }
        });
        
        data.splice(index,1);
        console.log(data)
        this.set(name,data)
    }
}

export default Storage;