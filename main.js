const btnOpen = document.getElementById('btnOpen');
const btnclose = document.getElementById('btnClose');
const nav = document.getElementById('menu');

btnOpen.addEventListener('click', () => {
    btnOpen.classList.add('hidden');
    nav.classList.remove('hidden');
    nav.classList.add('flex');
    
});

btnclose.addEventListener('click', () =>{
    btnOpen.classList.remove('hidden');
    nav.classList.add('hidden')
    nav.classList.remove('flex')
});
