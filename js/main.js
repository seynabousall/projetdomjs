//augmentation quantite 1
var btnplus = document.querySelector('.qty-plus');
var ctnplus=document.querySelector('.qty');
btnplus.addEventListener('click', increase);

function increase () {
   ctnplus.value = parseInt( ctnplus.value)+1;
   prixtotal();
   
}

//diminution quantite 1
var btnminus= document.querySelector('.qty-minus');

btnminus.addEventListener('click', decrease);

function decrease () {
    if (ctnplus.value > 0) {
        
    
    ctnplus.value = parseInt(ctnplus.value) -1;
    prixtotal();
    

   }
}
//prix sous total quantite 1

function prixtotal() {
    
    
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.prixtotal ').innerText= subt +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
}
//supprimer quantite1
  var btnremove=document.querySelector('.co');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.prixtotal ').innerText= subt +'fr';
   document.querySelector('#total').innerHTML=addition +'fr cfa'
  var premier=document.querySelector('.premier');
  btnremove.addEventListener('click',remove)
  function remove() {
    premier.remove()
    subt==0;
    document.querySelector('#total').innerHTML=addition -subt +'fr cfa'
  }
  //bouton jaime quantite 1
  var btncoeur=document.querySelector('.coeur');
  btncoeur.addEventListener('click',add)
  function add() {
    btncoeur.style.color='blue'
    }
    
    
//augmentation quantite 2
var naplus = document.querySelector('.qty1-plus');


 naplus.addEventListener('click', m2increase);

function m2increase () {
    document.querySelector('.cqty').value = parseInt( document.querySelector('.cqty').value)+1;
    primetot();
    
} 
//diminution quantite 2
var maminus=document.querySelector('.maminus');
var cqty=document.querySelector('.cqty');
maminus.addEventListener('click',mane)
  function mane() {
      if (document.querySelector('.cqty').value > 0) { 
        document.querySelector('.cqty').value = parseInt( document.querySelector('.cqty').value)-1;
        primetot();
        
}
    
}
//prix sous total quantite 2
  function primetot() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.primetot ').innerText= subto +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'

  }
  //supprimer quantite2
  var btnaremove=document.querySelector('.come');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.primetot ').innerText= subto +'fr';
  
  var primier=document.querySelector('.primier');
  btnaremove.addEventListener('click',aremove)
  function aremove() {
    primier.remove()
    document.querySelector('#total').innerHTML=addition-subto+'fr cfa'
  }
  //bouton jaime quantite 2
  var btnceur=document.querySelector('.ceur');
  btnceur.addEventListener('click',dadd)
  function dadd() {
    btnceur.style.color='blue'
}
   
//augmentation quantite 3
var maplus = document.querySelector('.bqty-plus');


 maplus.addEventListener('click', m3increase);

function m3increase () {
    document.querySelector('.bqty').value = parseInt( document.querySelector('.bqty').value)+1;
    primieuto();
    
}
//diminution quantite 3
var aminus=document.querySelector('.bqty-minus');
var bqty=document.querySelector('.bqty');
 aminus.addEventListener('click',amane)
  function amane() {
    if (document.querySelector('.bqty').value > 0) { 
        document.querySelector('.bqty').value = parseInt( document.querySelector('.bqty').value)-1;
        primieuto();
        
}
    
}
//prix sous total quantite 3
  function primieuto() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.primieuto ').innerText= subtol +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite3
  var ctnaremove=document.querySelector('.col');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.primieuto ').innerText= subtol +'fr';
  
  var pran=document.querySelector('.pran');
  ctnaremove.addEventListener('click',caremove)
  function caremove() {
    pran.remove()
    document.querySelector('#total').innerHTML=addition-subtol +'fr cfa'
  }
  //bouton jaime quantite 3
  var btncleur=document.querySelector('.cleur');
  btncleur.addEventListener('click',edd)
  function edd() {
    btncleur.style.color='blue'
}
   
//augmentation quantite 4
var daplus = document.querySelector('.dqty-plus');


 daplus.addEventListener('click', m4increase);

