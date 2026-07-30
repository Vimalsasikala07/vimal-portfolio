// Terminal boot sequence
const cmd = "Full Stack Java developer building modern web applications";
const cmdEl = document.getElementById('typedCmd1');
const outEl = document.getElementById('compileOut');
let i = 0;
function typeCmd(){
  if(i <= cmd.length){
    cmdEl.textContent = cmd.slice(0, i);
    i++;
    setTimeout(typeCmd, 24);
  } else {
    cmdEl.insertAdjacentHTML('afterend', '<span class="cursor" id="curs"></span>');
    setTimeout(showOutput, 350);
  }
}
function showOutput(){
  const curs = document.getElementById('curs');
  if(curs) curs.remove();
  outEl.style.opacity = '1';
  outEl.innerHTML = `
    <div class="out-name">Vimal <span class="accent">Srinivasan</span></div>
    <div class="out-role">Java Full Stack Developer</div>
    <div class="out-stack">Spring Boot · React · MySQL · REST APIs</div>
  `;
}
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  cmdEl.textContent = cmd;
  showOutput();
} else {
  typeCmd();
}

// reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
