// Le Label
$('#leLabel').click(function(){
  $('hr').after('<div id="container">Choisissez un Label <input type="text" id="idinput"><br/><br/><button id="btnok">Valider</button><button id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zlabel');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(1000);
  $('#container2').hide().fadeIn(1000);

  // Input

  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var validation = '<span>'+ $('#idinput').val() + '</span>&nbsp;<input type="text" id="' + $('#idinput').val() +'"><br/><br/>';
    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
  });
}); // Fin Label

// Bouton
$('#leBouton').click(function(){
  $('hr').after('<div id="container">Texte du bouton<br/><input type="text" id="idinput"><br/><br/><button id="btnok">Valider</button><button id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zbouton');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(1000);
  $('#container2').hide().fadeIn(1000);

  // Input

  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var validation = '<button type="submit">' + $('#idinput').val() + '</button><br/>';
    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
  });
}); // Fin bouton

// Code Formulaire
$('#cForm').click(function(){
  $('hr').after('<div id="container">Copier le code du formulaire<br/><br/><button id="btnok">Valider</button><button id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zform');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(1000);
  $('#container2').hide().fadeIn(1000);

  // Input

  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var validation = '<button class="code">Affichage du code </button><br/>';
    // On insère la valeur de validation dans la div #gauche
    $('#code-form').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
    $('.code').click(function(){
      var htmlString = $('#code-form').html();
      $('#code-form').text(htmlString);
      $('#code-form').append(htmlString);
    });
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(1000, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(1000);
  });
}); // Fin code formulaire