function m4increase () {
    document.querySelector('.dqty').value = parseInt( document.querySelector('.dqty').value)+1;
    pridto();
    
}
//diminution quantite 4
var daminus=document.querySelector('.dqty-minus');
var dqty=document.querySelector('.dqty');
daminus.addEventListener('click',damane)
  function damane() {
    if (document.querySelector('.dqty').value > 0) { 
        document.querySelector('.dqty').value = parseInt( document.querySelector('.dqty').value)-1;
        pridto();
      
}
    
}
//prix sous total quantite 4
  function pridto() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.pridto ').innerText= subtul +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
    

  }
  //supprimer quantite4
  var daaremove=document.querySelector('.do');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.pridto ').innerText= subtul +'fr';
  
  var dim=document.querySelector('.dim');
  daaremove.addEventListener('click',dremove)
  function dremove() {
    dim.remove()

    document.querySelector('#total').innerHTML=addition-subtul +'fr cfa'
  }
  //bouton jaime quantite 4
  var dleur=document.querySelector('.dleur');
  dleur.addEventListener('click',dedd)
  function dedd() {
    dleur.style.color='blue'
}
//augmentation quantite 5
var cinplus = document.querySelector('.qqty-plus');


 cinplus.addEventListener('click', m5increase);

function m5increase () {
    document.querySelector('.qqty').value = parseInt( document.querySelector('.qqty').value)+1;
    cinqprixtotal();
    
}
//diminution quantite 5
var qaminus=document.querySelector('.qqty-minus');
var qqty=document.querySelector('.qqty');
qaminus.addEventListener('click',qamane)
  function qamane() {
    if (document.querySelector('.qqty').value > 0) { 
        document.querySelector('.qqty').value = parseInt( document.querySelector('.qqty').value)-1;
        cinqprixtotal();
        
}
    
}
//prix sous total quantite 5
  function cinqprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.cinqprixtotal ').innerText= cinqsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite5
  var cinqremove=document.querySelector('.cinq');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.cinqprixtotal ').innerText= cinqsub +'fr';
  
  var cinqtr=document.querySelector('.cinqtr');
  cinqremove.addEventListener('click',ciremove)
  function ciremove() {
    cinqtr.remove()
    document.querySelector('#total').innerHTML=addition -cinqsub +'fr cfa'
  }
  //bouton jaime quantite 5
  var cinqleur=document.querySelector('.cinqleur');
  cinqleur.addEventListener('click',cinqdedd)
  function cinqdedd() {
    cinqleur.style.color='blue'
}

//augmentation quantite 6
var sinplus = document.querySelector('.sqty-plus');


 sinplus.addEventListener('click', m6increase);

function m6increase () {
    document.querySelector('.sqty').value = parseInt( document.querySelector('.sqty').value)+1;
    sixprixtotal();
    
}
//diminution quantite 6
var saminus=document.querySelector('.sqty-minus');
var sqty=document.querySelector('.sqty');
saminus.addEventListener('click',samane)
  function samane() {
    if ( document.querySelector('.sqty').value > 0) { 
        document.querySelector('.sqty').value = parseInt( document.querySelector('.sqty').value)-1;
        sixprixtotal();
        
}
    
}
//prix sous total quantite 6
  function sixprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.sixprixtotal ').innerText= sixsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite6
  var sixremove=document.querySelector('.six');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.sixprixtotal ').innerText= sixsub +'fr';
  
  var sixtr=document.querySelector('.sixtr');
  sixremove.addEventListener('click',siremove)
  function siremove() {
    sixtr.remove()
    document.querySelector('#total').innerHTML=addition-sixsub +'fr cfa'
  }
  //bouton jaime quantite 6
  var sixleur=document.querySelector('.sixleur');
  sixleur.addEventListener('click',sixdedd)
  function sixdedd() {
    sixleur.style.color='blue'
}
//augmentation quantite 7
var tinplus = document.querySelector('.tqty-plus');


 tinplus.addEventListener('click', m7increase);

