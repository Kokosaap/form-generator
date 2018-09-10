// Le Fieldset
$('#leLabel').click(function(){
  $('hr').after('<div id="container"><div><p>Choisissez un Label</p> </div><input type="text" id="idinput"><br/><br/><div>Choisissez le type du champ</div><br/><div id="verticalBullets"><input type="radio" id="typeField_txt" name="chooseType" checked /><label for="text">Text</label><br/><input type="radio" id="typeField_pswd" name="chooseType" /><label for="password">Password</label><br/><input type="radio" id="typeField_date" name="chooseType" /><label for="date">Date</label><br/><input type="radio" id="typeField_mail" name="chooseType" /><label for="email">Email</label><br/><input type="radio" id="typeField_nb" name="chooseType" /><label for="number">Number</label></div><br/><br> Pour rendre ce champs obligatoire, cocher cette case<br/><input type="checkbox" id="required" name="required" value="required">Required<br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');


  // Ajax
  $('#container2').load('initialize.html .zlabel');

  // Un clic puis on desactive les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var selectedProduct = $(  $(":radio[name=chooseType]:checked").prop("labels") ).text();
    console.log(selectedProduct);
    var requireField = $('input[name="required"]:checked').val();
    console.log(requireField);

    if ($('#required').is(":checked") == true) {
      var validation = '<label>'+ $('#idinput').val() + '</label><input class="form-control" type="' + selectedProduct + '" id="' + $('#idinput').val() + '" required="' + requireField + '" ><br>';
      console.log("je passe dans le if car je suis required");
    } else {
      var validation = '<label>'+ $('#idinput').val() + '</label><input class="form-control" type="' + selectedProduct + '" id="' + $('#idinput').val() + '"><br>';
      console.log("je passe dans le else car je suis pas required");
    }
    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin Label



// Bouton
$('#leBouton').click(function(){
  $('hr').after('<div id="container">Texte du bouton<br/><input type="text" id="idinput"><br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zbouton');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var validation = '<button type="submit" class="btn btn-outline-secondary">' + $('#idinput').val() + '</button><br/>';
    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin bouton



// Code Formulaire
$('#cForm').click(function(){

  // Input
  $("#idinput").focus();

  var regex_br = /<br\s*\/?>/g;
  var htmlString = $('#gauche').html();
  console.log(htmlString);
  var remove_br = htmlString.match(regex_br);

  if (remove_br == null) {
    console.log("ok ya rien dans le tab");
    $('#code-form').text('<form>' +htmlString+ '</form>');
  }
  else {
    console.log("il y a au moins un truc dans ce tab");
    remove_br.splice(0,1);
    $('#code-form').text('<form>'+ remove_br +htmlString+ '</form>');
  }
  console.log(remove_br);

});
 // Fin code formulaire


// Effacer le code
$('#supprimer').click(function(){
  $('hr').after('<div id="container">Supprimer le contenu<br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zefface');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    $("#gauche, #code-form").empty();

    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);

  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin code formulaire
