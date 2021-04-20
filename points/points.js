exports.run = (message, user) => {
    var Howls = [
        {id:"howlingfreeze", howls: 0}
    ];
    var Howler = Howls.find(function(howler){
        if (message.length<=2){
            howler.howls ++;
        }
        return howler.id===user;
    });
    console.log(Howler);
}