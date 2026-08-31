(function () {
  var crumb = document.getElementById("breadcrumb");
  var titleEl = document.getElementById("breadcrumb_title");
  var pageEl = document.getElementById("pageTitle");
  if (!crumb || !titleEl || !pageEl) {
    return;
  }
  titleEl.textContent = crumb.getAttribute("brTitle") || "";
  pageEl.textContent = crumb.getAttribute("prTitle") || "";
})();
