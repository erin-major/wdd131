const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const quote = document.querySelector("#quote");
const level = document.querySelector("#level");
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
const heading = document.querySelector("#heading");
const person = document.querySelector("#personList");


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

const people = [
    {
        Name: "Tim Summers",
        Bio: "Dr Tim Summers is Teaching Fellow in Music at Royal Holloway, University of London. He has taught music at Bristol and Oxford Universities. He was Stipendiary Lecturer in Music at St Catherine’s College, Oxford. He received a first-class BA degree in music from Oxford University, before completing an MPhil by research at Bristol University in moving-image music. He was awarded the Bristol University Centenary Scholarship for the duration of his PhD in video game music. Tim has also worked to design research components for MA and MFA courses in media music offered by ThinkSpace Education, accredited by Chichester University. As well as contributing to several essay collections, he has written for the Journal of the Royal Musical Association on music in comics, for Music, Sound, and the Moving Image on music in multimedia franchises, The Journal of Film Music on narratology, and for The Soundtrack and Act on video game music. Tim’s monograph, Understanding Video Game Music was published by Cambridge University Press in 2016. Tim serves on the editorial board of The Soundtrack and is currently expanding his research to consider music in transmedial contexts."
    },
    {
        Name: "Michiel Kamp",
        Bio: "Dr Michiel Kamp is Assistant Professor of Musicology at Utrecht University, where he teaches on music and media. He previously taught and completed his AHRC-funded PhD dissertation at the University of Cambridge. His research takes a phenomenological approach to music in video games, and attempts to categorize and characterize the different ways in which players can hear and listen to game soundtracks. Michiel received his BA and MA degrees from Utrecht University. In addition to a chapter in Ludomusicology: Approaches to Video Game Music, he has recently contributed to a special issue of Philosophy & Technology on video game music and ecological psychology."
    },
    {
        Name: "Melanie Fritsch",
        Bio: "Dr. Melanie Fritsch is a Junior professor for Media and Cultural Studies with a focus on Game Studies and related fields at Heinrich-Heine-Universität Düsseldorf. Her doctoral thesis “Performing bytes. Musikperformances der Computerspielkultur” (“Performing bytes. Music performances of video game culture“) was published in 2018, and she is now co-editing “The Cambridge Companion to Video Game Music” with Tim Summers. She is also a member of the Executive Board of “The Society for the Study of Sound and Music in Games” (www.sssmg.org ), and has been part of the AHRC research network “Guitar Heroes in Music Education? Music-based video-games and their potential for musical and performative creativity” in 2014-2015. She further co-organized the GameCamp Berlin in 2016-2020, is a Co-founder of the AG Spiele (WG Games) of the Digital Humanities in German-speaking countries association and a member of the Speaker team of the AG Games (WG Games) of the German Society for Media Studies since October 2020. In 2011 she edited the issue of “ACT – Zeitschrift für Musik und Performance” focusing on video games and music. Her recent publications appeared i.a. in Digitale Spiele: Interdisziplinäre Perspektiven zu Diskursfeldern, Inszenierung und Musik, Ludomusicology: Approaches to Video Game Music, Music Video Games: Performance, Politics, and Play, and the Oxford Handbook of Interactive Audio."
    },
    {
        Name: "Andra Ivănescu",
        Bio: "Dr Andra Ivănescu is a Lecturer in Game Studies and Ludomusicology at Brunel University London. After completing her BA at the National University of Music Bucharest and her MA at the University of Salford, her PhD research in video game music was funded by The Cultures of the Digital Economy Research Institute (CoDE) at Anglia Ruskin University. As part of her current role, Andra has also contributed to the development of a sound and music pathway as part of the BA Games Design programme. Andra’s primary area of research lies at the intersection of video games, music, and popular culture, but her interests often extend to other areas of ludomusicology and game studies as well. She has contributed work to a number of essay collections, most recently the Cambridge Companion to Video Game Music, and her work has been published in journals including The Soundtrack and The Computer Games Journal. Her monograph, Popular Music in the Nostalgia Video Game: The Way It Never Sounded, was published with Palgrave Macmillan in 2019."
    },
    {
        Name: "Mark Sweeney",
        Bio: "Dr Mark Sweeney is the Executive Director and co-founder of the Society for the Study of Sound & Music in Games. After completing a BA in music at Oxford University, he received an AHRC award in support of an MSt (Distinction) in musicology, with a dissertation on non-linear video game music, and this was expanded into a DPhil thesis on aesthetic theory and videogame music. He has taught faculty classes and college tutorials across the University and was a Stipendiary Lecturer in Music at St Catherine’s College, Oxford. He has also supervised dissertations on video game music at Oxford and Cambridge Universities. Aside from the editorial duties with the group described above, Mark has also contributed conference papers, book chapters and articles on topics including diegetic folk music, social interaction in MMOs and the relationships between Hollywood film music and video game music."
    },
    {
        Name: "Stephanie Lind",
        Bio: "Stephanie Lind is currently an Associate Professor at the Dan School of Drama and Music, Queen’s University (Canada), where she has taught a variety of courses in music theory and musicology including video game music, music theory, music aesthetics, and the music of Canada.  Prior to that, she received her M.A. and Ph.D. in music theory from the University of British Columbia and B.Mus. from Wilfrid Laurier University.  Stephanie is a past president of the Canadian University Music Society. Her research interests include video game music analysis (with specific interests in integrating music theory into the analysis of soundscape, multimedia interactions, and player perceptions of game experience), transformational theory, and contemporary Canadian art music.  She published the book Authenticity in the Music of Video Games in 2023 through Lexington press (available now!).  Some of her other research contributions include articles in the Journal of Sound and Music in Games (upcoming 2024), Intersections, Music Theory Online, Perspectives of New Music, presentations at numerous conferences, and book chapters in Music Video Games:  Performance, Politics, and Play and the upcoming Music and Sonic Environments in Video Games (Routledge) and The Oxford Handbook of Video Game Music and Sound. Known for her interactive teaching style, Stephanie is a multiple winner of several teaching awards at Queen’s University.  She has participated in numerous activities meant to broaden students’ teaching and learning experiences, including student projects through the University Summer Student Research Program/Fund, colloquium and conference presentations, submissions to undergraduate journals, and most recently assisting a graduate student editorial team for a special issue of the Journal of Sound and Music in Games on the music of Hades.  She is an advocate of technology in the classroom and is a frequent early adopter of new learning technology.  She is also an active participant in community music as a woodwind player, ensemble vocalist, and music director."
    },
    {
        Name: "William J Gibbons",
        Bio: "William Gibbons joined SUNY Potsdam in 2022 as Dean of the Crane School of Music and Professor of Music History. He earned a PhD in Musicology from the University of North Carolina at Chapel Hill, an MA in Musicology from UNC Chapel Hill, and a BA in Music (magna cum laude) from Emory & Henry College. Prior to joining Crane, Gibbons was Associate Dean of the College of Fine Arts at Texas Christian University, where he received the 2020 Deans' Award for Research and Creativity. As an educator and administrator, Dr. Gibbons aims to show how music can play a key role in contemporary conversations around equity, ethics, and leadership through courses like 'Music, Technology, and Values,' 'Musical Theater and American Politics,' and 'Examining Ethical Leadership.' As a researcher, Gibbons investigates the past's role in shaping how we interpret and value music today, from the history of classical music as an idea, to how music impacts contemporary media."
    },
    {
        Name: "Thomas Yee",
        Bio: "Some composers found their love of music at the symphony hearing Brahms or Beethoven — Thomas B. Yee (b. 1992) discovered his from the beeps and boops of the family Super Nintendo. As a composer, his artistic mission is to transmute meaningful human stories into immersive, transformative musical works. Thomas' music of Holocaust remembrance synthesizes his fierce commitment to musical meaning with a passion to spotlight acts of racial injustice throughout history and the world. Similarly, his research in music semiotics and ludomusicology explores the creation and interpretation of music as a meaningful, communicative, and quintessentially human activity."
    },
    {
        Name: "Elizabeth Medina-Gray",
        Bio: "Dr. Elizabeth Medina-Gray is associate professor of music theory in the School of Music, Theatre, and Dance at Ithaca College, where she teaches courses in music theory, aural skills, and (in Fall 2017 and Fall 2019) analysis of video game music. Dr. Medina-Gray received her Ph.D. in Music Theory from Yale University in 2014. In her dissertation and subsequent research, she has focused on developing novel analytical approaches to music and sound in video games. She has presented her work at national and international conferences, including national meetings of the Society for Music Theory, the American Musicological Society, and the North American Conference on Video Game Music (NACVGM). She serves on the program committee for NACVGM and on the executive committee for the international Society for the Study of Sound and Music in Games (SSSMG). She is an associate editor for the Journal of Sound and Music in Games, which is published quarterly by SSSMG and University of California Press, with the first issue published in January 2020. Her work appears in Music Theory Online (2019), The Cambridge Companion to Video Game Music (2021), The Routledge Companion to Screen Music and Sound (Routledge 2017), Ludomusicology: Approaches to Video Game Music (Equinox Publishing 2016), and Music in Video Games: Studying Play (Routledge 2014). Prior to arriving at Ithaca College in 2016, Dr. Medina-Gray taught courses in music theory and aural skills at Yale University, Oberlin Conservatory, and Humboldt State University. She has worked with a diverse body of students in a wide variety of academic environments, and she aims to encourage high levels of musicality and critical engagement in her classrooms. Dr. Medina-Gray also holds M.A. and M.Phil. degrees in Music Theory from Yale, as well as a B.A. in Music and Chemistry from Swarthmore College. Outside of her professional pursuits, she enjoys nature, bird watching, and gardening."
    }
]

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
        console.log(nextLevel);
        localStorage.setItem('userVisits', nextLevel.toString());
    }
}

function getLevel() {
    return localStorage.getItem('userVisits');
}

function displayPeople(people) {
    const html = people.map(
        (person) => `
        <div class="person">
            <p id="name">${person.Name}</p>
            <p id="bio">${person.Bio}</p>
        </div>`
  );
  person.innerHTML = html.join("");
};

levelUp();
displayQuote(quotes);
displayPeople(people);


const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Erin Major | Utah, United States`;
modifiedDate.innerHTML = `Last Modification: ${today}`;
level.innerHTML = `Congratulations! You're level ${getLevel()}!`;
