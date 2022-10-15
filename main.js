document.addEventListener('DOMContentLoaded', () => {
  const goButton = document.getElementById('GoButton');
  const selectedColorSwatch = document.getElementById('displaySelectedColor');

  goButton.addEventListener('click', function () {
    //get color entered and set it as selected color
    let color = document.getElementById('colorPicked').value;
    selectedColorSwatch.style.backgroundColor = color;
    //extend the viewport to accomodate label and dropdown menu
    document.body.style.height = '350px';
    //Label/text for this section
    document.getElementById('schemeSelect').style.display = 'flex';
  


    const dropdownSelect = document.getElementById("ice-cream");
    dropdownSelect.addEventListener('change', (event)=>{
      // console.log('you made a change!');
      document.getElementById("triadic").style.display = 'none';
      document.getElementById("analogous").style.display = 'none';
      document.getElementById("tetradic").style.display = 'none';
      let colorScheme = event.target.value;
      document.body.style.height = '580px';
      document.getElementById('palettes').style.display = 'flex';
      const keyObj = {'complementary': 1,
      'triadic': 2,
      'tetradic': 3,
      'Analogous': 2
    };
    if (colorScheme === 'complementary'){
      let compColor = toRGBArray(color);
      compColor = RGBToHSL(compColor);
      compColor = toHSLArray(compColor);
      compColor = getComplementColor(compColor);
      document.getElementById("palettes").style.backgroundColor = compColor;
      console.log(compColor);
    }
    else if (colorScheme === 'triadic'){
      console.log('triadic was triggered');
      let compColor = toRGBArray(color);
      compColor = RGBToHSL(compColor);
      compColor = toHSLArray(compColor);
      triColors = getTriadicColors(compColor);
      console.log(triColors);
      document.getElementById("triadic").style.display = 'flex';
       document.getElementById('color1').style.width = '150px';
       document.getElementById('color1').style.height = '150px';
      document.getElementById("color1").style.backgroundColor = triColors[0];
      document.getElementById("color2").style.width = '150px';
      document.getElementById('color2').style.height = '150px';
      document.getElementById("color2").style.backgroundColor = triColors[1];
    }
    else if (colorScheme === 'tetradic'){
      let compColor = toRGBArray(color);
      compColor = RGBToHSL(compColor);
      compColor = toHSLArray(compColor);
      tetColors = getTetradicColors(compColor);
      console.log(tetColors);
      document.getElementById("tetradic").style.display = 'flex';
      document.getElementById('color3').style.width = '100px';
      document.getElementById('color3').style.height = '150px';
      document.getElementById("color3").style.backgroundColor = tetColors[0];
      document.getElementById("color4").style.width = '100px';
      document.getElementById('color4').style.height = '150px';
      document.getElementById("color4").style.backgroundColor = tetColors[1];
      document.getElementById("color5").style.width = '100px';
      document.getElementById('color5').style.height = '150px';
      document.getElementById("color5").style.backgroundColor = tetColors[2];
    }
    else if (colorScheme = "Analogous"){
      let compColor = toRGBArray(color);
      compColor = RGBToHSL(compColor);
      compColor = toHSLArray(compColor);
      anaColors = getAnalagousColors(compColor);
      console.log(anaColors);
      document.getElementById("analogous").style.display = 'flex';
      document.getElementById('color6').style.width = '150px';
      document.getElementById('color6').style.height = '150px';
      document.getElementById("color6").style.backgroundColor = anaColors[0];
      document.getElementById("color7").style.width = '150px';
      document.getElementById('color7').style.height = '150px';
      document.getElementById("color7").style.backgroundColor = anaColors[1];
    }

    })


  }) 
});

function RGBToHSL([r, g, b]) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  s = Math.floor(s);
  l = Math.floor(l);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}
//each color function takes in hsl value as three strings h, s, and
//l. s and l do not have percentage values

//the multicolor functions will return arrays with the computer
//colors

const toHSLArray = (hslStr) => hslStr.match(/\d+/g).map(Number);

const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);

function getComplementColor([h, s, l]) {
  let hval = parseInt(h, 10);
  let compVal = hval + 180;
  return `hsl(${compVal}, ${s}%, ${l}%)`;
}

function getTriadicColors([h, s, l]) {
  let hval = parseInt(h, 10);
  let triVal1 = `hsl(${hval + 120}, ${s}%, ${l}%)`;
  let triVal2 = `hsl(${hval + 240}, ${s}%, ${l}%)`;

  return [triVal1, triVal2];
}

function getTetradicColors([h, s, l]) {
  let hval = parseInt(h, 10);
  let tetVal1 = `hsl(${hval + 90}, ${s}%, ${l}%)`;
  let tetVal2 = `hsl(${hval + 180}, ${s}%, ${l}%)`;
  let tetVal3 = `hsl(${hval + 270}, ${s}%, ${l}%)`;

  return [tetVal1, tetVal2, tetVal3];
}

function getAnalagousColors([h, s, l]) {
  let hval = parseInt(h, 10);
  let analVal1 = `hsl(${hval - 30}, ${s}%, ${l}%)`;
  let analVal2 = `hsl(${hval + 30}, ${s}%, ${l}%)`;
  return [analVal1, analVal2];
}

//testing commands to manipulate color of element in the dom
//must use "getComputedStyle" to extract the current color
//we can change the color using element.style.color;

function extractElColorById(elID) {
  let el = document.getElementById(elID);
  return getComputedStyle(el).color;
}
