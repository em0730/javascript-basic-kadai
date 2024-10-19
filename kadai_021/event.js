const btn= document.getElementById('btn');
 const text= document.getElementById('text');
 const txt = document.getElementById('txt');
btn.addEventListener('click', () => {
    text.style.display = 'none';
    setTimeout(() => {
      txt.textContent = ("ボタンをクリックしました");
    }, 2000);    
 });

