const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    console.log('button pressed');
    e.preventDefault(); //prevents  form from submiting.
    statusTxt.style.color = "#0d6efd";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creates a new xml object
    xhr.open("POST", "message.php", true); // sending post request to message.php file
    xhr.onload = () => { // once ajax loads
        if (xhr.readyState == 4 && xhr.status == 200) { //if ajax response status is 200 & ready status is 4 means there is no error
            let response = xhr.response; // storing ajax response variable 
            //if response is an error like enter valid email address then we'll change the status color to red else, reset the form
            if (response.indexOf("enter a valid email adddress") != -1 || response.indexOf("sorry failed to send your message!")) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000); //hide the status after 3secs if the message is sent
            }
            statusTxt.innerText = response;
        }

    }
    let formData = new FormData(form); // creating new formData object. This object is used to send form data
    xhr.send(formData); //sending form data.
}