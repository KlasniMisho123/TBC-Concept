document.addEventListener("DOMContentLoaded", function() {
    const flexLeanguageElement = document.querySelector(".flex-leanguage-element");
    const langSectionElement = document.querySelector(".leanguage-section");

    const engContent = `
        <div class="leanguage-list-wrap">
            <div class="leanguage-list">
                <h4 class="leanguage"> ENG </h4>
            </div>
        </div>
    `;

    const geoContent = `
        <div class="leanguage-list-wrap">
            <div class="leanguage-list">
                <h4 class="leanguage"> ქარ </h4>
            </div>
        </div>
    `;

    let contentAdded = false;

    flexLeanguageElement.addEventListener("mouseover", function() {
        if (!contentAdded) {
            langSectionElement.insertAdjacentHTML('beforeend', engContent);
            contentAdded = true; 
        }
    });

    flexLeanguageElement.addEventListener("mouseleave", function() {
        if (contentAdded) {
            const addedContent = langSectionElement.querySelector(".leanguage-list-wrap");
            if (addedContent) {
                addedContent.remove();
                contentAdded = false;
            }
        }
    });
});
