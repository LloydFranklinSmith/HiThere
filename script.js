var canvRef = null;
var ctxRef = null;
var cellSize = 3;
var gridWidth = 45;
var gridHeight = 45;
var colorPallateArr =['#9bbc0f','	#8bac0f','#306230','#0f380f'];

initCanvas('testCanvas');
setInterval(function(){ drawNoise(); }, 100);


drawNoise();

function drawNoise(){
    let cIdx = colorPallateArr.length-1;
for(let c=0;c<gridWidth;c++) {
  for(let c1=0;c1<gridHeight;c1++) {
    drawCell(c,c1,Math.round(Math.random()*colorPallateArr.length));
    cIdx--;
    if(cIdx<0) {
      cIdx=colorPallateArr.length-1;
    }
}
}
}
function drawCheckers1(){
  let cIdx = colorPallateArr.length-1;
for(let c=0;c<gridWidth;c++) {
  for(let c1=0;c1<gridHeight;c1++) {
    drawCell(c,c1,cIdx);
    cIdx--;
    if(cIdx<0) {
      cIdx=colorPallateArr.length-1;;
    }
}
}
}

function drawCheckers2(){
  let cIdx = 0
for(let c=0;c<gridWidth;c++) {
  for(let c1=0;c1<gridHeight;c1++) {
    drawCell(c,c1,cIdx);
    cIdx++;
    if(cIdx>colorPallateArr.length-1) {
      cIdx=0;
    }
}
}
}


//initialisiert den Canvas
function initCanvas(aCanvasId){
  canvRef = document.getElementById(aCanvasId);
  canvRef.width = gridWidth * cellSize;
  canvRef.height = gridHeight * cellSize;
  ctxRef = canvRef.getContext('2d');
  
}
//färbt eine Celle auf dem Canvas ein
function drawCell(xPos,yPos,colorIdx){
  ctxRef.fillStyle = colorPallateArr[colorIdx];
  ctxRef.fillRect(xPos*cellSize,yPos*cellSize,cellSize,cellSize); 
}
// säubert den Canvas
function cleanCanvas(){
  ctxRef.clearRect(0,0,gridWidth*cellSize,gridHeight*cellSize);
}