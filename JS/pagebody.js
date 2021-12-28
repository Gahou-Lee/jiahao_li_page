function addEventJumpTo(sorcobjt, destjump) {
  sorcobjt.addEventListener("click", () => {
    window.location = destjump;
  });
}

function addEventScroller(sorcobjt, destobjt) {
  sorcobjt.addEventListener("click", () => {
    destobjt.scrollIntoView();
  });
}

window.onresize = () => {
  pagehead = document.getElementsByClassName("pagehead")[0];
  pagefoot = document.getElementsByClassName("pagefoot")[0];
  pagerest = document.getElementsByClassName("pagerest")[0];
  skipover = document.getElementsByClassName("skipover-content")[0];
  pagerest.style.height = window.innerHeight - pagehead.offsetHeight - pagefoot.offsetHeight +"px";
  skipover.style.height = window.innerHeight - pagehead.offsetHeight - pagefoot.offsetHeight +"px";
}

window.onload = () => {
  window.addEventListener("resize", window.onresize); // window.onresize may not work
  headobjt = document.getElementById("headToResume");
  leftobjt = document.getElementById("leftToResume");
  destobjt = document.getElementById("Resume");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToPapers");
  leftobjt = document.getElementById("leftToPapers");
  destobjt = document.getElementById("Papers");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToPatents");
  leftobjt = document.getElementById("leftToPatents");
  destobjt = document.getElementById("Patents");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToAwards");
  leftobjt = document.getElementById("leftToAwards");
  destobjt = document.getElementById("Awards");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToNetLabX");
  leftobjt = document.getElementById("leftToNetLabX");
  destobjt = document.getElementById("NetLabX");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToEDAvSys");
  leftobjt = document.getElementById("leftToEDAvSys");
  destobjt = document.getElementById("EDAvSys");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  headobjt = document.getElementById("headToNews");
  leftobjt = document.getElementById("leftToNews");
  destobjt = document.getElementById("News");
  addEventScroller(leftobjt, destobjt);
  addEventScroller(headobjt, destobjt);
  sorcobjt = document.getElementById("jumpToEn");
  addEventJumpTo(sorcobjt, "./index_en.html");
  sorcobjt = document.getElementById("jumpToZh");
  addEventJumpTo(sorcobjt, "./index_zh.html");
  window.onresize();
}