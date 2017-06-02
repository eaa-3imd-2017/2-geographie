// JavaScript Document

/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript

var svgExt = document.getElementById("regionportugal");

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svglisboa, svgalgarve, svgnorte, svgcentro, svgalentejo;

// test MediaQuery


svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svglisboa = svgDoc.getElementById("lisboa");
  svgalgarve = svgDoc.getElementById("algarve");
  svgnorte = svgDoc.getElementById("norte");
  svgcentro = svgDoc.getElementById("centro");
  svgalentejo = svgDoc.getElementById("alentejo");

  // On va rendre "sensible" un élément du SVG
  svgnorte.addEventListener("mouseenter", svgnorte);
  svgnorte.addEventListener("mouseleave", nortehover);
  
  
 }, false);

function svgCountryInfo(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:

  if(mq.matches) {

  var CountryID = this.id;
  console.log("svgCountryInfo: "+CountryID);

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="block";

  }

}

function svgCountryHide(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
  
  if(mq.matches) {

  var CountryID = this.id;
  console.log("svgCountryHide: "+CountryID);

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="none";

  }

}