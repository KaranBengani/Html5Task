function validate(){
    var name = frm1.name.value;
    var email = frm1.email.value;
    var gender = frm1.r1.value;
    var skill = frm1.locations.value;
    var remarks = frm1.remarks.value;

    if( name == "" && email == ""){
        alert("enter name and email first");
        return false;
    }
    else {
        alert("Name: " + name + "\nGender: " + gender + "\nEmail: " + email + "\nCourse Required: " + skill + "\nOther Requirements: " + remarks);
        return true;
    }

    

}