const express = requrie("express");
const multer = requrie("multer");
const bodyParser =require("body-parser");

const app = express();
const upload = multer();
const jsonParser = bodyParser.json();

app.use(express.static("public"));
app.use(express.static("css"));

const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
  }
];

//countries
app.post("/api/countries", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});



//articles
app.post("/articles", upload.array(), (request, response) => {
  const title = request.body.title;
  const content = request.body.content;
  
  const idList = articles.map(article => article.id);
  
  const maxId = idList.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
   
  });
  const id = maxId + 1;
  
  articles.push({ id, title, content });
  response.send(`New article added successfully title ${title} and with ID ${id}!`);
});

// JSON API

app.get("/api/forms", (request,response) => {
  response.json(forms);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});


app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});


app.post("/api/countries", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

