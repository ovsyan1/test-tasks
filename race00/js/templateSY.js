'use strict'
// Шаблон калькулятора в index.html
const calcTemplateSY = `
<div class="switch-box">
    <div class="switch">
        <input type="checkbox" class="checkbox">
    </div>
    </div>
    <div class="night-box">
      <div class="night"><div>
        &#9789;</div></div>
    </div>
    <div class="container">
      <div class="ingener hide"></div>
    <div class="box">
      <div class="text" id="display">12345</div>
    </div>
    </div>
`;

// Шаблон дисплея
const displayTemplateSY = `

`;

// Шаблон клавиатуры
const keyboardTemplateSY = `

`;

const templateSY = {
    calc: calcTemplateSY,
    display: displayTemplateSY,
    keyboard: keyboardTemplateSY
}