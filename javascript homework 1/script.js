document.getElementById('addButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        
        const li = document.createElement('li');
        li.textContent = name;
        document.getElementById('nameList').appendChild(li);
        
        console.log(`Added name: ${Walter}`);
        console.log(`Added name: ${Bryan}`);
        console.log(`Added name: ${Ruth}`);
        
        
        nameInput.value = '';
    } else {
        console.log('Walter');
        console.log('Ruth');
        console.log('Bryan');
    }
});

document.getElementById('moveButton').addEventListener('click', function() {
    const nameList = document.getElementById('nameList');
    if (nameList.children.length > 0) {
        const firstLi = nameList.children[0];
        nameList.appendChild(firstLi);
        console.log(`Moved ${firstLi.textContent} to the last position`);
    } else {
    }
});
