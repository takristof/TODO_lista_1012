var feladatok = [];

const hozzaAd = () => {
  var feladat = document.getElementById("tevekenyseg").value;

  if (feladatok.includes(feladat)) {
    alert("Már felvetted ezt a feladatot a listához")
  } else {
    feladatok.push(feladat)
    document.getElementById("lista").innerHTML += `<li idx="${feladatok.length-1}">${feladat} <button type="button" onclick="feladatTorles()">X</button></li>`
  }
  document.getElementById("tevekenyseg").value = "";
}
const feladatTorles = () => {
    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"), 10);
    feladatok.splice(index, 1);
    document.getElementById("lista").innerHTML = feladatok.map((feladat, i) => {
      return `<li idx="${i}">${feladat} <button type="button" onclick="feladatTorles()">X</button></li>`
    });
  }