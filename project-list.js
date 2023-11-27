//-------------------
// PROJECTS LIST
let revealJump = 4;
let initialReveal = 8;
let i = 0;

let cases = document.querySelectorAll(".fwd-work-grid-project");

// convert faq rows node list into array
let casesArray = Array.prototype.slice.call(cases);

if (cases) {
  caseListInit();
}

function caseListInit() {
  i = 0;

  // update cases list elements after filtering
  cases = document.querySelectorAll(".fwd-work-grid-project");
  casesArray = Array.prototype.slice.call(cases);

  // Hide every Project that's not the first x number of rows (x = initialReveal)
  cases.forEach((el) => {
    //i += 1;

    if (i >= initialReveal) {
      el.classList.add("fwd-visibility-hidden");
    } else {
      i++;
    }
  });
}

const loadMoreBtn = document.querySelector(".fwd-load-more");
const showLessBtn = document.querySelector(".fwd-show-less");

let filterBtn = document.querySelectorAll(".fwd-filter-tag");
// note: filterBtn also includes the Clear button

let filterClearC = document.querySelector(".fwd-clear");
let filterClearBtn;

if (filterClearC) {
  filterClearBtn = filterClearC.querySelector(".fwd-button");
}

if (filterBtn && filterClearC) {
  // filter buttons click event - add click event to each filter
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      // remove selection from Clear by default
      filterClearBtn.classList.remove("fwd-selected");

      for (let i = 0; i < filterBtn.length; i++) {
        // check for clicked btn
        if (filterBtn[i] == btn) {
          // differentiate between clear btn and regular filter btn
          // this is because the HTML structure is different for clear
          // so we have to first select its <a> element to then add the selection class
          if (filterBtn[i] == filterClearC) {
            filterClearBtn.classList.add("fwd-selected");
          } else {
            filterBtn[i].classList.add("fwd-selected");
          }
        } else {
          // if element wasn't clicked on, remove the selection class, in case it has it
          filterBtn[i].classList.remove("fwd-selected");
        }
      }

      // expand all content on filter select
      loadMoreContent();
    });
  });
}

if (loadMoreBtn) {
  // add event listener to 'load more' btn
  loadMoreBtn.addEventListener("click", function () {
    loadMoreContent();
  });
}

function loadMoreContent() {
  // iterate through the following next x amount (x = revealJump) cases
  // and reveal them if they exist
  for (let j = 0; j < revealJump; j++) {
    if (casesArray[i]) {
      casesArray[i].classList.remove("fwd-visibility-hidden");
      i++;
    }
  }

  // if all cases revealed, revert
  if (i >= casesArray.length - 1) {
    //hide this button, reveal "Show less"
    loadMoreBtn.classList.add("fwd-hidden");
    showLessBtn.classList.remove("fwd-hidden");
  }
}

if (showLessBtn) {
  // add event listener to 'show less' btn
  showLessBtn.addEventListener("click", function () {
    hideContent();
  });
}

function hideContent() {
  caseListInit();

  //hide this button, reveal "Load more"
  loadMoreBtn.classList.remove("fwd-hidden");
  showLessBtn.classList.add("fwd-hidden");
}
