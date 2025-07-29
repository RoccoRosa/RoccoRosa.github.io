function checkAnswers() {
  const q1 = document.getElementById("q1").value.toLowerCase().trim();
  const q2 = document.getElementById("q2").value.toLowerCase().trim();
  const q3 = document.getElementById("q3").value.toLowerCase().trim();
  const q4 = document.getElementById("q4").value.trim();
  const q5 = document.getElementById("q5").value.toLowerCase().trim();

  if (
    q1 === "gue" &&
    q2 === "nemesi" &&
    q3 === "tiamo" &&
    q4 === "14/03/23" &&
    q5 === "luna"
  ) {
    document.getElementById("result").innerText = "✅ Password corretta!";
    document.getElementById("link").classList.remove("hidden");
  } else {
    document.getElementById("result").innerText = "❌ Qualcosa non torna. Riprova!";
    document.getElementById("link").classList.add("hidden");
  }
}