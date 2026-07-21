/*
☕ Sip & Speak

Application Engine

Version: v0.1.0

*/


// Main application container

const sessionList = document.getElementById(
    "session-list"
);



/*
Load sessions from JSON
*/

async function loadSessions() {


    try {


        const response = await fetch(
            "src/data/sessions.json"
        );


        const data = await response.json();


        renderSessions(
            data.sessions
        );


    } catch(error) {


        console.error(
            "Unable to load sessions:",
            error
        );


    }

}



/*
Create session cards
*/


function renderSessions(sessions) {


    sessions.forEach(
        session => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "session-card";



            card.innerHTML = `


                <h3>
                    ${session.title}
                </h3>


                <p>
                    ${session.description}
                </p>


                <div class="session-meta">

                    <span>
                        ${session.level}
                    </span>


                    <span>
                        ${session.duration}
                    </span>


                </div>


            `;



            sessionList.appendChild(
                card
            );


        }
    );

}



/*
Start application
*/

loadSessions();
