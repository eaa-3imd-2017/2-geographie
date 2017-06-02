// JavaScript Document

/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript




// on exécute la fonction avec deux paramètres.
// le premier est l'ID de l'objet SVG
// le deuxième est la liste des ID des zones
 
function LoadSVG( id, zones ){

	var svgExt = document.getElementById(id);



// test MediaQuery


svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  
	  for (var i = 0; i < zones.length; i++) {
		  
		console.log("working on: " + zones[i]);
	
		zones[i] = svgDoc.getElementById(zones[i]);
		
		console.log(zones[i]);
		
		zones[i].addEventListener("mouseover", hoverimg);
		zones[i].addEventListener("mouseout", hideimg);
		
	 }
   
 }, false);

}
 
 

function hoverimg(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:


  var hoverID = this.id;
  console.log("svgCountryInfo: "+hoverID);

  // on en déduit l'élément à rendre visible
  
  var hoverClass = ".hover" + hoverID ;
  
  var hoverItem = document.querySelector( hoverClass );

  hoverItem.style.display="block";

}

function hideimg(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
  

  var hoverID = this.id;
  console.log("svgCountryHide: "+hoverID);

  var hoverClass = ".hover" + hoverID ;
   var hoverItem = document.querySelector( hoverClass );

  hoverItem.style.display="none";


}