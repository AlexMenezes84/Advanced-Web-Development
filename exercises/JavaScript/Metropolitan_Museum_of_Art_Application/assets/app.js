// This is app.js, the script that configures and creates our application

import createHeader from "./metmuseum/header.js";
import createFooter from "./metmuseum/footer.js";
import createFigure from "./metmuseum/figure.js";
import { search } from "./metmuseum/article.js";
import { getMuseumSearch, getMuseumObject } from "./metmuseum/api.js";

const header = createHeader('Metropolitan Museum of Art Collection', getMuseumSearch);
const main = document.createElement('main');
const footer = createFooter();

document.body.append(header, main, footer);

document.body.addEventListener('search', async ev => {
    main.classList.add('loading');
    clear();
    const articles = await search(ev.target.value);
    main.dataset.message = `found ${articles.length} results for '${ev.target.value}'`;
    main.append(...articles);
    main.classList.remove('loading');
});

function clear() { 
    while (main.firstChild) { main.firstChild.remove(); }
}