function validate(event){
    console.log("test")
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var number = document.getElementById("phonenumber").value
    var nationality = document.getElementById("nationality").value
    var checkbox = document.getElementById("checkbox").checked
    event.preventDefault(); // biar tidak auto refresh
    if(username == "")
    {
        alert("Name cannot be empty")
    }
    else if (!email.endsWith("@gmail.com"))
    {
        alert("Email used must end with @gmail.com")
    }
    else if(number.charAt(0) != 0 || number == "")
    {
        alert("Phone Number must start with 0")
    }
    else if(nationality == "empty")
    {
        alert("Country cannot be empty")
    }
    else if (!checkbox)
    {
        alert("Terms and condition must be agreed too")
    }
    else
    {
        alert("Successfull")
    }
}
