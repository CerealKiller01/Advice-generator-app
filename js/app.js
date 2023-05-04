document.addEventListener('DOMContentLoaded',()=>{
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    let numeroAdvice= document.getElementById('numeroAdvice');
    let textoAdvice = document.getElementById('textoAdvice')
    
    let numeroRandom=getRandomIntInclusive(1,90)
    fetch('https://api.adviceslip.com/advice/'+numeroRandom)
    .then(response=>response.json())
    .then(datos=>{
        numeroAdvice.textContent=`Advice #${datos.slip.id}`;
        textoAdvice.textContent=datos.slip.advice;
    })
    
    document.getElementById('btnAdvice').addEventListener('click',()=>{
        let numeroRandom=getRandomIntInclusive(1,100)
        fetch('https://api.adviceslip.com/advice/'+numeroRandom)
        .then(response=>response.json())
        .then(datos=>{
            numeroAdvice.textContent=`Advice #${datos.slip.id}`;
            textoAdvice.textContent=datos.slip.advice;
        })
    })
})