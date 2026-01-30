const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault(); 

    
    document.querySelector('#my-form').style.background = '#ccc'; 

   
    document.querySelector('body').classList.add('bg-dark');

  
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Success</h1>';

  
    btn.style.backgroundColor = '#ff7f50';
    btn.style.color = '#fff';
});