function m7increase () {
    document.querySelector('.tqty').value = parseInt( document.querySelector('.tqty').value)+1;
    septprixtotal();
    
}
//diminution quantite 7
var taminus=document.querySelector('.tqty-minus');
var tqty=document.querySelector('.tqty');
taminus.addEventListener('click',tamane)
  function tamane() {
    if (document.querySelector('.tqty').value > 0) { 
        document.querySelector('.tqty').value = parseInt( document.querySelector('.tqty').value)-1;
        septprixtotal();
        
}
    
}
//prix sous total quantite 7
  function septprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.septprixtotal ').innerText= septsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite7
  var septremove=document.querySelector('.sept');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.septprixtotal ').innerText= septsub +'fr';
   
  var septtr=document.querySelector('.septtr');

  septremove.addEventListener('click',tiremove)
  function tiremove() {
    septtr.remove()
    document.querySelector('#total').innerHTML=addition-septsub+'fr cfa'
  }
  //bouton jaime quantite 7
  var septleur=document.querySelector('.septleur');
  septleur.addEventListener('click',septdedd)
  function septdedd() {
    septleur.style.color='blue'
}
//augmentation quantite 8
var hinplus = document.querySelector('.hqty-plus');


 hinplus.addEventListener('click', m8increase);

function m8increase () {
    document.querySelector('.hqty').value = parseInt( document.querySelector('.hqty').value)+1;
    huitprixtotal();
    
}
//diminution quantite 8
var haminus=document.querySelector('.hqty-minus');
var hqty=document.querySelector('.hqty');
haminus.addEventListener('click',hamane)
  function hamane() {
    if (document.querySelector('.hqty').value > 0) { 
        document.querySelector('.hqty').value = parseInt( document.querySelector('.hqty').value)-1;
        huitprixtotal();
        
}
    
}
//prix sous total quantite 8
  function huitprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.huitprixtotal ').innerText= huitsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite8
  var huitremove=document.querySelector('.huit');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.huitprixtotal ').innerText= huitsub +'fr';
   document.querySelector('#total').innerHTML=addition +'fr cfa'
  var huittr=document.querySelector('.huittr');
  huitremove.addEventListener('click',hiremove)
  function hiremove() {
    huittr.remove()
    document.querySelector('#total').innerHTML=addition -huitsub+'fr cfa'
  }
  //bouton jaime quantite 8
  var huitleur=document.querySelector('.huitleur');
  huitleur.addEventListener('click',huitdedd)
  function huitdedd() {
    huitleur.style.color='blue'
}
//augmentation quantite 9
var neinplus = document.querySelector('.neqty-plus');


 neinplus.addEventListener('click', m9increase);

function m9increase () {
    document.querySelector('.neqty').value = parseInt( document.querySelector('.neqty').value)+1;
    neufprixtotal();
    
}
//diminution quantite 9
var neaminus=document.querySelector('.neqty-minus');
var neqty=document.querySelector('.neqty');
neaminus.addEventListener('click',neamane)
  function neamane() {
    if ( document.querySelector('.neqty').value > 0) { 
        document.querySelector('.neqty').value = parseInt( document.querySelector('.neqty').value)-1;
        neufprixtotal();
        
}
    
}
//prix sous total quantite 9
  function neufprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.neufprixtotal ').innerText= neufsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     

  }
  //supprimer quantite9
  var neufremove=document.querySelector('.neuf');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.neufprixtotal ').innerText= neufsub +'fr';
   document.querySelector('#total').innerHTML=addition +'fr cfa'
  var neuftr=document.querySelector('.neuftr');
  neufremove.addEventListener('click',neremove)
  function neremove() {
    neuftr.remove()
    document.querySelector('#total').innerHTML=addition -neufsub+'fr cfa'
      
      
      
  }  
  //bouton jaime quantite 9
  var neufleur=document.querySelector('.neufleur');
  neufleur.addEventListener('click',neufdedd)
  function neufdedd() {
    neufleur.style.color='blue'
}
//augmentation quantite 10
var diinplus = document.querySelector('.diqty-plus');


 diinplus.addEventListener('click', m10increase);

