const changeColor = document.querySelector('.figures');
const colorBtn = document.querySelector('.color');
const color =['blue','green','red','pink','brown','black','yellow','violet'];

const changeShape = document.querySelector('.innerDiv');
const shapeBtn = document.querySelector('.shape');
const shapes = ['circle' ,'triangle','square'];
let shapeIndex = 0;

shapeBtn.addEventListener('click', () => {
   shapeIndex = (shapeIndex + 1 ) % shapes.length;  //
   const newShape = shapes[shapeIndex];
   changeShape.className = `innerDiv ${newShape}`;
})

colorBtn.addEventListener('click', ()=>{
    let randomColor = Math.floor(Math.random() * color.length) ;
    changeColor.style.backgroundColor = color[randomColor]
})