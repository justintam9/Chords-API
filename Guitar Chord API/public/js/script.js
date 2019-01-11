


function buttonClick() {
  var url_string = window.location.href
  var url = new URL(url_string);
  var c = url.searchParams.get("recipe");

  let chord= document.getElementById('chord').value
  if(chord === '') {
      return alert('Please enter a chord')
  }
  getChords(chord)
}

function getChords(chordName){

  const API_KEY = 'c61765e2674efd63b9af28987b1d735cfaece6e9'
  $.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Guitarparty-Api-Key', API_KEY);
    }
  });

  let chordDiv = document.getElementById('chordDiv')
  chordDiv.innerHTML = ''

  $.getJSON(`http://api.guitarparty.com/v2/chords/?query=${chordName}`, function(data) {
    let id = data.objects[0].uri
    chordDiv.innerHTML +=  ` <img src="${data.objects[0].image_url}" height ="350" width = "350">`
  });
}

$(document).ready(function(){
  var chord = window.location.search;
  chord = chord.replace("?chord=", '');
  if (chord != ''){
    getChords (chord)
  }

})


//Attach Enter-key Handler
const ENTER=13
document.getElementById("chord")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === ENTER) {
        document.getElementById("submit").click();
    }
});
