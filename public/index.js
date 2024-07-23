document.addEventListener("DOMContentLoaded", function() {
    const flexLeanguageElement = document.querySelector(".flex-leanguage-element");
    const langSectionElement = document.querySelector(".leanguage-section");

    const footerLeanguageLayer = document.querySelector(".footer-language-layer")

    const currentLeanguage = document.querySelector(".leanguage-text").textContent.trim();
    console.log("current language: ",currentLeanguage)

    const engContent = `
      <form action="/en/" method="GET" class="language-form">       
            <div class="leanguage-list-wrap">
              <button class="language-btn">
                <div class="leanguage-list">
                    <h4 class="leanguage"> ENG </h4>
                </div>
              </button> 
            </div>
      </form>
    `;

    const geoContent = `
      <form action="/ge/" method="GET" class="language-form">       
            <div class="leanguage-list-wrap">
              <button class="language-btn">
                <div class="leanguage-list">
                    <h4 class="leanguage"> ქარ </h4>
                </div>
              </button> 
            </div>
      </form>
    `;

    let contentAdded = false;

    flexLeanguageElement.addEventListener("mouseover", function() {
        if (!contentAdded) {
            if(currentLeanguage === "Eng") {
              langSectionElement.insertAdjacentHTML('beforeend', geoContent);
              contentAdded = true;
            } else {
              langSectionElement.insertAdjacentHTML('beforeend', engContent);
              contentAdded = true;
            }
        }
    });

    flexLeanguageElement.addEventListener("mouseleave", function() {
        if (contentAdded) {
            const addedContent = langSectionElement.querySelector(".language-form");
            if (addedContent) {
                addedContent.remove();
                contentAdded = false;
            }
        }
    });

    footerLeanguageLayer.addEventListener("mouseover", function() {
      if (!contentAdded) {
          if(currentLeanguage === "Eng") {
            footerLeanguageLayer.insertAdjacentHTML('beforeend', geoContent);
            contentAdded = true;
          } else {
            footerLeanguageLayer.insertAdjacentHTML('beforeend', engContent);
            contentAdded = true;
          }
      }
    });

    footerLeanguageLayer.addEventListener("mouseleave", function() {
      if (contentAdded) {
          const addedContent = footerLeanguageLayer.querySelector(".language-form");
          if (addedContent) {
              addedContent.remove();
              contentAdded = false;
          }
      }
    });

});
