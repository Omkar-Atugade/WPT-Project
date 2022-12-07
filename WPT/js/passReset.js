function val(){

    var pass1 = document.getElementById('passid').value;
    var pass2 = document.getElementById('confirmpassid').value;

    if(pass1 == ""){

        alert('enter the password.');
        document.getElementById('passid').style.border="solid red 2px";
        return false;
    }

    if(pass1.length < 8){

        alert('minimum 8 characters required.');
        document.getElementById('passid').style.border="solid red 2px";
        return false;
    }

    if(pass2 == "" || pass1 != pass2){

        alert('password mismstch.');
        document.getElementById('passid').style.border="solid red 2px";
        return false;
    }

    else{

        alert('password reset successfully.');
        return true;
    }

}