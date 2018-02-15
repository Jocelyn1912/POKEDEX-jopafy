
$('#searchForm').click(function () {
  const pokemonName = $('#pokeName').val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    type: 'GET',
    datatype: 'json',
    success: function (results) {
    console.log(results);
    }
  }).done(handleResponse).fail(handleError);

  function handleResponse(pokeData) {
    $('.pokeContainer').empty();
    const pokeImg = pokeData.sprites.front_default;
    const pokeName = pokeData.name;
    const pokeAbilities = pokeData.weight;
    const pokeNumber = pokeData.order;
    const pokeExperience = pokeData.base_experience;
    const abilities = pokeData.abilities[0].ability.name;

    $('.pokeContainer').append(`<img class="img-response imgModal" src="${pokeImg}"><h3><strong>${pokeName}</strong></h3><p>${pokeData.weight}</p><p>${pokeData.order}</p><p>${pokeData.base_experience}</p><p>${abilities}</p>`);
    $('.img-response').click(function() {
      $('.modalBody').append

    })
  }

  function handleError() {
    console.log('Que pena entrenador, para otra ocasión :(');
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
/*
const numero = 4;

fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
.then(response => response.json())
.then(datos => console.log(datos.name))

*/