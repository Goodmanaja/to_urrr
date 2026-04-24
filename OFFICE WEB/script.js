document.addEventListener("click", function(e) {
    const boom = document.createElement("div");
    boom.classList.add("explosion");

    boom.innerHTML = "💥"; // efek ledakan

    boom.style.left = e.clientX + "px";
    boom.style.top = e.clientY + "px";
    boom.style.fontSize = "30px";

    document.body.appendChild(boom);

    setTimeout(() => {
        boom.remove();
    }, 600);
});
// =============================
// SOUND LEDAKAN + EFEK 💥
// =============================
document.addEventListener("click", function(e) {

    // 🔊 MAINKAN SUARA
    const sound = new Audio("boom.mp3");
    sound.volume = 0.5; // atur volume (0 - 1)
    sound.play();

    // 💥 EFEK VISUAL
    for (let i = 0; i < 6; i++) {
        const boom = document.createElement("div");
        boom.classList.add("explosion");
        boom.innerHTML = "💥";

        const offsetX = (Math.random() - 0.5) * 80;
        const offsetY = (Math.random() - 0.5) * 80;

        boom.style.left = (e.clientX + offsetX) + "px";
        boom.style.top = (e.clientY + offsetY) + "px";

        document.body.appendChild(boom);

        setTimeout(() => {
            boom.remove();
        }, 600);
    }
});
const sound = new Audio("boom.mp3");
sound.currentTime = 0;
sound.play();


window.addEventListener("scroll", () => {
    const section = document.getElementById("contact");
    const nav = document.querySelector(".nav-item");

    const position = section.getBoundingClientRect().top;

    if (position < 100 && position > -300) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

// bagian contact //

// efek klik tombol
document.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault();
    this.innerHTML = "Sending...";
    
    setTimeout(() => {
        this.innerHTML = "Sent ✔";
    }, 1500);
});


// bagian video //

document.addEventListener("mousemove", (e) => {
  const video = document.querySelector(".hero-video");

  let x = (window.innerWidth / 2 - e.clientX) / 100;
  let y = (window.innerHeight / 2 - e.clientY) / 100;

  video.style.transform = `translate(-50%, -50%) scale(1.2) translate(${x}px, ${y}px)`;
});

// conten hero //

document.addEventListener("mousemove", (e) => {
  const video = document.querySelector(".hero-video");

  let x = (window.innerWidth / 2 - e.clientX) / 200;
  let y = (window.innerHeight / 2 - e.clientY) / 200;

  video.style.transform =
    `translate(-50%, -50%) scale(1.15) translate(${x}px, ${y}px)`;
});

export default function Marquee() {
  return (
    <div className="w-full bg-[#3a281d] overflow-hidden">
      
      <div className="flex whitespace-nowrap animate-marquee text-white text-xs tracking-widest">
        
        <span className="px-10 py-2">
          SOLUSI MEP TERINTEGRASI • INFRASTRUKTUR EFISIEN • SUSTAINABLE FUTURE •
        </span>

        <span className="px-10 py-2">
          SOLUSI MEP TERINTEGRASI • INFRASTRUKTUR EFISIEN • SUSTAINABLE FUTURE •
        </span>

      </div>

    </div>
  );
}


//PORTOFOLIO TENTANG SAYA//

const words = ["UI/UX Designer", "Web Developer", "Creative Thinker"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent =
    currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();



// TENRTANG SAYA //



window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const position = about.getBoundingClientRect().top;

  if(position < window.innerHeight - 100){
    about.classList.add("show");
  }
});

