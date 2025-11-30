const toggleBtn=document.querySelector('.sidebar-toggle');
const sidebar=document.querySelector('.sidebar');
if(toggleBtn){toggleBtn.addEventListener('click',()=>{sidebar.classList.toggle('hidden');});}
