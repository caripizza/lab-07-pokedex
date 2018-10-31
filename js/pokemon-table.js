import html from './html.js';

const tableBody = document.getElementById('pokemon-table-body');

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.speed}</td>
        <td>${pokemon.attack.join(', ')}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemon) {
        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        pokemonTable.init(pokemon);
    }
};

export default pokemonTable;