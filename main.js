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
    // const renderLabel = document.createElement('h3')
    // renderLabel.setAttribute("class", "selectScheme");
    // renderLabel.innerHTML = 'Select a Color Scheme';
    // renderLabel.style.marginTop = '15px';
    // document.getElementById('render').appendChild(renderLabel);
    document.getElementById('schemeSelect').style.display = 'flex';
    //Create a dropdown menu

    // const dropdown = document.createElement('select');
    // dropdown.setAttribute('action', '#');
    // dropdown.setAttribute('name', 'colorScheme')
    // const dropdownLabel = document.createElement('label');
    // dropdownLabel.setAttribute('for', 'schemes');

    // const dropdownSelect = document.createElement('select');
    // dropdownSelect.setAttribute('name', 'colorSchemes');

    // const dropdownInput = document.createElement('input');
    // dropdownInput.setAttribute('type', 'submit');
    // dropdownInput.setAttribute('value', 'Submit');
    // dropdownInput.setAttribute('id', 'submit');

    // const option0 = document.createElement('option');
    // option0.setAttribute('value', '');
    // option0.innerHTML = 'Select One...';
    // const option1 = document.createElement('option');
    // option1.setAttribute("value", "complementary");
    // option1.innerHTML = 'Complementary';
    // const option2 = document.createElement('option');
    // option2.setAttribute("value", "triadic");
    // option2.innerHTML = 'Triadic';
    // const option3 = document.createElement('option');
    // option3.setAttribute("value", "tetradic");
    // option3.innerHTML = 'Tetradic';
    // const option4 = document.createElement('option');
    // option4.setAttribute('value', 'analogous');
    // option4.innerHTML = 'Analogous';

    // dropdownSelect.appendChild(option0);
    // dropdownSelect.appendChild(option1);
    // dropdownSelect.appendChild(option2);
    // dropdownSelect.appendChild(option3);
    // dropdownSelect.appendChild(option4);
    // dropdown.appendChild(dropdownSelect);

    // dropdown.appendChild(dropdownLabel);
    // dropdown.appendChild(dropdownInput);

    // document.getElementById('schemeSelect').appendChild(dropdownSelect);
    const dropdownSelect = document.getElementById("ice-cream");
    dropdownSelect.addEventListener('change', (event)=>{
      console.log('you made a change!');
      let colorScheme = event.target.value;
      document.body.style.height = '900px';
      document.getElementById('palettes').style.display = 'flex';
    })

    // if event.target.value = "complementary"
      //create one box and set its color vato complementary function
    //if event.target.value = "ti"
    // dropdownInput.addEventListener('click', function () {
    //   document.body.style.height = '850px';
    //   const scheme = dropdownInput.value;
    //   if(scheme === option2){
    //     console.log('test');
    //   }

    // });
  }) 
});

function RGBToHSL(r, g, b) {
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
