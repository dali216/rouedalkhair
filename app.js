```javascript
// Supabase configuration
const SUPABASE_URL = "https://wrgarlhqyifluefjhlmi.supabase.co";
const SUPABASE_KEY = "sb_publishable_8EjeRtlucGIG14COM2ASfw_oG5URlgp";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// Demo button
const demo = document.getElementById("demo");

if (demo) {
  demo.onclick = () => {
    location.href = "dashboard.html";
  };
}

// Login
const form = document.getElementById("login");

if (form) {
  form.onsubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    msg.textContent = "Connexion...";

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      msg.textContent = "Erreur : " + error.message;
      return;
    }

    msg.textContent = "Connexion réussie !";
    window.location.href = "dashboar
```
