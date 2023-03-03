

const notes = [];

const filters = {
    searchText: "",
};

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem("notes");

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

renderNotes(notes, filters);
console.log(uuidv4())
document.querySelector("#create-note").addEventListener("click", function (e) {
    notes.push({
        id: uuidv1(),
        title: "",
        body: "",
    });
    saveNotes(notes);
    renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
    console.log(e.target.value);
});
