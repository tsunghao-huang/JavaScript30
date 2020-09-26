const baseURL = 'https://github.com/tsunghao-huang/JavaScript30';

let projectTitles = [
    '01 - JavaScript Drum Kit',
    '02 - JS and CSS Clock',
    '03 - CSS Variables',
    '04 - Array Cardio Day 1',
    '05 - Flex Panel Gallery',
    '06 - Type Ahead',
    '07 - Array Cardio Day 2',
    '08 - Fun with HTML5 Canvas',
    '09 - Dev Tools Domination',
    '10 - Hold Shift and Check Checkboxes',
    '11 - Custom Video Player',
    '12 - Key Sequence Detection',
    '13 - Slide in on Scroll',
    '14 - JavaScript References VS Copying',
    '15 - LocalStorage',
    '16 - Mouse Move Shadow',
    '17 - Sort Without Articles',
    '18 - Adding Up Times with Reduce',
    '19 - Webcam Fun',
    '20 - Speech Detection',
    '21 - Geolocation',
    '22 - Follow Along Link Highlighter',
    '23 - Speech Synthesis',
    '24 - Sticky Nav',
    '25 - Event Capture, Propagation, Bubbling and Once',
    '26 - Stripe Follow Along Nav',
    '27 - Click and Drag',
    '28 - Video Speed Controller',
    '29 - Countdown Timer',
    '30 - Whack A Mole'
]

projects = projectTitles.map(title => {
    return {
        title: title,
        demo: `https://tsunghao-huang.github.io/JavaScript30/${title}`,
        code: `https://github.com/tsunghao-huang/JavaScript30/tree/master/${title}/`,
        preview: `./${title}/preview.png`
    }
});



const projectGrids = document.querySelector('#project-grids');
let p = document.createElement('p');
let demoURL = document.createElement('a');

let gridContent = '';

projects.forEach(pj => {
    gridContent += `
        <div class="project project-tile">
            <img class="project-image" src="${pj.preview}" alt="preview image of ${pj.title.slice(5)}" onerror="this.onerror=null;this.src='./preview-not-available.png';">
            <p class="project-title">${pj.title}</p>
            <div class="demo-code-btns">
                <a class="demo-btn" href="${pj.demo}" target="_blank">
                    <i class="fa fa-laptop"></i> Demo
                </a>
                <a class="code-btn" href="${pj.code}" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    `
})

projectGrids.innerHTML = gridContent;






