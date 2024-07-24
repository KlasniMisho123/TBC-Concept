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

    const menuBtnElement = document.querySelector('.btn-menu');
    const menuFlexElement = document.querySelector('.menu-btn-flex');
    const btnMenuIconElement = document.querySelector(".btn-menu-icon")

    // Menu button section

    const dropDownButtonsEng = ["Write to us", "Call centre", "Address"];
    const dropDownButtonsGeo = ["მოგვწერეთ", "ქოლ ცენტრი", "მისამართი"];

    var textBtnDiv = [];
    currentLeanguage === "Eng" ? textBtnDiv = dropDownButtonsEng : textBtnDiv = dropDownButtonsGeo;

    const dropDownButtons = `
<div class="drop-btn-flex">
  <div class="comment-flex">
    <div class="drop-btn-item mail-drop">
      <div class="drop-btn-svg">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.0007 4.66675H7.00065C4.42232 4.66675 2.33398 6.75508 2.33398 9.33342V18.6784C2.33398 21.2568 4.42232 23.3451 7.00065 23.3451H21.0007C23.579 23.3451 25.6673 21.2568 25.6673 18.6784V9.33342C25.6673 6.75508 23.579 4.66675 21.0007 4.66675ZM21.0007 7.00008C21.1407 7.00008 21.269 7.02342 21.409 7.03508L14.0007 11.4801L6.56898 7.04675C6.70898 7.02341 6.86065 7.00008 7.01232 7.00008H21.0123H21.0007ZM23.334 18.6784C23.334 19.9618 22.284 21.0117 21.0007 21.0117H7.00065C5.71732 21.0117 4.66732 19.9618 4.66732 18.6784V9.33342C4.66732 9.11175 4.71398 8.90175 4.77232 8.69175L13.4057 13.8484C13.5923 13.9534 13.7907 14.0117 14.0007 14.0117C14.2107 14.0117 14.4207 13.9534 14.5957 13.8484L23.2173 8.66841C23.2756 8.87842 23.3223 9.10008 23.3223 9.33342V18.6784H23.334Z"></path></svg>
      </div> 
    </div>
    <div class="comment-div mail-drop-div">
      <div  class="button-menu_tooltip">
      <div class="button-menu_tooltip-text ">${textBtnDiv[0]}</div>
      <div  class="button-menu_tooltip-arrow w-embed"><svg  width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path></svg></div></div> 
    </div>
  </div>

  <div class="comment-flex">
    <div class="drop-btn-item call-drop">
      <div class="drop-btn-svg">
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.0007 25.6666C7.58398 25.6666 2.33398 20.4166 2.33398 13.9999C2.33398 7.58325 7.58398 2.33325 14.0007 2.33325C20.4173 2.33325 25.6673 7.58325 25.6673 13.9999C25.6673 15.8666 25.3173 17.6166 24.5007 19.1333C24.2673 19.7166 23.5673 19.9499 22.984 19.7166C22.4007 19.4833 22.1673 18.7833 22.4007 18.1999C23.1007 16.9166 23.334 15.5166 23.334 13.9999C23.334 8.86658 19.134 4.66659 14.0007 4.66659C8.86732 4.66659 4.66732 8.86658 4.66732 13.9999C4.66732 18.7833 8.28398 22.6333 12.834 23.2166V22.1666C12.834 21.4666 13.3007 20.9999 14.0007 20.9999C14.7007 20.9999 15.1673 21.4666 15.1673 22.1666V24.4999C15.1673 25.1999 14.7007 25.6666 14.0007 25.6666ZM9.33398 18.6666C8.98398 18.6666 8.63398 18.5499 8.40065 18.1999C7.46732 16.9166 7.00065 15.5166 7.00065 13.9999C7.00065 12.4833 7.46732 10.9666 8.40065 9.79992C8.75065 9.33325 9.56732 9.21658 10.034 9.56658C10.5007 9.91658 10.6173 10.7333 10.2673 11.1999C9.68398 12.0166 9.33398 12.9499 9.33398 13.9999C9.33398 15.0499 9.68398 15.9833 10.2673 16.7999C10.6173 17.2666 10.5007 18.0833 10.034 18.4333C9.80065 18.5499 9.56732 18.6666 9.33398 18.6666ZM18.6673 18.6666C18.434 18.6666 18.2007 18.5499 17.9673 18.4333C17.5007 18.0833 17.384 17.2666 17.734 16.7999C18.3173 15.9833 18.6673 15.0499 18.6673 13.9999C18.6673 12.9499 18.3173 12.0166 17.734 11.1999C17.384 10.7333 17.5007 9.91658 17.9673 9.56658C18.434 9.21658 19.2506 9.33325 19.6006 9.79992C20.534 10.9666 21.0007 12.4833 21.0007 13.9999C21.0007 15.5166 20.534 17.0333 19.6006 18.1999C19.3673 18.4333 19.0173 18.6666 18.6673 18.6666Z"></path></svg>
      </div> 
    </div>
    <div class="comment-div call-drop-div"> 
      <div class="button-menu_tooltip">
      <div class="button-menu_tooltip-text ">${textBtnDiv[1]}</div>
      <div  class="button-menu_tooltip-arrow w-embed"><svg  width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path></svg></div></div> 
    </div>
  </div>

<div class="comment-flex">
  <div class="drop-btn-item location-drop">
    <div class="drop-btn-svg">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.33334C9.49665 2.33334 5.83331 5.99668 5.83331 10.5C5.83331 17.115 11.9466 24.5117 12.2033 24.8267C12.6466 25.3633 13.3 25.6667 14 25.6667C14.6883 25.6667 15.3533 25.3517 15.7966 24.8267C16.0533 24.5117 22.1666 17.08 22.1666 10.5C22.1666 5.99668 18.5033 2.33334 14 2.33334ZM14 23.3333C14 23.3333 8.16665 16.345 8.16665 10.5C8.16665 7.28001 10.78 4.66668 14 4.66668C17.22 4.66668 19.8333 7.28001 19.8333 10.5C19.8333 16.31 14 23.3333 14 23.3333ZM14 7.00001C12.075 7.00001 10.5 8.57501 10.5 10.5C10.5 12.425 12.075 14 14 14C15.925 14 17.5 12.425 17.5 10.5C17.5 8.57501 15.925 7.00001 14 7.00001ZM14 11.6667C13.3583 11.6667 12.8333 11.1417 12.8333 10.5C12.8333 9.85834 13.3583 9.33334 14 9.33334C14.6416 9.33334 15.1666 9.85834 15.1666 10.5C15.1666 11.1417 14.6416 11.6667 14 11.6667Z"></path></svg> 
    </div>
  </div>
    <div class="comment-div location-drop-div">
      <div  class="button-menu_tooltip">
      <div class="button-menu_tooltip-text ">${textBtnDiv[2]}</div>
      <div  class="button-menu_tooltip-arrow w-embed"><svg  width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path></svg></div></div> 
    </div>
  </div>
 `

    let dropDownButtonsAdded = false;

    menuBtnElement.addEventListener("click", function() {
      if (!dropDownButtonsAdded) {
        menuFlexElement.insertAdjacentHTML("afterbegin", dropDownButtons);
        btnMenuIconElement.innerHTML = menuActiveIcon;
        dropDownButtonsAdded = true;
      } else {
        const addedContent = menuFlexElement.querySelector('.drop-btn-flex');
        if (addedContent) {
          addedContent.remove(); 
        }
        btnMenuIconElement.innerHTML = menuDefaultIcon;
        dropDownButtonsAdded = false;
      }

      const menuMailElement = document.querySelector('.mail-drop');
      const menuLocationElement = document.querySelector('.location-drop');
      const menuCallElement = document.querySelector('.call-drop');
      
      function showDropDown(name) {
          const dropDownElement = document.querySelector(`.${name}-div`);
          dropDownElement.style.opacity = '1';
      }
      
      function hideDropDown(name) {
          const dropDownElement = document.querySelector(`.${name}-div`);
          dropDownElement.style.opacity = '0';
      }

      menuMailElement.addEventListener('mouseover', () => showDropDown('mail-drop'));
      menuMailElement.addEventListener('mouseleave', () => hideDropDown('mail-drop'));

      menuCallElement.addEventListener('mouseover', () => showDropDown('call-drop'));
      menuCallElement.addEventListener('mouseleave', () => hideDropDown('call-drop'));
      
      menuLocationElement.addEventListener('mouseover', () => showDropDown('location-drop'));
      menuLocationElement.addEventListener('mouseleave', () => hideDropDown('location-drop'));

      const popUpTextGeo = [
        "დაგვიკავშირდით",
        "დაგვიკავშირდით",
        "სახელი და გვარი",
        "ნომერი",
        "ელ.ფოსტა",
        "კომპანია",
        "ტექსტი",
        "გაგზავნა",
        "ვეთახნმები წესები და პირობები",
        "აუცილებელი ველი"
      ];

      const popUpTextEng = [
        "Get in touch",
        "Feedback form",
        "FullName",
        "Number",
        "Email",
        "Company",
        "Text",
        "Send",
        "I agree to the terms and conditions",
        "Required field"
      ];

      let popUpAdded = false;
      var popUpText = [];
      currentLeanguage === "Eng" ? popUpText = popUpTextEng : popUpText = popUpTextGeo;
      const mailBtnElement = document.querySelector(".mail-drop");
      const popUpElement = document.querySelector('header');

      mailBtnElement.addEventListener("click", function() {
        popUpElement.insertAdjacentHTML("beforeend", popUpSection)
        const addedContent = document.querySelector(".form-popup-wrap");

        const popUpCloseElement = document.querySelector('.popup-close')

        popUpCloseElement.addEventListener("click", function() {
          addedContent.remove()
        })
      });

      const popUpSection = ` 
      <div class="form-popup-wrap">
          <div class="form-popup">
            <div class="top-popup-section">
              <div class="top-popup-flex">
                <div><h2>${popUpText[0]}</h2></div>
                <div class="popup-close">
                  <div>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.9142 11.9998L18.2072 7.70676C18.5982 7.31576 18.5982 6.68376 18.2072 6.29276C17.8162 5.90176 17.1842 5.90176 16.7933 6.29276L12.5002 10.5858L8.20725 6.29276C7.81625 5.90176 7.18425 5.90176 6.79325 6.29276C6.40225 6.68376 6.40225 7.31576 6.79325 7.70676L11.0862 11.9998L6.79325 16.2928C6.40225 16.6838 6.40225 17.3158 6.79325 17.7068C6.98825 17.9018 7.24425 17.9998 7.50025 17.9998C7.75625 17.9998 8.01225 17.9018 8.20725 17.7068L12.5002 13.4138L16.7933 17.7068C16.9882 17.9018 17.2443 17.9998 17.5002 17.9998C17.7562 17.9998 18.0122 17.9018 18.2072 17.7068C18.5982 17.3158 18.5982 16.6838 18.2072 16.2928L13.9142 11.9998Z" fill="#555F62"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="mid-popup-section">
              <p>${popUpText[1]}</p>
              <div class="mid-popup-flex">
                <div class="input-wapper">
                  <div class="input-color">
                    <input type="text" maxlength="256" required="required" class="name&surname" placeholder=" ">
                    <label>${popUpText[2]}</label>
                  </div>
                  <p class="input-error-message">${popUpText[-1]}</p>
                </div>
                <div class="input-wapper">
                  <div class="input-color">
                    <input type="text" maxlength="256" required="required" class="number" placeholder=" ">
                    <label>${popUpText[3]}</label>
                  </div>
                  <p class="input-error-message">${popUpText[-1]}</p>
                </div>
                <div class="input-wapper">
                  <div class="input-color">
                    <input type="text" maxlength="256" required="required" class="mail" placeholder=" ">
                    <label>${popUpText[4]}</label>
                  </div>
                  <p class="input-error-message">${popUpText[-1]}</p>
                </div>
                <div class="input-wapper">
                  <div class="input-color">
                    <input type="text" maxlength="256" required="required" class="company" placeholder=" ">
                    <label>${popUpText[5]}</label>
                  </div>
                  <p class="input-error-message">${popUpText[-1]}</p>
                </div>
                <div class="input-wapper">
                  <div class="input-color">
                    <textarea maxlength="256" required="required" class="text-input" ></textarea>
                    <label>${popUpText[6]}</label>
                  </div>
                  <p class="input-error-message">${popUpText[-1]}</p>
                </div>
                <div class="checkbox-wrapper">
                  <div class="checkbox">  </div>
                  <span>${popUpText[8]}</span>
                </div>
              </div>
            </div>
            <div class="bottom-popup-section">
              <div class="bottom-popup-flex">
                <button class="send-info-button">
                  <div class="arrow-icon">
                    <svg data-v-e6dc0f1c="" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-e6dc0f1c="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>
                  </div>
                  <div>${popUpText[9]}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      `

      }); 

      
});

       const menuDefaultIcon = `
       <svg data-v-42e74cda="" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-42e74cda="" d="M12 8C13.65 8 15 6.65 15 5C15 3.35 13.65 2 12 2C10.35 2 9 3.35 9 5C9 6.65 10.35 8 12 8ZM12 9C10.35 9 9 10.35 9 12C9 13.65 10.35 15 12 15C13.65 15 15 13.65 15 12C15 10.35 13.65 9 12 9ZM12 16C10.35 16 9 17.35 9 19C9 20.65 10.35 22 12 22C13.65 22 15 20.65 15 19C15 17.35 13.65 16 12 16Z"></path></svg>
       `

       const menuActiveIcon = `
       <svg data-v-42e74cda="" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-42e74cda="" d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path><mask data-v-42e74cda="" id="mask0_907_111854" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="13" style="mask-type: luminance;"><path data-v-42e74cda="" d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path></mask><g data-v-42e74cda="" mask="url(#mask0_907_111854)"></g></svg>
       `