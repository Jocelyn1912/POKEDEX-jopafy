
$('#searchForm').click(function () {
  const pokemonName = $('#pokeName').val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    //success: function (results) {
      //console.log(results);
    //}
  }).done(handleResponse)
  fail(handleError);

  function handleResponse(pokeData) {
    const pokeImg = pokeData.sprites.front_default;
    const pokeName = pokeData.name;
    $('.pokeContainer').append(`<div><img src="${pokeImg}"><h1>${pokeName}</h1></div>`);
  }

  function handleError() {
    console.log('Qué pena entrenador, para otra ocasión :(');
  }
})

/*
const search = function(event) {
  event.preventDefault();
  const pokeName = document.getElementById("pokeName").value;
  $.get('https://pokeapi.co/api/v2/pokemon/' + pokeName, function(pokemon) {
    document.getElementById("pokename").innerHTML = pokemon.name;
    document.getElementById("pokeimage").src = pokemon.sprites.front_default;
  });
}
document.getElementById("pokeform").addEventListener('submit', search);
*/
