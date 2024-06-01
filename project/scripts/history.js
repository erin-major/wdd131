const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const quote = document.querySelector("#quote");
const level = document.querySelector("#level");
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
const heading = document.querySelector("#heading");
const timeline = document.querySelector('#timeline');

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("open");
    heading.classList.toggle("open");
});

const quotes = [ 
    {
        Name: "Shigeru Miyamoto",
        Text: "Video games are bad for you? That's what they said about rock-n-roll."
    },
    {
        Name: "Hideo Kojima",
        Text: "The game is not over until it's over."
    },
    {
        Name: "Hideo Kojima",
        Text: "We don't stop playing because we grow old; we grow old because we stop playing."
    },
    {
        Name: "Jane McGonigal",
        Text: "Games are the most elevated form of investigation."
    },
    {
        Name: "Will Wright",
        Text: "Games are the only form of media that allow the player to become the author of the story."
    },
    {
        Name: "Gabe Newell",
        Text: "One of the great things about games is that they are malleable. They can change and evolve over time."
    },
    {
        Name: "Markus Persson",
        Text: "Games are like art, and I think they're becoming more and more like that."
    },
    {
        Name: "Karen Collins",
        Text: "Music in games is not just about creating an atmosphere, it’s about creating an experience that the player is actively part of."
    },
    {
        Name: "Tim Summers",
        Text: "The relationship between music and gameplay is an intricate dance, where each influences the other to create a dynamic and immersive experience."
    },
    {
        Name: "Michael Sweet",
        Text: "Interactive music is about creating a score that evolves and adapts to the player's journey, making each experience unique."
    },
    {
        Name: "Andrew Schartmann",
        Text: "Game music has the power to evoke nostalgia, create tension, and shape our perception of virtual worlds."
    }
];

const events = [
    {
        Date: "2008",
        Event: "Karen Collins published 'Game Sound: An Introduction to the History, Theory and Practice of Video Game Music and Sound Design.'"
    },
    {
        Date: "August 2011",
        Event: "The Ludomusicology Research Group was founded."
    },
    {
        Date: "April 2012",
        Event: "The Ludomusicology Research Group held its inaugural conference at the University of Oxford."
    },
    {
        Date: "January 2014",
        Event: "The North American Conference on Video Game Music held its inaugural conference at Youngstown State University."
    },
    {
        Date: "December 2016",
        Event: "The Society for the Study of Sound and Music in Games was founded."
    },
    {
        Date: "Winter 2020",
        Event: "The first edition of the Journal of Sound and Music in Games was published."
    },

];

function displayQuote(quotes) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = `
    <p class='text'>${randomQuote.Text}</p>
    <p>-${randomQuote.Name}</p>`
};

function levelUp() {
    const userLevel = localStorage.getItem('userVisits');
    if (userLevel == null) {
        localStorage.setItem('userVisits', '1');
    }
    else {
        const nextLevel = parseInt(userLevel) + 1;
        localStorage.setItem('userVisits', nextLevel.toString());
    }
};

function getLevel() {
    return localStorage.getItem('userVisits');
};

function displayTimeline(events) {
    const html = events.map(
        (event) => `
        <div class="event">
            <p>${event.Date}</p>
            <p>${event.Event}</p>
        </div>
        <div class="event"></div>
        <div class="event"></div>`
  );
  timeline.innerHTML = html.join("");
};

levelUp();
displayQuote(quotes);
displayTimeline(events);

const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Erin Major | Utah, United States`;
modifiedDate.innerHTML = `Last Modification: ${today}`;
level.innerHTML = `Congratulations! You're level ${getLevel()}!`;
