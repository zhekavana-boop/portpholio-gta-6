const $ = id => document.getElementById(id);

function show(d) {
  $("name").textContent = d.name || "Мій профіль";
  $("nick").textContent = d.nick ? "@" + d.nick : "@nickname";
  $("about").textContent = d.about || "Тут буде інформація про мене";
}

$("saveBtn").onclick = () => {
  const d = {
    name: $("nameInput").value,
    nick: $("nickInput").value,
    about: $("aboutInput").value
  };
  show(d);
  try { localStorage.setItem("profile", JSON.stringify(d)); } catch (e) {}
};

try {
  const saved = JSON.parse(localStorage.getItem("profile"));
  if (saved) show(saved);
} catch (e) {}
