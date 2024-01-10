function nameValidator(){
    const nameInput = document.getElementById("name");
    const letters = /^[A-Za-z\s]+$/;

    if(!letters.test(nameInput.value)){
        alert("Name must only include letters");
        return false;
    }
    return true;
}

function phoneValidator(){
    const phoneInput = document.getElementById("phone");
    const phoneForm = /^\(\d{3}\) \d{3}-\d{4}$/;

    if(!phoneForm.test(phoneInput.value)){
        alert("Phone number must be in form (416) 555-5555");
        return false;
    }
    return true;

}

function phoneConverter(phone){
    const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  
    const formattedPhoneNumber = phone.replace(regex, '$1-$2-$3');
    
    return formattedPhoneNumber;
}


function formValidator(){
   
    if(nameValidator() && phoneValidator()){
        const nameDisplay = document.getElementById("name").value;
        const addressDisplay = document.getElementById("address").value;
        const phoneDisplay = document.getElementById("phone").value;
        const display = document.getElementById("display");

        let displayHTML= `<p>` + nameDisplay + `</p>` + `<p>` + addressDisplay + `</p>` + `<p>` + phoneConverter(phoneDisplay) + `</p>`; 
   
        display.innerHTML = displayHTML;
        display.setAttribute("style", "width: 200px; border: solid #e288a6 4px; text-align: center;") 
    }
}

function countLetter(){
    const letter = document.getElementById("letterCount");
    const textArea = document.getElementById("text").value;
    let count = 0 ;

    for (const char of textArea) {
        const nums = /[A-Za-z]/;
        if(nums.test(char)){
            count++;
        }
    }

    letter.innerHTML= count;
    
}


function countChars(){
    const chars = document.getElementById("charCount");
    const textArea = document.getElementById("text").value;

    chars.innerHTML= textArea.length;
}


function count(){
    countChars(); 
    countLetter();
}

let urls = ["https://www.youtube.com/", "http://www.pnwx.com/", "https://www.jellycat.com/us/"];

function createBookmark(){
    const bookmarksList = document.getElementById("bookmarks");

    for (let url of urls) {
        let icon, style;
        
        if (url.startsWith("https://")) {
            icon = "closed.png";
            style = "width: auto; height: 1em;"
        } else if (url.startsWith("http://")) {
            icon = "open.png";
            style = "width: auto; height: 1em;"
        } else {
            alert("Not a valid URL: " + url);
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `<li><img src="assets/${icon}" style="${style}"> <a href=${url}>${url}</li>`;
        bookmarksList.appendChild(listItem);
    }
}
createBookmark();




