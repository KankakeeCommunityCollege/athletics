// Sets copyright year
const yearSpanEl = document.getElementById('currentYear');

function footerDate() {
  const d = new Date()
  const year = d.getFullYear();

  if (yearSpanEl.innerHTML === `${year}`)
    return;

  yearSpanEl.innerHTML = year;
}

export default footerDate;
