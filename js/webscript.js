const activities = [
    "Go ice skating",
    "Visit a Christmas market",
    "Bake Christmas cookies",
    "Have a Christmas movie marathon",
    "Decorate a Christmas tree",
    "Have a snowball fight (if there's snow!)",
    "Volunteer at a local charity",
    "Go carol singing",
    "Attend a Christmas concert",
    "Have a Christmas-themed dinner party",
    "Build a gingerbread house",
    "Go Christmas shopping",
    "Read a Christmas Carol",
    "Write Christmas cards",
    "Have a hot chocolate night",
    "Watch Elf",
    "Take Cookies to a neighbor or friend"
  ];
  
  const generateButton = document.getElementById('generate-button');
  const activityList = document.getElementById('activity-list');
  
  generateButton.addEventListener('click', () => {
    activityList.innerHTML = '';
    const numActivities = Math.floor(Math.random() * 2) + 4; 
    const uniqueActivities = [];
    while (uniqueActivities.length < numActivities) {
      const randomIndex = Math.floor(Math.random() * activities.length);
      if (!uniqueActivities.includes(activities[randomIndex])) {
        uniqueActivities.push(activities[randomIndex]);
      }
    }
    uniqueActivities.forEach(activity => {
      const activityItem = document.createElement('li');
      activityItem.textContent = activity;
      activityList.appendChild(activityItem);
    });
  });