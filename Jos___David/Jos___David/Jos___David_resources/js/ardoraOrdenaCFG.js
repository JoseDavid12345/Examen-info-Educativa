var timeAct=160; timeIni=160; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien echo"; messageTime=""; messageError="vuelve a intentarlo ;)"; messageErrorG="vuelve a intentarlo ;)"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Sm9zX19fRGF2aWQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["bGEgaHVlbGdhIGRlIGxvcyBicmF6b3MgY2FpZG9zICgxOTQ0KQ==","bG8gc2FjYXJvbiBkZWwgcG9kZXIgYWwgbWFjaGV0ZWFybG8geSBsbyBkZWphcm9uIG1lZGlvIG11ZXJ0bw==","bGEgZ3VlcnJhIGRlIGxhcyAxMDAgaG9yYXMgZGUgRWwgU2FsdmFkb3IgY29udHJhIEhvbmR1cmFz","cHJpbWVyIHByZXNpZGVudGUgZGVsIHNpZ2xvIFhY",""];imaW=["images.jpg","Enrique_Araujo.jpg","la_guerra_del_futbol.jpg","Regalado_joven.jpg",""];queW=["asi derrocaron a Maximiliano Martinez","Manuel Enrique Araujo","la guerra de las 100 horas","Tomas Regalado",""];altW=["","","","",""];c=[37,61,57,30,0];
var auW=["","","","",""];
var actMaxWidth="750"; actMaxHeight="450";indexG=0;profG=0;dirMedia="Jos___David_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
