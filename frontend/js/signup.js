async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch("http://localhost:7000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    document.getElementById("output").innerText =
      JSON.stringify(data, null, 2);

    if (res.ok) {
      alert("Signup successful 🎉 Please login");
      window.location.href = "login.html";
    }
  } catch (err) {
    alert("Signup failed");
    console.error(err);
  }
}

window.signup = signup;
