window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const container = document.getElementById("container");
            function compare(a, b){
                if ( a.hoursInSpace < b.hoursInSpace ){
                return -1;
            }
                if ( a.hoursInSpace > b.hoursInSpace ){
                return 1;
            }
                return 0;
            }
            json.sort(compare);
            
            for (i = 0; i < json.length; i++) {
            if (json[i].active === true) {
                container.innerHTML = container.innerHTML + `<div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}<h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${json[i].picture}">
            </div>`
            } else {
                container.innerHTML = container.innerHTML + `<div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}<h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${json[i].picture}">
            </div>`
            }
        }
            container.innerHTML = container.innerHTML + `Astronaut Count: ${json.length}`;
        })
    });
});