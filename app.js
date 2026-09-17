const demo=document.getElementById('demo'); if(demo) demo.onclick=()=>location.href='dashboard.html';
const form=document.getElementById('login'); if(form) form.onsubmit=e=>{e.preventDefault();document.getElementById('msg').textContent='La connexion Supabase sera activée dans la prochaine étape.'};
