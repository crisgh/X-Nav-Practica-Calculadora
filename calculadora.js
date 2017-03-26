var acumulador="";
$(document).ready(function(){
    $("#C").click(function(){
      reset()
    })

    $("#Del").click(function(){
      borrar()
    })

    $("#Sqrt").click(function(){
      raiz()
    })

    $("#inv").click(function(){
      inverso()
    })

    $(" .numeros button ").click(function(){
        var val = $(this).val()
        acumulador=acumulador.concat(val)
        $("#display").val(acumulador)
      });

    $(".ops button  ").click(function(){
      var dis = $("#display").val()
      var value = $(this).val()
      acumulador=acumulador+value;
      if(value=="="){
        acumulador = eval(dis)
        $("#display").val(acumulador);
      }else{
        $("#display").val(acumulador);
      }
    });

    function reset(){
        $("#display").val(" ")
        acumulador=""
    }

    function borrar(){
      acumulador = acumulador.slice(0,acumulador.length -1)
      $("#display").val(acumulador)
    }

    function raiz(){
      acumulador = Math.sqrt(acumulador)
      $("#display").val(acumulador)
    }

    function inverso(){
       acumulador=(1/acumulador)
       $("#display").val(acumulador)
    }



})
