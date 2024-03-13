console.clear();

// Buttons
const selectAudioButton = document.getElementById("select-audio");
const selectAudioButtonText = document.getElementById("select-audio-text");

// Navbar
const navbar = document.querySelector(".nav-container");

// Sections
const heroSection = document.querySelector(".hero-main");

// Intersection Observer
const controlNavbar = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("nav-expand");
    } else {
      navbar.classList.remove("nav-expand");
    }
  });
};

const observer = new IntersectionObserver(controlNavbar);
observer.observe(heroSection);

selectAudioButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".mp3, .wav";

  input.onchange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = (readerEvent) => {
    //   const content = readerEvent.target.result;
    //   const audio = new Audio(content);
    //   audio.play();
    // };
    selectAudioButtonText.textContent = "Selected";
    selectAudioButton.classList.add("light-green-bgcolor");
  };

  input.click();
});
