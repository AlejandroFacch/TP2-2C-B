const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// obtener el total de segundos de los videos tipo Flexbox Video
// Tip: convertir a un array de objetos
// Tip2: split

function getVideos(str){
  return str
    .replace('<ul>','')
    .replace('</ul>','')
    .split('</li>')
    .slice(0, -1)
    .map( video => (
      {
        min:  parseInt(video
                      .split('"')[1]
                      .split(":")[0]),
        seg: parseInt(video
                     .split('"')[1]
                     .split(":")[1]),
        tipo: video.split('>')[1]
      }
    ));
}

function getTotalSegundos(videos, tipo){
  let totalsegundos = 0; 
    videos
          .filter( video => video.tipo === tipo)
          .forEach(video => {
            totalsegundos += video.min * 60 + video.seg;
          });
  return totalsegundos;
}


console.log(getTotalSegundos(getVideos(str), "Redux Video"));
function segundos(str){
let resultado = str.split(`li`);
let videos = resultado.filter(function (string) { return string.includes("Flexbox Video"); });
let intermedio = [];
let minutos = [];
for (let index = 0; index < videos.length; index++) {
  intermedio = videos[index].split(`"`);
  minutos.push(intermedio[1]);
}
let sumaTotal = 0;
for (let index = 0; index < minutos.length; index++) {
  
  if(minutos[index].length < 5){
    sumaTotal = sumaTotal + (parseInt(minutos[index].substring(0,1))*60 + parseInt(minutos[index].substring(2,4)));
  }else{
    sumaTotal = sumaTotal + (parseInt(minutos[index].substring(0,2))*60 + parseInt(minutos[index].substring(3,5)));
  }
}
return console.log(sumaTotal);
}

segundos(str);





