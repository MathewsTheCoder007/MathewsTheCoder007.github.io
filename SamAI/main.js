const btn = document.querySelector('.talk');
        const content = document.querySelector('.content');
        //Copyright of Mathews Antony
        //
        const greetings = ["Doing good "]
        const weather = ['Weather is fine ']
        const Me = ["I'm Sam "]
        const Bored = ["Watch Some Youtube "]
        const Thnx = ["You are Welcome "]
        const protocol = ["Activating Protocol"]
        const User = ["You ,Mathews Antony"]
        const line = ["For You Always "]
        const ready = ["I am online and Ready "]
        const todolist = [" you have Nothing."]
        const you = ["You are My Owner,Mathews Antony"]
        const Tragedy = ["I get that a Lot,"]
        const hello = ["Hello "]
        const Reply = ["Here You Go  "]
        const comparison = ["You Underestimate Me "]
        const Bye = ["Bye "]
        const Diagnostics = ["Running diagnostics "]
         
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition =  new SpeechRecognition();

        recognition.onstart = function(){
            console.log('How Can I Help You ?')
        }
        recognition.onresult = function (event) {
            const current = event.resultIndex;

            const transcript = event.results[current][0].transcript;
            content.textContent = transcript;
            readOutLoud(transcript);

        };

        btn.addEventListener('click', () =>{
            recognition.start();
        });

        function readOutLoud(message){
            const speech = new SpeechSynthesisUtterance();

            speech.text = "I don't know";

            if (message.includes('how are you')) {
		const finalText =
			greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if (message.includes('how is the weather')) {
		const finalText =
			weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
		window.open('https://www.google.com/search?q=how+is+the+weather+today&rlz=1C1CHBF_enIN920IN920&oq=how+is+&aqs=chrome.2.69i64j0i457j0i433j0l4j69i60.8380j0j1&sourceid=chrome&ie=UTF-8')
	}
	if (message.includes('who are you')) {
		const finalText =
			Me[Math.floor(Math.random() * Me.length)];
		speech.text = finalText;
	}
	if (message.includes('I am bored')) {
		const finalText =
			Bored[Math.floor(Math.random() * Bored.length)];
		speech.text = finalText;
	}
	if (message.includes('thank you')) {
		const finalText =
			Thnx[Math.floor(Math.random() * Thnx.length)];
		speech.text = finalText;
	}
	if (message.includes('activate protocol')) {
		const finalText =
			protocol[Math.floor(Math.random() * protocol.length)];
		speech.text = finalText;
	}
	if (message.includes('who is your user')) {
		const finalText =
			User[Math.floor(Math.random() * User.length)];
		speech.text = finalText;
	}
	if (message.includes('are you there')) {
		const finalText =
			line[Math.floor(Math.random() * line.length)];
		speech.text = finalText;
	}
	if (message.includes('are you ready')) {
		const finalText =
			ready[Math.floor(Math.random() * ready.length)];
		speech.text = finalText;
	}
	if (message.includes('what do I have to do today')) {
		const finalText =
			todolist[Math.floor(Math.random() * todolist.length)];
		speech.text = finalText;
	}
	if (message.includes('who am I')) {
		const finalText =
			you[Math.floor(Math.random() * you.length)];
		speech.text = finalText;
	}
	if (message.includes('you are a tragedy')) {
		const finalText =
			Tragedy[Math.floor(Math.random() * Tragedy.length)];
		speech.text = finalText;
	}
	if (message.includes('open to do list')) {
		const finalText =
			todolist[Math.floor(Math.random() * todolist.length)];
		speech.text = finalText;
	}
	if (message.includes('how do you do')) {
		const finalText =
			greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if (message.includes('hello')) {
		const finalText =
			hello[Math.floor(Math.random() * hello.length)];
		speech.text = finalText;
	}
	if (message.includes('open Google')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://www.google.com/')
	}
	if (message.includes('open YouTube')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://www.youtube.com/')
	}
	if (message.includes('open Gmail')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://mail.google.com/mail/u/1/#inbox')
	}
	if (message.includes('open Hangouts')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://hangouts.google.com/?authuser=1')
	}
	if (message.includes('open Wikipedia')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://www.wikipedia.org/')
	}
	if (message.includes('are you better than Cortana')) {
		const finalText =
			comparison[Math.floor(Math.random() * comparison.length)];
		speech.text = finalText;
	}
	if (message.includes('are you better than Siri')) {
		const finalText =
			comparison[Math.floor(Math.random() * comparison.length)];
		speech.text = finalText;
	}
	if (message.includes('bye')) {
		const finalText =
			Bye[Math.floor(Math.random() * Bye.length)];
		speech.text = finalText;
	}
	if (message.includes('Run diagnostics')) {
		const finalText =
			Diagnostics[Math.floor(Math.random() * Diagnostics.length)];
		speech.text = finalText;
	}
	if (message.includes('Run Diagnostics')) {
		const finalText =
			Diagnostics[Math.floor(Math.random() * Diagnostics.length)];
		speech.text = finalText;
	}
	if (message.includes('are you better than Google assistant')) {
		const finalText =
			comparison[Math.floor(Math.random() * comparison.length)];
		speech.text = finalText;
	}
	if (message.includes('thanks')) {
		const finalText =
			Thnx[Math.floor(Math.random() * Thnx.length)];
		speech.text = finalText;
	}
	if (message.includes('Open Translate')) {
		const finalText =
			Reply[Math.floor(Math.random() * Reply.length)];
		speech.text = finalText;
		window.open('https://translate.google.com/')
	}
	if (message.includes('run diagnostics')) {
		const finalText =
			Diagnostics[Math.floor(Math.random() * Diagnostics.length)];
		speech.text = finalText;
	}
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        }x