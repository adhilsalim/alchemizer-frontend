const selectAudioButton = document.getElementById("select-audio");
const selectAudioButtonText = document.getElementById("select-audio-text");

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
