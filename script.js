document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = this.value.trim();
        const output = document.getElementById('output');
        let response = "Command not recognized";

        // Define commands here
        const splitInput = input.split(" ");
        if (splitInput[0] === "docs.google.com") {
            response = "Opening gogole docs"
            if (splitInput.length > 1) {
                window.location.href = `https://docs.google.com/u/${splitInput[1]}`;
            } else {
                window.location.href = "https://docs.google.com/u/2";
            }
        } else if (splitInput[0] === "docs.new") {
            response = "Opening new gogole doc"
            if (splitInput.length > 1) {
                window.location.href = `https://docs.new/${splitInput[1]}`;
            } else {
                window.location.href = "https://docs.new/2";
            }
        }else {
            response = "Searching for " + input + "in the web"
            window.location.href = "https://www.google.com/search?q=" + input
        }

        // Output response
        const li = document.createElement('li');
        li.textContent = '$ ' + input + '\n' + response;
        output.appendChild(li);

        // Clear input
        this.value = '';
    }
});
