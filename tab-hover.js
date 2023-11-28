//-------------------
// TAB HOVER (Industries)
document.addEventListener("DOMContentLoaded", () => {
  let industriesTab = document.querySelectorAll(".fwd-industries-tab");

  console.log("Running tab-hover script");
  if (industriesTab) {
    industriesTab.forEach((tabEl) => {
      tabEl.addEventListener("mouseover", (e) => {
        console.log("clicked on tab: " + tabEl);
        tabEl.click();
      });
    });
  }
});
