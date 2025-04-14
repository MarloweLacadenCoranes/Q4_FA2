function generateTable() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const output = document.getElementById('output');
    output.innerHTML = "";

    if (start < 2 || end < 2 || start > 10 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    const table = document.createElement("table");

    for (let i = 1; i <= 3; i++) {
        const row = document.createElement("tr");
        for (let j = start; j <= end; j++) {
            const cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    output.appendChild(table);
}