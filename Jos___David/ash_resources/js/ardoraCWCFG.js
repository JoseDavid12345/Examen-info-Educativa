//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO HICISTE"; messageTime="NOMBRE QUE BARBARO"; messageError="NEL"; messageErrorG="NEL"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YXNo"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Tg==","QQ==","Qw==","SQ==","Tw==","Tg==","","3A==","Uw==","3A==","3A==","3A==","3A==","3A==",""],["Tw==","","","","","","","UA==","Tw==","Qg==","Ug==","RQ==","Wg==","QQ==",""],["SQ==","3A==","3A==","3A==","3A==","3A==","3A==","3A==","Qw==","3A==","","","","",""],["Qw==","","","","","","","","SQ==","","","","","",""],["QQ==","","","","","","","","RQ==","","","","","",""],["TA==","","","","","","","","RA==","","","","","",""],["Uw==","","","Rw==","VQ==","RQ==","Ug==","Ug==","QQ==","Uw==","","","","",""],["SQ==","","","","","","","","RA==","","","","","",""],["Rw==","","","","","UA==","","","","","","","","",""],["RQ==","Uw==","VA==","QQ==","RA==","Tw==","","","","","","","","",""],["TA==","","","","","Qg==","","","","","","","","",""],["","","","","","TA==","RQ==","WQ==","RQ==","Uw==","","","","",""],["","","","","","Qw==","","","","","","","","",""],["3A==","3A==","3A==","3A==","3A==","Tw==","","","","","","","","",""],["","","","","","Tg==","","","","","","","","",""]];
var x1=[1,1];
var y1=[3,10];
var x2=[10,6];
var y2=[3,10];
var imaCW=["",""];
var audioCW=["",""];
var defCW=["",""];
var altCW=["",""];
var colNum=15;
var rowNum=15;
