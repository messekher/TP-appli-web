$( document ).ready(function() { //Attente du chargement de la page
        // voir plus : https://www.w3schools.com/js/js_htmldom.asp

     console.log( "DOM ready!" );
     

     $("#submit").on("click",function(event){
        event.preventDefault();
        console.log( "click" );
        event.preventDefault();

        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {
            $('#myModal').modal({ show: true })
            $(".modal-title").text("Bienvenue " + $("#prenom").val());
            var city = $("#adresse").val();//valeur d’un champ
            var date = $("#date").val();//valeur d’un champ
            //pour modifier le contenu: 
            $(".modal-body").html(`Vous êtes nés ${date} et vous habitez :
            <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
            $("#myModal").modal("show");//redandence de laffichage

        } else {
            $('#myModal').modal({ show: true })//j'ai pas essayé avec false
            $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');
            $("#myModal").modal("show");// redandance de l'afficahge
        }

      });

