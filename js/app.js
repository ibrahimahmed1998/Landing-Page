const x = document.querySelectorAll("section");

function helpers(x)
 {
      var ul=document.getElementById("navbar__list");

      for (var i = 0; i < x.length; i++)
      {   
        text = document.createTextNode(x[i].id);
        var span = document.createElement("span");
        
        var anc = document.createElement("a");
        anc.appendChild(text);
        span.appendChild(anc);
        // <a herf=`#${seclink}` > ${secname} </a>`';

        anc.setAttribute('href',`#${x[i].id}`);
        anc.setAttribute('class','menu__link');

        var li = document.createElement("li");
        li.appendChild(span);
        li.setAttribute('class','abc');
        ul.appendChild(li);
       }
       console.log(ul);
}

helpers(x);
 


 