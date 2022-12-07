function val(){

    var mobno = document.getElementById('userid').value;
    var pass = document.getElementById('passid').value;

    if(mobno == ""){

        alert('enter mobile no / email.');
        document.getElementById('userid').style.border ="solid red 2px";
        return false;
    }

    if(pass == ""){

        alert('enter password');
        document.getElementById('passid').style.border="solid red 2px";
        return false;
    }

    else{

        return true;
    }
}