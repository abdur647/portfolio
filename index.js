
    const words = ["HTML", "CSS", "JavaScript","NodeJs", "ExpressJS"]; // Array of words to be typed
    const typingSpeed = 300; // Speed in milliseconds between each word change
    const wordPause = 500; // Pause between words

    const typingText = document.getElementById("typing-text");
    let wordIndex = 0;
    let charIndex = 0;

    function typeText() {
            if (wordIndex < words.length) {
                const word = words[wordIndex];
    if (charIndex < word.length) {
        typingText.textContent += word.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
                } else {
        setTimeout(eraseText, wordPause);
                }
            } else {
        // Restart typing effect
        wordIndex = 0;
    charIndex = 0;
    setTimeout(typeText, typingSpeed);
            }
        }

    function eraseText() {
            if (charIndex >= 0) {
                const word = words[wordIndex];
    typingText.textContent = word.substring(0, charIndex);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
            } else {
        wordIndex++;
    setTimeout(typeText, typingSpeed);
            }
        }

    typeText();

function store() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var inf = document.getElementById("inf").value;

    var cname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var cname2 = /^[a-zA-Z]$/;
    var cemail = /^[a-zA-Z]+@[g][m][a][i][l].[c][o][m]$/;

    // checking empty fields

    if (name == "") {
        alert("Please enter your name");
    }
    else if (!name.match(cname)) {
        alert("Name Only contains characters and space like Muhammad Ali");
    }
    else if (email == "") {
        alert("Please enter your email");
    }
    else if (!email.match(cemail)) {
        alert("Email not valid. Example: malik@gmail.com");
    }
    else if (country == "") {
        alert("Please select your country");
    }
    else if (inf == "") {
        alert("Please enter your information");
    }

   
   

    else {
        alert("Data valid and stored")
        document.getElementsByTagName("input")[0].value = " ";
        document.getElementsByTagName("input")[1].value = " ";
        document.getElementsByTagName("textarea")[0].value = " ";
    }

}
var image2 = ['img/sl1.jpg',
    'img/sl2.jpg',
    'img/sl3.jpg'];

var slider_content = document.getElementById("slider");

var i = image.len;
function next() {
    if (i < image.length) {
        i = i + 1;
    }
    else {
        i = 1;
    }
    document.getElementById("slider").innerHTML =
        "<img src=" + image[i - 1] + ">";

}