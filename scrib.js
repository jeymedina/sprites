window.onload=function()
{
alert("ok");

  var Pasonum=["Camina-1","Camina-2","Camina-3","bCamina-4","Camina-5","Camina-6"];
  var Contador=1;


  setInterval(function() //movimineto de imagen
  {
    
      aux_div("muneco").setAttribute("class","caminar " + Pasonum[Contador - 1]);//
      Contador++;
      if(Contador>=6)
      {
        Contador=1;
      }

  }, 100);//velocidad del imagen


  function aux_div(div)//funcion de retorno
  {
     return document.getElementById(div);
  }
}
