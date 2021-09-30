function foo(){
    let cc=document.getElementById("cname").value;
    console.log(cc);
    async function foo1(){
    let data=await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
    let result=await data.json();
    console.log(result);
    for(var i in result){
        var compute=result[i].Confirmed
       var div=document.createElement('div');
       div.innerHTML=`Confirmed cases:${compute}`;
       document.body.append(div);
    }
     
    }
    foo1();
}