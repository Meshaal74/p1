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
var NumsOfLetters;
var btns;
var imgs = [];
gene.addEventListener("click",function(e){
    if(localStorage.getItem("key_obj") !== null){
        var c = JSON.parse(localStorage.getItem("key_obj"));
        c.key.push([new Date().toLocaleString() , document.getElementById("Gene").value]);
        console.log(c);
        var str = JSON.stringify(c);
        localStorage.setItem('key_obj',str);
        console.log(str);
    }else{
        var t ={
            'first' : []
        }
        t.first.push([new Date().toLocaleString() ,  document.getElementById("Gene").value]);
        var str = JSON.stringify(t);
        localStorage.setItem("key_obj",str);
        console.log(str);
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
            if(localStorage.getItem("key_obj1") !== null){
                var c = JSON.parse(localStorage.getItem("key_obj1"));
                c.char.push([new Date().toLocaleString() , e.target.textContent]);
                console.log(c);
                var str = JSON.stringify(c);
                localStorage.setItem("key_obj1",str);
                console.log(str);
    
            }else{
                var z ={
                    'char' : []
                }
                z.char.push([new Date().toLocaleString() ,  e.target.textContent]);
                var str = JSON.stringify(z);
                localStorage.setItem('char',str);
                console.log(str);
            
            }
        });
        
    }
    
});