function m10increase () {
    document.querySelector('.diqty').value = parseInt( document.querySelector('.diqty').value)+1;
    dixprixtotal();
    
}
//diminution quantite 10
var diaminus=document.querySelector('.diqty-minus');
var diqty=document.querySelector('.diqty');
diaminus.addEventListener('click',diamane)
  function diamane() {
    if (document.querySelector('.diqty').value > 0) { 
        document.querySelector('.diqty').value = parseInt( document.querySelector('.diqty').value)-1;
        dixprixtotal();
        
}
    
}
//prix sous total quantite 10
  function dixprixtotal() {
    var prix= parseInt(document.querySelector('.prix').innerText);
    var qty=parseInt(document.querySelector('.qty').value);
     var subt=prix*qty;
     var prime= parseInt(document.querySelector('.prime').innerText);
    var cqty=parseInt(document.querySelector('.cqty').value);
     var subto=prime*cqty;
     var primieu= parseInt(document.querySelector('.primieu').innerText);
    var bqty=parseInt(document.querySelector('.bqty').value);
     var subtol=primieu*bqty;
     var prid= parseInt(document.querySelector('.prid').innerText);
    var dqty=parseInt(document.querySelector('.dqty').value);
     var subtul=prid*dqty;
     var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
    var qqty=parseInt(document.querySelector('.qqty').value);
     var cinqsub=cinqprix*qqty;
     var sixprix= parseInt(document.querySelector('.sixprix').innerText);
    var sqty=parseInt(document.querySelector('.sqty').value);
     var sixsub=sixprix*sqty;
     var septprix= parseInt(document.querySelector('.septprix').innerText);
    var tqty=parseInt(document.querySelector('.tqty').value);
     var septsub=septprix*tqty;
     var huitprix= parseInt(document.querySelector('.huitprix').innerText);
     var hqty=parseInt(document.querySelector('.hqty').value);
      var huitsub=huitprix*hqty;
      var neufprix= parseInt(document.querySelector('.neufprix').innerText);
      var neqty=parseInt(document.querySelector('.neqty').value);
       var neufsub=neufprix*neqty;
       var dixprix= parseInt(document.querySelector('.dixprix').innerText);
    var diqty=parseInt(document.querySelector('.diqty').value);
     var dixsub=dixprix*diqty;
     var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
     document.querySelector('.dixprixtotal ').innerText= dixsub +'fr';
     document.querySelector('#total').innerHTML=addition +'fr cfa'
     
     

  }
  //supprimer quantite10
  var dixremove=document.querySelector('.dix');
  var prix= parseInt(document.querySelector('.prix').innerText);
  var qty=parseInt(document.querySelector('.qty').value);
   var subt=prix*qty;
   var prime= parseInt(document.querySelector('.prime').innerText);
  var cqty=parseInt(document.querySelector('.cqty').value);
   var subto=prime*cqty;
   var primieu= parseInt(document.querySelector('.primieu').innerText);
  var bqty=parseInt(document.querySelector('.bqty').value);
   var subtol=primieu*bqty;
   var prid= parseInt(document.querySelector('.prid').innerText);
  var dqty=parseInt(document.querySelector('.dqty').value);
   var subtul=prid*dqty;
   var cinqprix= parseInt(document.querySelector('.cinqprix').innerText);
  var qqty=parseInt(document.querySelector('.qqty').value);
   var cinqsub=cinqprix*qqty;
   var sixprix= parseInt(document.querySelector('.sixprix').innerText);
  var sqty=parseInt(document.querySelector('.sqty').value);
   var sixsub=sixprix*sqty;
   var septprix= parseInt(document.querySelector('.septprix').innerText);
  var tqty=parseInt(document.querySelector('.tqty').value);
   var septsub=septprix*tqty;
   var huitprix= parseInt(document.querySelector('.huitprix').innerText);
   var hqty=parseInt(document.querySelector('.hqty').value);
    var huitsub=huitprix*hqty;
    var neufprix= parseInt(document.querySelector('.neufprix').innerText);
    var neqty=parseInt(document.querySelector('.neqty').value);
     var neufsub=neufprix*neqty;
     var dixprix= parseInt(document.querySelector('.dixprix').innerText);
  var diqty=parseInt(document.querySelector('.diqty').value);
   var dixsub=dixprix*diqty;
   var addition=subt+subto+subtol+subtul+cinqsub+sixsub+septsub+huitsub+neufsub+dixsub;
   document.querySelector('.dixprixtotal ').innerText= dixsub +'fr';
  
  var dixtr=document.querySelector('.dixtr');
  dixremove.addEventListener('click',diremove)
  function diremove() {
       
    dixtr.remove()
    document.querySelector('#total').innerHTML=addition-dixsub+'fr cfa'
  }
  //bouton jaime quantite 10
  var dixleur=document.querySelector('.dixleur');
  dixleur.addEventListener('click',dixdedd)
  function dixdedd() {
    dixleur.style.color='blue'
}
   