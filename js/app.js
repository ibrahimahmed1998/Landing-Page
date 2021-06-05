var x = document.querySelectorAll("section");
var ul=document.getElementById("navbar__list");

function helpers(x)
 {
      for (var i = 0; i < x.length; i++)
      {   
        text = document.createTextNode(x[i].id);
        var anc = document.createElement("a");
        anc.appendChild(text);
        anc.setAttribute('href',`#${x[i].id}`);
        anc.setAttribute('name',`${x[i].id}`);
        anc.setAttribute('class','menu__link');
 
        var li = document.createElement("li");
        li.appendChild(anc);
        li.setAttribute('id','li');
        ul.appendChild(li);

       }
}

helpers(x);

document.addEventListener("click",function()
{
  var xx = event.clientX, y = event.clientY,
  elementMouseIsOver = document.elementFromPoint(xx, y);
  var in_ = elementMouseIsOver.innerHTML ; 
  
  var e = document.getElementById(in_);
 // console.log(e);


  for (let index = 0; index < x.length; index++) 
  {
    x[index].removeAttribute('class');
  }

  e.setAttribute('class', 'your-active-class');

  var element = document.getElementById('test98'); 
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
});


  
 


 


 


