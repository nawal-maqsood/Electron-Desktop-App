const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');

document.getElementById('add-note').addEventListener('click', () => {
    const noteText = noteInput.value;
    if (noteText) {
        const noteItem = document.createElement('li');
        noteItem.className = 'note-item'; 
        
        const noteTextElement = document.createElement('span');
        noteTextElement.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.style.marginLeft = '10px'; 
        deleteButton.onclick = () => {
            noteList.removeChild(noteItem); 
        };

        noteItem.appendChild(noteTextElement);
        noteItem.appendChild(deleteButton);
        
        noteList.appendChild(noteItem);
        noteInput.value = ''; 
    }
});
