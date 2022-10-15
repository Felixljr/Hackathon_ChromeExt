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
    const renderLabel = document.createElement('h3')
    renderLabel.setAttribute("class", "selectScheme");
    renderLabel.innerHTML = 'Select a Color Scheme';
    renderLabel.style.marginTop = '15px';
    document.getElementById('render').appendChild(renderLabel);
    //Create a dropdown menu
    // const dropdown = document.createElement('form');
    // const dropdownLabel = document.createElement('label');
    // dropdownLabel.setAttribute('for', 'schemes');
    // const dropdownSelect = document.createElement('select');
    // dropdownSelect.setAttribute('name', 'colorSchemes');

    // const option1 = document.createElement('option');
    // option1.setAttribute("value", "complementary");
    // option1.innerHTML = 'Complementary';
    // const option2 = document.createElement('option');
    // option2.setAttribute("value", "triadic");
    // option2.innerHTML = 'Triadic';
    // const option3 = document.createElement('option');
    // option3.setAttribute("value", "compound");
    // option3.innerHTML = 'Compound';

    // dropdownSelect.appendChild(option1, option2, option3);
    // dropdownLabel.appendChild(dropdownSelect);
    // dropdown.appendChild(dropdownLabel);

    // document.getElementById('render').appendChild('render');

    
    
  
});
