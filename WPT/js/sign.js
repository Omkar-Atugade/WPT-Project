function val(){

    var name1 = document.getElementById('text1').value.trim();
    var name2 = document.getElementById('text2').value.trim();
    var pass1 = document.getElementById('text6').value.trim();
    var pass2 = document.getElementById('text7').value.trim();
    var mobno = document.getElementById('text5').value.trim();

    if(name1 == ""){

        alert("please enter first name");
        document.getElementById('text1').style.border = "solid red 2px";
        document.getElementById('text1l').style.visibility = "visible";
        return false;
    }
    

    if(name2 == ""){

        alert("please enter last name.");
        document.getElementById('text2').style.border = "solid red 2px";
        document.getElementById('text2l').style.visibility = "visible";
        return false;

    }

    if(mobno == ""){

        alert("please enter mobile no or email.");
        document.getElementById('text5').style.border = "solid red 2px";
        document.getElementById('text5l').style.visibility = "visible";
        return false;

    }

    if(pass1 == ""){

        alert("please enter password.");
        document.getElementById('text6').style.border = "solid red 2px";
        document.getElementById('text6l').style.visibility = "visible";
        return false;

    }

    if(pass1.length < 8){

        alert('minimum 8 characters required.');
        document.getElementById('text6').style.border = "solid red 2px";
        document.getElementById('text6l').style.visibility = "visible";
        return false;
    }

    if( pass1 != pass2 || pass2 == ""){

        alert("password mismatch.");
        document.getElementById('text7').style.border = "solid red 2px";
        document.getElementById('text7l').style.visibility = "visible";
        return false;   
    }

    else{

        return true;
    }

}