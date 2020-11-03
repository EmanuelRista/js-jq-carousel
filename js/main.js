$(document).ready(function(){//funzione già attiva
  $('.next').click(activeNextImage);//se clicco sul div next (>) allora si attiva la funzione activeNextImage
  $('.next').click(activeNextPallino);//se clicco sul div next (>) allora si attiva la funzione activeNextPallino

  $('.prev').click(activePreviousImage);//stessa logica ma indietro
  $('.prev').click(activePreviousPallino);  
})

function activeNextImage() {//quando si attiva la funzione activeNextImage
  var becameActive = $('img.active')//immagine attiva
  becameActive.removeClass('active')//rimuove la classe "active"

  if (becameActive.hasClass('last')) {//se l'immagine attiva ha classe last
    $('img.first').addClass('active')//allora verrà resa attiva quella con la classe first
  } else {//diversamente
    becameActive.next().addClass('active')//allora aggiungi la classe active alla prossima
  }
}

function activePreviousImage() {//stessa logica ma indietro
  var becameActive = $('img.active')
  becameActive.removeClass('active')

  if (becameActive.hasClass('first')) {
    $('img.last').addClass('active')
  } else {
    becameActive.prev().addClass('active')
  }
}

function activeNextPallino() {//stessa logica per quanto riguarda il pallino (in avanti)
  var becameActive = $('i.active')
  becameActive.removeClass('active')

  if (becameActive.hasClass('last')) {
    $('.first').addClass('active')
  } else {
    becameActive.next().addClass('active')
  }
}

function activePreviousPallino() {//stessa logica per quanto riguarda il pallino (indietro)
  var becameActive = $('i.active')
  becameActive.removeClass('active')

  if (becameActive.hasClass('first')) {
    $('.last').addClass('active')
  } else {
    becameActive.prev().addClass('active')
  }
}
