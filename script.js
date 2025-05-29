const apps = [
    { name: "Focus Timer", link: "#" },
    { name: "Daily Habit Tracker", link: "#" },
    { name: "Mindful Unlock", link: "#" }
  ];
  
  const appList = document.getElementById("app-list");
  
  apps.forEach(app => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = app.link;
    a.textContent = app.name;
    a.target = "_blank";
    li.appendChild(a);
    appList.appendChild(li);
  });
  