function getCountVisit() {
  let visitCountStorage = localStorage.getItem("visitCount") || 0;

  visitCountStorage++;

  localStorage.setItem("visitCount", visitCountStorage);

  return visitCountStorage;
}

function getDateStorage() {
  const dateStorage = localStorage.getItem("lastVisitDate") || Date.now();

  localStorage.setItem("lastVisitDate", Date.now());

  return new Date(Number(dateStorage));
}

function getDaysBetweenDates(date1, date2) {
  const diffTime = date1.getTime() - date2.getTime();

  return Math.round(diffTime / (1000 * 3600 * 24));
}

function getVisitorMsg() {
  const countVisit = getCountVisit();
  const dateStorage = getDateStorage();
  const currentDate = new Date();

  if (countVisit == 1) {
    // If this is the user's first visit
    return "Welcome! Let us know if you have any questions.";
  }
  const lastVisitedDaysAgo = getDaysBetweenDates(currentDate, dateStorage);

  if (lastVisitedDaysAgo == 0) {
    // If the amount of time between visits is less than a day
    return "Back so soon! Awesome!";
  }

  const dayLabel = lastVisitedDaysAgo == 1 ? "day" : "days";

  return `You last visited ${lastVisitedDaysAgo} ${dayLabel} ago`; // Otherwise, display the number of days
}

const visitorMsgElem = document.querySelector("#visitor-message");

visitorMsgElem.textContent = getVisitorMsg();
