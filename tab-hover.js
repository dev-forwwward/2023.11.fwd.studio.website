//-------------------
// TAB HOVER (Industries)
let industriesTab = document.querySelectorAll(".fwd-industries-tab");

if (industriesTab) {
  industriesTab.forEach((tabEl) => {
    tabEl.addEventListener("mouseover", (e) => {
      tabEl.click();
    });
  });
}
