
 function validation(){
  
    document.getElementById("resultat").classList.remove("visible");
    document.getElementById("error").classList.remove("visible");
    

    var length_Name = document.getElementById("Name").value.length;
    var length_F_Name = document.getElementById("First_Name").value.length;
    var length_Birthdate = document.getElementById("Birthdate").value.length;
    var length_Adress = document.getElementById("Adresse").value.length;
    var length_Email = document.getElementById("Mail").value.length;

    if(length_Name==0 && length_F_Name==0 && length_Birthdate== 0 && length_Adress==0 && length_Email==0 ){
    document.getElementById("error").classList.add("visible");
    }
    
          else if(length_Name < 5 && length_Name > 20 ){
          document.getElementById("error").classList.add("visible");
          document.getElementById("error").innerHTML = "erreur: Entrer votre vrai Nom!";
                                   }
    
     
         else if(length_F_Name < 5 && length_F_Name > 20 ){
         document.getElementById("error").classList.add("visible");
         document.getElementById("error").innerHTML = "erreur: Entrer votre vrai Prenom!";
                                    } 

         else if (length_Birthdate ==0 ) {
         document.getElementById("error").classList.add("visible");
         document.getElementById("error").innerHTML = "erreur: Entrer une date de naissance valide!";
                                         }


         else if (length_Adress < 5 && length_Adress > 50 ){
         document.getElementById("error").classList.add("visible");
         document.getElementById("error").innerHTML = "erreur: Entrer une adresse valide!";
                                     }
           
          else if (length_Email < 5 && length_Email >30 ){
          document.getElementById("error").classList.add("visible");
          document.getElementById("error").innerHTML = "erreur: Etrer un e-mail valide!";
              } 

          else {
          document.getElementById("resultat").classList.add("visible");
          document.getElementById("resultat").innerHTML = "Bienvenue"
           +" " + document.querySelector("#First_Name").value + " " + document.querySelector("#Name").value;
           }
    }
    