//letters in english
var letters = ['A','B','C','D','E','F','G','H',
'I','J','K','L','M','N','O','P','Q','R','S'
,'T','U','V','W','X','Y','Z'];

//paths of array
var paths = ['aaaa.jpg','bbbbbbbb.jpg','ccccc.jpg','dddddd.jpg','eeeeeee.jpg',
'fffffffff.jpg','ggggg.jpg','hhhhh.jpg','iiiiii.jpg','jjjjjjjj.jpg',
'kkkkkk.png','lllllllll.jpg','mmmmmm.jpg','nnnnnnnnn.jpg','ooooo.jpg',
'pppppp.jpg','qqqqqq.jpg','rrrrr.png','ssssss.jpg','ttttttttttt.jpg',
'uuuuu.jpg','vvvv.png','wwww.jpg','xxxxx.jpg','yyyyy.png','zzzzzz.png'];

//Element in the Body

var inp = document.getElementById("nums");
var first_div = document.getElementById("div1");
var second_div = document.getElementById("div2");
var gene = document.getElementById("Gene");

//function that generate random numbers

function rand()
{
    return (Math.floor(Math.random() * (25-0+1)));
}
var events = [];
var NumsOfLetters;
var btns;
var imgs = [];
function ev(type,target, d = new Date())
{
    this.type = type;
    this.target = target;
    this.date = d;
}
window.onload = function(e){
    if(localStorage.getItem("load") !== null){
        var c = JSON.parse(localStorage.getItem("load"));
        c.load.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
        console.log(c);
        var str = JSON.stringify(c);
        localStorage.setItem("load",str);
        console.log(str);
        if(localStorage.getItem("load")!==null){
            var $load =(localStorage.getItem("load"));
            $load = JSON.parse($load);
            for(var i=0;i<$load.load.length;i++){
                $events.push($load.load[i]);
            }
        }
        }
    else
    {
        var z ={
            'load' : []
        }
        z.load.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
        var str = JSON.stringify(z);
        localStorage.setItem('load',str);
        if(localStorage.getItem("load")!==null){
            var $load =(localStorage.getItem("load"));
            $load = JSON.parse($load);
            for(var i=0;i<$load.load.length;i++){
                $events.push($load.load[i]);
            }
        }
    }
}

var $events = [];
gene.addEventListener("click",function(e){
    if(localStorage.getItem("char") !== null){
        var c = JSON.parse(localStorage.getItem("char"));
        c.char.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString())); 
        console.log(c);
        var str = JSON.stringify(c);
        localStorage.setItem('char',str);
        console.log(str);
        if(localStorage.getItem("char")!==null){
            var $chars =(localStorage.getItem("char"));
            $chars = JSON.parse($chars);
            for(var i=0;i<$chars.char.length;i++){
                $events.push($chars.char[i]);
            }
        }
    }else{
        var t ={
            'char' : []
        }
        t.char.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
        var str = JSON.stringify(t);
        localStorage.setItem("char",str);
        console.log(str);
        if(localStorage.getItem("char")!==null){
            var $chars =(localStorage.getItem("char"));
            $chars = JSON.parse($chars);
            for(var i=0;i<$chars.char.length;i++){
                $events.push($chars.char[i]);
            }
        }
    }
    first_div.innerHTML = "";
    NumsOfLetters = parseInt(inp.value);
    if(NumsOfLetters>26 || NumsOfLetters<1)
    {
        alert("Enter Number Between 1 and 26");
        window.location.reload();
    }
    for(var i=0;i<NumsOfLetters;i++)
    {
        var x = rand();
        imgs[i] = paths[x];
        var new_btn = document.createElement("button");
        var text_btn = document.createTextNode(letters[x]);
        first_div.appendChild(new_btn);
        new_btn.appendChild(text_btn);
        new_btn.setAttribute("class","btns");
        new_btn.value = paths[x];
        new_btn.addEventListener("click",function(e){
            second_div.innerHTML = "";
            var xy = document.createElement("img");
            second_div.appendChild(xy);
            xy.setAttribute("src",e.target.value );
            if(localStorage.getItem("char") !== null){
                var c = JSON.parse(localStorage.getItem("char"));
                c.char.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
                console.log(c);
                var str = JSON.stringify(c);
                localStorage.setItem("char",str);
                console.log(str);
                if(localStorage.getItem("char")!==null){
                    var $chars =(localStorage.getItem("char"));
                    $chars = JSON.parse($chars);
                    for(var i=0;i<$chars.char.length;i++){
                        $events.push($chars.char[i]);
                    }
                }
                
            }else{
                var z ={
                    'char' : []
                }
                z.char.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
                var str = JSON.stringify(z);
                localStorage.setItem('char',str);
                console.log(str);
                if(localStorage.getItem("char")!==null){
                    var $chars =(localStorage.getItem("char"));
                    $chars = JSON.parse($chars);
                    for(var i=0;i<$chars.char.length;i++){
                        $events.push($chars.char[i]);
                    }
                }
            }
            
            
        });
        
    }
    window.onunload = function(e){
        if(localStorage.getItem("unload") !== null){
            var c = JSON.parse(localStorage.getItem("Load"));
            c.unload.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
            console.log(c);
            var str = JSON.stringify(c);
            localStorage.setItem("unload",str);
            console.log(str);
            if(localStorage.getItem("unload")!==null){
                var $unloads =(localStorage.getItem("unload"));
                $unloads = JSON.parse($unloads);
                for(var i=0;i<$unloads.unload.length;i++){
                    $events.push($unloads.unload[i]);
                }
            }
        }else{
            var z ={
                'unload' : []
            }
            z.unload.push(new ev(e.type,e.target.textContent,new Date().toLocaleDateString()));
            var str = JSON.stringify(z);
            localStorage.setItem('unload',str);
            console.log(str);
            if(localStorage.getItem("unload")!==null){
                var $unloads =(localStorage.getItem("unload"));
                $unloads = JSON.parse($unloads);
                for(var i=0;i<$unloads.unload.length;i++){
                    $events.push($unloads.unload[i]);
                }
            }
        }
    }

});
window.setInterval(function(){  
    $.ajax({
        "type": "POST",
        "url": "myphp.php",
        "data": {"event":JSON.stringify($events)},
        "success": function (response) {
                console.log(response);
        },
    });
    localStorage.clear();
},5000);
var new_Events = [];
var local = document.getElementById("locastorage");
local.onclick = function(){
    $.ajax({
        "type":"GET",
        "url":"get.php",
        "data":{"event":""},
        "success":function(data)
        {
            
            new_Events = JSON.parse(data);
            for(var i=0;i<new_Events.length;i++)
               console.log(new_Events[i]);
        }
    });
}