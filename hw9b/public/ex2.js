
//Countries I've visited?

const visitedCountries = {

    name: "Judre",

    countries: [
        {
            name: "Philippines",
            year: 2018,
        },
        {
            name: "Japan",
            year: 2016,
        },

        {
            name: "Sweden",
            year: 2013,
        },
        {
            name: "Taiwan",
            year: 2011,
        }
    ]
};

document.querySelector("form").addEventListener("submit", e => {

    e.preventDefault();

    fetch("http://localhost:3000/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visitedCountries)
    })
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(er => {
            console.log(er.message);
        })
});
