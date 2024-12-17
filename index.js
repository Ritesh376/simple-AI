const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";

const speechButton = document.querySelector(".speechbutton");

function speak(text) {
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
}

function startListening() {
    speak("Listening for your command...");
    speechButton.classList.add("listening"); 
    recognition.start();
}

recognition.onresult = (event) => {
    speechButton.classList.remove("listening"); 
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Command: ", command);
    handlecommand(command);
};

recognition.onend = () => {
    speechButton.classList.remove("listening"); 
};

function handlecommand(command) {
    if (command.includes("show me a quote")) {
        speak("The greatest glory in living lies not in never falling, but in rising every time we fall.");
    } else if (command.includes("tell me a joke")) {
        speak("Why did the chicken cross the road? To get to the other side!");
    } else if (command.includes("what is your name")) {
        speak("My name is Simple AI.");
    } else if (command.includes("how are you")) {
        speak("I am doing well, thank you for asking.");
    } else if (command.includes("open youtube")) {
        window.open("https://www.youtube.com/", "_blank");
    } else if (command.includes("open facebook")) {
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (command.includes("who is your developer")) { 
        speak("I was developed by ritesh, he has exceptional skills in web development.");
    }
    
    else if (command.includes("open google")) {
        window.open("https://www.google.com/", "_blank");
    }
    else if (command.includes("how can i contact the developer")) {
        speak("You can contact my developer at ritesh.54757@gmail.com");
    }
    else if (command.includes("open github")) {
        window.open("https://github.com/", "_blank");
    }
    else if (command.includes("tell me about yourself")) {
        speak("I am a simple AI, I can do simple things like navigating to a  websites, and even telling jokes.");
    }   
    
    else {
        speak("I am sorry, I am still in development. Please try again later.");
    }
setTimeout(() => {
    speak("Thank you for using Simple AI.");
}, 7000);
}
