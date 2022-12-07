function val(){

    var name = document.getElementById('nameid').value.trim();
    var email = document.getElementById('emailid').value.trim();
    var mobno = document.getElementById('mobileid').value.trim();

    if(name == ""){

        alert('enter the name.');
        document.getElementById('nameid').style.border = "solid red 2px";
        return false;

    }

    if(email == ""){

        alert('enter the email.');
        document.getElementById('emailid').style.border = "solid red 2px";
        return false;

    }

    if(mobno == ""){

        alert('enter the mobile no.');
        document.getElementById('mobileid').style.border = "solid red 2px";
        return false;

    }

    else{

        document.write('Form submitted successfully');
        return true;
    }

}