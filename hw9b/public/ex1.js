//Create form submit event handler
document.querySelector("form").addEventListener("submit", e => {
    //Prevent default behavior
    e.preventDefault();
    //Create FormData object
    const formData = new FormData(e.target);

    fetch("http://localhost:3000/api/forms", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            //Create table to hold key/value pairs
            //Used innerHTML below
            const tableElement = document.createElement("table");
            tableElement.innerHTML = `
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    `;
            //Iterate through form data creating table rows
            //Created elements, assigned values, then appended
            formData.forEach((val, key) => {
                const trElement = document.createElement("tr");
                const tdKeyElement = document.createElement("td")
                tdKeyElement.textContent = key;
                const tdValElement = document.createElement("td")
                tdValElement.textContent = val;
                trElement.appendChild(tdKeyElement);
                trElement.appendChild(tdValElement);
                tableElement.appendChild(trElement);
            });

            //Display key/value pairs on the HTML page
            const outputElement = document.getElementById("output");
            //Create and display a header element
            const outputHeader = document.createElement("h2");
            outputHeader.textContent = "Form Data Entered";
            outputElement.appendChild(outputHeader);
            //Display table
            outputHeader.appendChild(tableElement);
        });
})
