let steps=document.querySelectorAll('.card__steps--number');
let submitBtn=document.querySelector('.card__btn');
let firstCard=document.querySelector('.firstCard');
let selected=document.querySelector('.selected');
let choixNumber=document.querySelector('.selected__choix-number');
let arrayFromSteps=Array.from(steps);



steps.forEach(step=>{
    step.addEventListener('click',(e)=>{
        removeBgFrom(steps);
        addBgTo(e.target);

    })
})


submitBtn.addEventListener('click',()=>{
    firstCard.classList.add('hidden');
    selected.classList.remove('hidden');

    arrayFromSteps.some(step=>{
      if (!step.classList.contains('step-orange')){
        console.log('false')
      }
    })
})


function removeBgFrom(element){
 element.forEach(element=>element.classList.remove('step-orange'))
}


function addBgTo(element){
    element.classList.add('step-orange');
}