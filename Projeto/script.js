function validar(){
    var email = document.getElementById('e-mail').value;
    
    var comp = /\S+@\S+\.\S/;

    if(email==''){
        alert("Preencha o e-mail!");
    }else{
        switch(comp.test(email)){
            case true:
                alert("e-mail válido!");
            break
    
            case false:
                alert("e-mail inválido!");
            break

        }
    }
   
}

