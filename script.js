window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) { 
        response.json().then(function(json) {
            
            let astronautCount = 0;

            for (astronaut in json) {
                
                ++astronautCount;
                
                let listOfSkills = json[astronaut].skills.join(', ');

                const div = document.getElementById("container");
                div.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
                        <li>Active: ${json[astronaut].active}</li>
                        <li>Skills: ${listOfSkills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[astronaut].picture}">
                    </div>
                    `;
                
                // if active = true, make active class
                // add .green to css file as class
                
            }
            let count = document.getElementById("astronaut count");
            count.innerHTML += astronautCount;
        });
    });
})