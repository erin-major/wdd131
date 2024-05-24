const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = "";
            input.focus();
        };
});

chaptersArray.forEach(chapter => { 
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";    

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);        
        input.focus();
    });
};

function setChapterList() {
    localStorage.setItem('favBOMList', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBOMList'));  
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};

