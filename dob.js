function verifyAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var currentDate = new Date();
    var year = currentDate.getFullYear() - birthdate.getFullYear();
    var month=currentDate.getMonth()-birthdate.getMonth();
    var date=currentDate.getDate() - birthdate.getDate();
    if(year<0 || month<0 || date<0){
        alert('Invild!  please enter valid date.');
        return;
    }
    if(year<=0 && month <=0){
        document.getElementById('result').innerHTML='Your are '+date+' days old.';
    }
    else{
        if(year<=0){
            document.getElementById('result').innerHTML='Your are '+date+' days '+month+' month old.'; 
        }
        else{
            document.getElementById('result').innerHTML='Your are '+date+' days '+month+' month '+year+' year old.';
        }
    }
    


    // Check if the user is at least 18 years old
    // if (age >= 18) {
    //     document.getElementById('result').innerText = 'Age Verified! You are eligible.';
    // } else {
    //     document.getElementById('result').innerText = 'Sorry, you are not eligible. You must be at least 18 years old.';
    // }
}


