//რეგისტრაციის ფორმა 

function check(){
    var names = document.getElementById("name");
    var email = document.getElementById("email");
    var pasword = document.getElementById("pasword");

    var error_1 =  document.getElementById("error-1");
    var error_2 =  document.getElementById("error-2");
    var error_3 =  document.getElementById("error-3");

    if(names.value == "" || names.length == 0 ){
        error_1.innerHTML = "შეიყვანეთ სახელი";
        error_1.style.color = "red"
        names.style.border = "2px solid red";
    }else if(email.value == "" || email.length == 0 ){
        error_1.innerHTML = "";
        names.style.border = "1px solid #00000010"

        error_2.innerHTML = "შეიყვანეთ იმეილი";
        error_2.style.color = "red"
        email.style.border = "2px solid red";

    } else if(pasword.value == "" || pasword.length == 0){
        error_1.innerHTML = "";
        names.style.border = "1px solid #00000010"

        error_2.innerHTML = "";
        email.style.border = "1px solid #00000010";

        error_3.innerHTML = "შეიყვანეთ პაროლი";
        error_3.style.color = "red"
        pasword.style.border = "2px solid red";
    } else{
        error_3.innerHTML = "";
        pasword.style.border = "1px solid #00000010";
        error_2.innerHTML = "";
        email.style.border = "1px solid #00000010";
        error_1.innerHTML = "";
        names.style.border = "1px solid #00000010"

        document.getElementById("success").style.display = " flex"
        
    }
}
