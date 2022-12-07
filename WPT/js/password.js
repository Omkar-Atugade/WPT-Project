function val(){

    var email = document.getElementById('passid').value;

    if(email == ""){

        alert('enter email address.')
        document.getElementById('passid').style.border = "solid red 2px";
        return false;
    }
    else{

        alert('email send successfully.');
        return true;
    }
}
