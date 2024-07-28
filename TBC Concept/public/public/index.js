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

    // onclick footer-responsive

    const footerDropdownElements = document.querySelectorAll('.footer-dropdown');

    footerDropdownElements.forEach(element => {

    const footerDropdownElement = document.querySelector(`.${element.classList[1]}`);

    let isActiveDropdown = false

    footerDropdownElement.addEventListener('click', function () {
    const footerDropdownDivElement = document.querySelector(`.${element.classList[1]}-div`);

    const footerDropdownItem = footerDropdownDivElement.querySelector('.footer-dropdown-item');

    const footerDropDownImg = document.querySelector(`.${element.classList[1]}-img`)
      

    if (!isActiveDropdown) {
      footerDropdownItem.style.height = 'auto';
      footerDropdownItem.style.display = 'block';

      footerDropDownImg.style.transform = 'rotate(180deg)';
      footerDropDownImg.style.transformOrigin = '';

      isActiveDropdown = true;
    } else {
    
      footerDropdownItem.style.height = '0';
      footerDropdownItem.style.display = 'none';

      footerDropDownImg.style.transform = 'rotate(0deg)';
      footerDropDownImg.style.transformOrigin = '';
      
      isActiveDropdown = false;
    }

    });
  });

  // navbar on click

  const navBarBtnElement = document.querySelector(`.navbar-btn-div`)

  let navBarActive = false;

navBarBtnElement.addEventListener("click", navBarBtnhandle);

function navBarBtnhandle() {
  const navBarLineTop = document.querySelector('.navbar-line-1');
  const navBarLineMid = document.querySelector('.navbar-line-2');
  const navBarLineBot = document.querySelector('.navbar-line-3');
  
  navBarBtnElement.classList.toggle('active');
  
  navBarLineTop.classList.toggle('active');
  navBarLineMid.classList.toggle('active');
  navBarLineBot.classList.toggle('active');

  navBarActive = navBarBtnElement.classList.contains('active');

  if (navBarActive) {
    console.log("Active");
  } else {
    console.log("Inactive");
  }
}


  //*
    

    // start grabbable flex

    function makeScrollableWithDrag(element) {
      let isDragging = false;
      let startX, scrollLeft;
  
      element.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.pageX - element.offsetLeft;
          scrollLeft = element.scrollLeft;
      });
  
      element.addEventListener('mouseleave', () => {
          isDragging = false;
      });
  
      element.addEventListener('mouseup', () => {
          isDragging = false;
      });
  
      element.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - element.offsetLeft;
          const walk = (x - startX) * 2.5; 
          element.scrollLeft = scrollLeft - walk;
      });
    }
    
    const offerFlexElement = document.querySelector('.offers-flex');
    const awardsFlexElement = document.querySelector('.award-item-flex');
    
    makeScrollableWithDrag(offerFlexElement);
    makeScrollableWithDrag(awardsFlexElement);
    // end grabbable flex

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
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0007 4.66675H7.00065C4.42232 4.66675 2.33398 6.75508 2.33398 9.33342V18.6784C2.33398 21.2568 4.42232 23.3451 7.00065 23.3451H21.0007C23.579 23.3451 25.6673 21.2568 25.6673 18.6784V9.33342C25.6673 6.75508 23.579 4.66675 21.0007 4.66675ZM21.0007 7.00008C21.1407 7.00008 21.269 7.02342 21.409 7.03508L14.0007 11.4801L6.56898 7.04675C6.70898 7.02341 6.86065 7.00008 7.01232 7.00008H21.0123H21.0007ZM23.334 18.6784C23.334 19.9618 22.284 21.0117 21.0007 21.0117H7.00065C5.71732 21.0117 4.66732 19.9618 4.66732 18.6784V9.33342C4.66732 9.11175 4.71398 8.90175 4.77232 8.69175L13.4057 13.8484C13.5923 13.9534 13.7907 14.0117 14.0007 14.0117C14.2107 14.0117 14.4207 13.9534 14.5957 13.8484L23.2173 8.66841C23.2756 8.87842 23.3223 9.10008 23.3223 9.33342V18.6784H23.334Z"></path>
            </svg>
          </div>
        </div>
        <div class="comment-div mail-drop-div">
          <div class="button-menu_tooltip">
            <div class="button-menu_tooltip-text">${textBtnDiv[0]}</div>
            <div class="button-menu_tooltip-arrow w-embed">
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="comment-flex">
        <a class="drop-btn-item call-drop" href="tel:+995 32 2 27 27 00">
          <div class="drop-btn-svg">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0007 25.6666C7.58398 25.6666 2.33398 20.4166 2.33398 13.9999C2.33398 7.58325 7.58398 2.33325 14.0007 2.33325C20.4173 2.33325 25.6673 7.58325 25.6673 13.9999C25.6673 15.8666 25.3173 17.6166 24.5007 19.1333C24.2673 19.7166 23.5673 19.9499 22.984 19.7166C22.4007 19.4833 22.1673 18.7833 22.4007 18.1999C23.1007 16.9166 23.334 15.5166 23.334 13.9999C23.334 8.86658 19.134 4.66659 14.0007 4.66659C8.86732 4.66659 4.66732 8.86658 4.66732 13.9999C4.66732 18.7833 8.28398 22.6333 12.834 23.2166V22.1666C12.834 21.4666 13.3007 20.9999 14.0007 20.9999C14.7007 20.9999 15.1673 21.4666 15.1673 22.1666V24.4999C15.1673 25.1999 14.7007 25.6666 14.0007 25.6666ZM9.33398 18.6666C8.98398 18.6666 8.63398 18.5499 8.40065 18.1999C7.46732 16.9166 7.00065 15.5166 7.00065 13.9999C7.00065 12.4833 7.46732 10.9666 8.40065 9.79992C8.75065 9.33325 9.56732 9.21658 10.034 9.56658C10.5007 9.91658 10.6173 10.7333 10.2673 11.1999C9.68398 12.0166 9.33398 12.9499 9.33398 13.9999C9.33398 15.0499 9.68398 15.9833 10.2673 16.7999C10.6173 17.2666 10.5007 18.0833 10.034 18.4333C9.80065 18.5499 9.56732 18.6666 9.33398 18.6666ZM18.6673 18.6666C18.434 18.6666 18.2007 18.5499 17.9673 18.4333C17.5007 18.0833 17.384 17.2666 17.734 16.7999C18.3173 15.9833 18.6673 15.0499 18.6673 13.9999C18.6673 12.9499 18.3173 12.0166 17.734 11.1999C17.384 10.7333 17.5007 9.91658 17.9673 9.56658C18.434 9.21658 19.2506 9.33325 19.6006 9.79992C20.534 10.9666 21.0007 12.4833 21.0007 13.9999C21.0007 15.5166 20.534 17.0333 19.6006 18.1999C19.3673 18.4333 19.0173 18.6666 18.6673 18.6666Z"></path>
            </svg>
          </div>
        </a>
        <div class="comment-div call-drop-div">
          <div class="button-menu_tooltip">
            <div class="button-menu_tooltip-text">${textBtnDiv[1]}</div>
            <div class="button-menu_tooltip-arrow w-embed">
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="comment-flex">
        <a class="drop-btn-item location-drop" href="https://tbcconcept.ge/ge/concept-space/concept-branches">
          <div class="drop-btn-svg">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2.33334C9.49665 2.33334 5.83331 5.99668 5.83331 10.5C5.83331 17.115 11.9466 24.5117 12.2033 24.8267C12.6466 25.3633 13.3 25.6667 14 25.6667C14.6883 25.6667 15.3533 25.3517 15.7966 24.8267C16.0533 24.5117 22.1666 17.08 22.1666 10.5C22.1666 5.99668 18.5033 2.33334 14 2.33334ZM14 23.3333C14 23.3333 8.16665 16.345 8.16665 10.5C8.16665 7.28001 10.78 4.66668 14 4.66668C17.22 4.66668 19.8333 7.28001 19.8333 10.5C19.8333 16.31 14 23.3333 14 23.3333ZM14 7.00001C12.075 7.00001 10.5 8.57501 10.5 10.5C10.5 12.425 12.075 14 14 14C15.925 14 17.5 12.425 17.5 10.5C17.5 8.57501 15.925 7.00001 14 7.00001ZM14 11.6667C13.3583 11.6667 12.8333 11.1417 12.8333 10.5C12.8333 9.85834 13.3583 9.33334 14 9.33334C14.6416 9.33334 15.1666 9.85834 15.1666 10.5C15.1666 11.1417 14.6416 11.6667 14 11.6667Z"></path>
            </svg>
          </div>
        </a>
        <div class="comment-div location-drop-div">
          <div class="button-menu_tooltip">
            <div class="button-menu_tooltip-text">${textBtnDiv[2]}</div>
            <div class="button-menu_tooltip-arrow w-embed">
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87662 14.8284L1.12339 20.8284C0.404095 21.5786 7.66111e-07 22.596 8.12483e-07 23.6569L2.04844e-07 0.343145C2.51216e-07 1.40401 0.404094 2.42143 1.12339 3.17157L6.87661 9.17157C8.37446 10.7337 8.37446 13.2663 6.87662 14.8284Z" fill="#424A4D"></path>
              </svg>
            </div>
          </div>
        </div>
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

      if(menuMailElement) {
        
      
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
        "ვეთახნმები წესებს და პირობებს",
        "აუცილებელი ველი",
        "ტელეფონის ნომრის მინიმალური სიგრძე უნდა იყოს 9 ციფრი",
        "ელფოსტის მისამართი არ არის ვალიდური",
        "მონიშნეთ Checkbox-ი"
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
        "Required field",
        "Phone number min length should be 9 digits",
        "Email address is invalid",
        "Checkbox must be marked"
      ];

      let popUpAdded = false;
      var popUpText = [];
      currentLeanguage === "Eng" ? popUpText = popUpTextEng : popUpText = popUpTextGeo;
      const mailBtnElement = document.querySelector(".mail-drop");
      const popUpElement = document.querySelector('header');

      function checkhandle() {
        let isCheckBoxActive = false;
        const checkBoxElement = document.querySelector('.checkbox');

        checkBoxElement.addEventListener("change", function() {
            checkboxActivation();
        });

        function checkboxActivation() {
            if (!isCheckBoxActive) {
              checkBoxElement.style.backgroundColor = 'blue';
              checkBoxElement.style.backgroundImage = 'url("https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg")'; 
              checkBoxElement.style.backgroundSize = 'cover';
              checkBoxElement.style.border = "0.8px solid blue";
              
              const errorContent = document.querySelector('.checkbox-error');
              if (errorContent) {
                errorContent.classList.remove('show');
              }
            
              isCheckBoxActive = true;
          } else {
              checkBoxElement.style.backgroundColor = '';
              checkBoxElement.style.backgroundImage = '';
              checkBoxElement.style.backgroundSize = '';
              checkBoxElement.style.border = "";

              const checkboxErrorElement = document.querySelector('.checkbox-error-div');

              const errorContent = checkboxErrorElement.querySelector('.checkbox-error');
                if (errorContent) {
                  errorContent.classList.add('show');
                }

              isCheckBoxActive = false;
          }
        }

      }

      mailBtnElement.addEventListener("click", function() {
        popUpElement.insertAdjacentHTML("beforeend", popUpSection)
        const addedContent = document.querySelector(".form-popup-wrap");

        const popUpCloseElement = document.querySelector('.popup-close')

        popUpCloseElement.addEventListener("click", function() {
          addedContent.remove()
        })

        
        
      // Required Fields


      // Letter Counter in textarea

        const textareaElement = document.querySelector('.text-input');
        const letterCountElement = document.querySelector('.letter-count');
        const textAreaLabelElement = textareaElement.nextElementSibling;

        function getTextLength() {
          if (textareaElement) {
            const currentText = textareaElement.value;
            const textLength = currentText.length;
            letterCountElement.textContent = `${textLength} / 100`;
            return textLength;
          } else {
            console.error('Textarea element not found.');
            return 0; 
          }
        }

        
        getTextLength();

        textareaElement.addEventListener('input', getTextLength);

        textareaElement.addEventListener('focus', function() {
          textAreaLabelElement.style.top = '15px';
          textAreaLabelElement.style.fontSize = '12px';
        });

        textareaElement.addEventListener('blur', function() {
          const textLength = getTextLength();

          if (textLength > 0) {
            textAreaLabelElement.style.top = '15px';
            textAreaLabelElement.style.fontSize = '12px';
          } else {
            textAreaLabelElement.style.top = '50%';
            textAreaLabelElement.style.fontSize = '16px';
            textAreaLabelElement.style.bordercolor = "red";
          }
        });

        // send button handle 

        const inputList = ["name-surname", "number", "email", "text-input"];

        function checkAllInputsFilled() {
          for (var i = 0; i < inputList.length; i++) {
            const className = inputList[i];
            const inputElement = document.querySelector(`.${className}`);
            
            if (!inputElement) {
              return false;
            }

          const value = inputElement.value.trim();

          if (className === 'number') {
            if (!/^\d{9,}$/.test(value)) {
              return false;
            }
          } else if (className === 'email') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              return false;
            }
          } 
        }
        return true;
        
      }


      function mailSuccessfullySent() {
        const middlePopUpSectionElement = document.querySelector('.mid-popup-section');
        const middlePopUpelement = document.querySelector('.mid-popup-flex');
        const bottomPopUpElement = document.querySelector('.bottom-popup-flex');
    
        if (middlePopUpSectionElement) {
            const originalMiddlePopUpelementHTML = middlePopUpelement ? middlePopUpelement.innerHTML : '';
            const originalBottomPopUpElementHTML = bottomPopUpElement ? bottomPopUpElement.innerHTML : '';
    
            if (middlePopUpelement) {
                middlePopUpelement.remove();
            }
            if (bottomPopUpElement) {
                bottomPopUpElement.remove();
            }

            if(currentLeanguage === "Geo") {
              middlePopUpSectionElement.innerHTML = mailSentGeo;
            } else {
              middlePopUpSectionElement.innerHTML = mailSentEng;
            }
            
    
            setTimeout(() => {
                middlePopUpSectionElement.innerHTML = '';
                if (originalMiddlePopUpelementHTML) {
                    const newMiddlePopUpelement = document.createElement('div');
                    newMiddlePopUpelement.className = 'mid-popup-flex';
                    newMiddlePopUpelement.innerHTML = originalMiddlePopUpelementHTML;
                    middlePopUpSectionElement.appendChild(newMiddlePopUpelement);
                }
    
                if (originalBottomPopUpElementHTML) {
                    const newBottomPopUpElement = document.createElement('div');
                    newBottomPopUpElement.className = 'bottom-popup-flex';
                    newBottomPopUpElement.innerHTML = originalBottomPopUpElementHTML;
                    middlePopUpSectionElement.appendChild(newBottomPopUpElement);
                    
                }
                handleEvents();
                checkhandle();

            }, 5000);


          }
        } 
    
    


      function handleInputChange() {
        const allInputsFilled = checkAllInputsFilled();
        console.log(allInputsFilled)
        const sendBtnElement = document.querySelector(".send-info-button");
        const checkBoxElement = document.querySelector('.checkbox')
    
        if (allInputsFilled && checkBoxElement.checked) {
            sendBtnElement.style.backgroundImage = "linear-gradient(15deg, #001682, #3240e5)";
            sendBtnElement.style.borderColor = "blue";
            sendBtnElement.style.color = "white";
            sendBtnElement.style.cursor = "pointer";
            sendBtnElement.setAttribute('type', 'submit');

            sendBtnElement.addEventListener('click', mailSuccessfullySent)


        } else {
            sendBtnElement.style.backgroundImage = "";
            sendBtnElement.style.borderColor = "";
            sendBtnElement.style.color = "";
            sendBtnElement.style.cursor = "not-allowed";
            sendBtnElement.removeAttribute('type');
        }
    }


    handleEvents();
    checkhandle();

    function handleEvents(){
      
        const inputContainer = document.querySelector('.mid-popup-flex');
        if (inputContainer) {
          const inputs = inputContainer.querySelectorAll('input, textarea, .checkbox');
          
          inputs.forEach(input => {
            input.addEventListener('input', handleInputChange);
          });
        }

        const infoInputElements = document.querySelectorAll('.info-input')

        infoInputElements.forEach(element => {

          function errorhandle() {

            if(element.classList[1] === "company") {

            } else if (element.classList[1] === "number") {
              const errorPElement = document.querySelector(`.${element.classList[1]}-p`);
              const inputLength = element.value.length;
          
              if (inputLength === 0) {
                errorPElement.innerHTML = popUpText[9];
              } else if (inputLength < 9) {
                errorPElement.innerHTML = popUpText[10];
              } else {
                errorPElement.innerHTML = '';
              }
          
            } else if (element.classList[1] === "email") {
              const errorPElement = document.querySelector(`.${element.classList[1]}-p`);
              const inputLength = element.value.length;
          
              if (inputLength === 0) {
                errorPElement.innerHTML = popUpText[9];
              } else if (!validateEmail(element.value)) {
                errorPElement.innerHTML = popUpText[11];
              } else {
                errorPElement.innerHTML = '';
              }
          
            } else {
              const errorPElement = document.querySelector(`.${element.classList[1]}-p`);
              const inputLength = element.value.length;
          
              if (inputLength === 0) {
                errorPElement.innerHTML = popUpText[9];
              } else {
                errorPElement.innerHTML = '';
              }
            }

              function validateEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
              }
            }

            element.addEventListener('blur', errorhandle)
            element.addEventListener('focus', errorhandle)
            

          })  
        }     

        });

      const popUpSection = ` 
        <form class="form-popup-wrap " id="popup-for">
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
                  <div class="input-wapper ">
                    <div class="input-color name&surname-input" >
                      <input type="text" maxlength="256" required="required" class="info-input name-surname" placeholder=" " name="infoName">
                      <label>${popUpText[2]}</label>
                    </div>
                    <p class="input-error-message name-surname-p"></p>
                  </div>
                  <div class="input-wapper">
                    <div class="input-color number-input">
                      <input type="number" min="100000000" required class="info-input number" placeholder=" " name="infoNumber">

                      <label>${popUpText[3]}</label>
                    </div>
                    <p class="input-error-message number-p"></p>
                  </div>
                  <div class="input-wapper">
                    <div class="input-color email-input">
                      <input type="email" maxlength="256" required="required" class="info-input email" placeholder=" " name="infoEmail">
                      <label>${popUpText[4]}</label>
                    </div>
                    <p class="input-error-message email-p"></p>
                  </div>
                  <div class="input-wapper">
                    <div class="input-color company-input">
                      <input type="text" maxlength="256" class="info-input company" placeholder=" " name="infoCompany">
                      <label>${popUpText[5]}</label>
                    </div>
                    
                  </div>
                  <div class="input-wapper">
                    <div class="input-color text-input-div">
                      <textarea maxlength="256" required="required" class="info-input text-input" name="infoText"></textarea>
                      <label>${popUpText[6]}</label>
                      <span class='letter-count infoText-p'> </span>
                    </div>
                    <p class="input-error-message text-input-p"></p>
                  </div>
                  <div class='checkbox-error-div'>
                    <div class="checkbox-error show">
                      <img  class='checkbox-error-img' src="../assets/warning.png">
                      <p class="checkbox-error-msg"> ${popUpText[12]} </p>
                    </div>
                  </div>
                  <div class="checkbox-wrapper">
                    <input  type="checkbox" required="required" class="checkbox"> 
                    <span class="checkbox-message">${popUpText[8]}</span>
                  </div>
                </div>
              </div>
              <div class="bottom-popup-section">
                <div class="bottom-popup-flex">
                  <button class="send-info-button">
                    <div class="arrow-icon">
                      <svg data-v-e6dc0f1c="" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-e6dc0f1c="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>
                    </div>
                    <div class="send-btn-text">${popUpText[7]}</div>
                  </button>
                </div>
              </div>
            </div>
          </form>
      `

      const mailSentGeo =
       `
        <div class="mail-sent-div">
          <div class="mail-sent-logo">
            <img data-v-e6dc0f1c="" src="https://cdn0.iconfinder.com/data/icons/shift-symbol/32/Complete_Symbol-512.png" loading="lazy" width="72" height="72" alt="Done" class="popup-form_success-icon">
          </div>
          <div class="mail-sent-message">
            <h2 class="mail-sent-title"> წარმატებით გაიგზავნა</h2>
            <p> დაგიკავშირდებით </p>
          </div>
        </div>
      `
      const mailSentEng =
       `
        <div class="mail-sent-div">
          <div class="mail-sent-logo">
            <img data-v-e6dc0f1c="" src="https://cdn0.iconfinder.com/data/icons/shift-symbol/32/Complete_Symbol-512.png" loading="lazy" width="72" height="72" alt="Done" class="popup-form_success-icon">
          </div>
          <div class="mail-sent-message">
            <h2 class="mail-sent-title"> Message Sent succesfully </h2>
            <p> We'll be in touch </p>
          </div>
        </div>
      `

    }
    
    }); 

      
});

       const menuDefaultIcon = `
       <svg data-v-42e74cda="" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-42e74cda="" d="M12 8C13.65 8 15 6.65 15 5C15 3.35 13.65 2 12 2C10.35 2 9 3.35 9 5C9 6.65 10.35 8 12 8ZM12 9C10.35 9 9 10.35 9 12C9 13.65 10.35 15 12 15C13.65 15 15 13.65 15 12C15 10.35 13.65 9 12 9ZM12 16C10.35 16 9 17.35 9 19C9 20.65 10.35 22 12 22C13.65 22 15 20.65 15 19C15 17.35 13.65 16 12 16Z"></path></svg>
       `

       const menuActiveIcon = `
       <svg data-v-42e74cda="" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-42e74cda="" d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path><mask data-v-42e74cda="" id="mask0_907_111854" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="13" style="mask-type: luminance;"><path data-v-42e74cda="" d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path></mask><g data-v-42e74cda="" mask="url(#mask0_907_111854)"></g></svg>
       `

       const headerMenu = 
       `
        <div class="mid-footer-responsive">
                <div class="footer-dropdown footer-products">
                  <a data-v-174d8ed1="" href="/ge/products/overview" class="footer_dropdown-toggle-kink"> <h2> პროდუქტები </h2></a>
                  <div>
                    <svg data-v-174d8ed1="" width="28" height="29" viewbox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="#141719"></path><mask data-v-174d8ed1="" id="mask0_167_5088" maskunits="userSpaceOnUse" x="5" y="10" width="18" height="9" style="mask-type: luminance;"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="white"></path></mask><g data-v-174d8ed1="" mask="url(#mask0_167_5088)"></g></svg>
                  </div>
                </div>
                <div class="footer-dropdown footer-lifestyle">
                  <a data-v-174d8ed1="" href="/ge/products/overview" class="footer_dropdown-toggle-kink"> <h2> Lifestyle </h2></a>
                  <div>
                    <svg data-v-174d8ed1="" width="28" height="29" viewbox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="#141719"></path><mask data-v-174d8ed1="" id="mask0_167_5088" maskunits="userSpaceOnUse" x="5" y="10" width="18" height="9" style="mask-type: luminance;"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="white"></path></mask><g data-v-174d8ed1="" mask="url(#mask0_167_5088)"></g></svg>
                  </div>
                </div>
                <div class="footer-dropdown footer-concept-space">
                  <a data-v-174d8ed1="" href="/ge/products/overview" class="footer_dropdown-toggle-kink"> <h2> კოცეპტის სივრცე </h2></a>
                  <div>
                    <svg data-v-174d8ed1="" width="28" height="29" viewbox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="#141719"></path><mask data-v-174d8ed1="" id="mask0_167_5088" maskunits="userSpaceOnUse" x="5" y="10" width="18" height="9" style="mask-type: luminance;"><path data-v-174d8ed1="" d="M13.9986 18.6685C13.7326 18.6685 13.4678 18.5787 13.2519 18.3979L6.25193 12.5645C5.75726 12.1527 5.68959 11.4165 6.10259 10.9219C6.51443 10.4272 7.24943 10.3607 7.74526 10.7725L14.0114 15.9945L20.2671 10.9604C20.7688 10.5567 21.5038 10.636 21.9074 11.1377C22.3111 11.6394 22.2318 12.3732 21.7301 12.778L14.7301 18.4107C14.5166 18.5822 14.2576 18.6685 13.9986 18.6685Z" fill="white"></path></mask><g data-v-174d8ed1="" mask="url(#mask0_167_5088)"></g></svg>
                  </div>
                </div>
                <div class="footer-dropdown footer-contact-us">
                  <div class="footer-info">
                    <div class="footer-title">
                      <a data-v-174d8ed1="" href="/ge/products/overview" class="footer_dropdown-toggle-kink"> <h2> დაგვიკავშირდით: </h2></a>
                    </div>

                    <address class="footer-info-flex">
                      <a class="footer-info-item">
                        <div data-v-174d8ed1="" class="icon w-embed"><svg data-v-174d8ed1="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M11.5987 14.6676C5.93736 14.6676 1.33203 10.0622 1.33203 4.4009C1.33203 2.70956 2.70803 1.33423 4.3987 1.33423C4.57203 1.33423 4.74336 1.3489 4.90936 1.37756C5.07136 1.40356 5.2347 1.4449 5.3927 1.49956C5.61003 1.5749 5.7727 1.7569 5.82403 1.9809L6.73736 5.9569C6.78736 6.17556 6.72403 6.4049 6.5687 6.56756C6.47736 6.66223 6.47536 6.66423 5.6487 7.0969C6.31803 8.54623 7.48136 9.70556 8.90203 10.3522C9.3347 9.5249 9.33736 9.52223 9.43203 9.43156C9.59536 9.27556 9.82537 9.2149 10.0434 9.2629L14.0194 10.1756C14.2427 10.2269 14.4247 10.3896 14.5 10.6062C14.5547 10.7636 14.5954 10.9262 14.6227 11.0936C14.6507 11.2582 14.6654 11.4289 14.6654 11.6009C14.6654 13.2922 13.29 14.6676 11.5987 14.6676Z" fill="#555F62"></path><mask data-v-174d8ed1="" id="mask0_167_7524" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14" style="mask-type: luminance;"><path data-v-174d8ed1="" d="M11.5987 14.6676C5.93736 14.6676 1.33203 10.0622 1.33203 4.4009C1.33203 2.70956 2.70803 1.33423 4.3987 1.33423C4.57203 1.33423 4.74336 1.3489 4.90936 1.37756C5.07136 1.40356 5.2347 1.4449 5.3927 1.49956C5.61003 1.5749 5.7727 1.7569 5.82403 1.9809L6.73736 5.9569C6.78736 6.17556 6.72403 6.4049 6.5687 6.56756C6.47736 6.66223 6.47536 6.66423 5.6487 7.0969C6.31803 8.54623 7.48136 9.70556 8.90203 10.3522C9.3347 9.5249 9.33736 9.52223 9.43203 9.43156C9.59536 9.27556 9.82537 9.2149 10.0434 9.2629L14.0194 10.1756C14.2427 10.2269 14.4247 10.3896 14.5 10.6062C14.5547 10.7636 14.5954 10.9262 14.6227 11.0936C14.6507 11.2582 14.6654 11.4289 14.6654 11.6009C14.6654 13.2922 13.29 14.6676 11.5987 14.6676Z" fill="white"></path></mask><g data-v-174d8ed1="" mask="url(#mask0_167_7524)"></g></svg></div>
                        <p> +995 32 2 27 27 00 </p>
                      </a>
                      <a class="footer-info-item">
                        <div data-v-174d8ed1="" class="icon w-embed"><svg data-v-174d8ed1="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M11.9987 2.66772H3.9987C2.52536 2.66772 1.33203 3.86106 1.33203 5.33439V10.6744C1.33203 12.1477 2.52536 13.3411 3.9987 13.3411H11.9987C13.472 13.3411 14.6654 12.1477 14.6654 10.6744V5.33439C14.6654 3.86106 13.472 2.66772 11.9987 2.66772ZM11.9987 4.00106C12.0787 4.00106 12.152 4.01439 12.232 4.02106L7.9987 6.56106L3.75203 4.02772C3.83203 4.01439 3.9187 4.00106 4.00536 4.00106H12.0054H11.9987Z" fill="#555F62"></path></svg></div>
                        <p> info@tbcconcept.ge </p>
                      </a>
                      <a class="footer-info-item">
                        <div data-v-174d8ed1="" class="icon w-embed"><svg data-v-174d8ed1="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd" d="M2.66797 6.61623C2.66797 3.70356 5.06064 1.33423 8.0013 1.33423C10.942 1.33423 13.3346 3.70356 13.3346 6.61623C13.3346 10.2656 8.6353 14.3356 8.4353 14.5069C8.30997 14.6142 8.15597 14.6676 8.0013 14.6676C7.84664 14.6676 7.69264 14.6142 7.5673 14.5069C7.3673 14.3356 2.66797 10.2656 2.66797 6.61623ZM8.0013 8.66756C6.71464 8.66756 5.66797 7.62089 5.66797 6.33423C5.66797 5.04756 6.71464 4.0009 8.0013 4.0009C9.28797 4.0009 10.3346 5.04756 10.3346 6.33423C10.3346 7.62089 9.28797 8.66756 8.0013 8.66756ZM8.0013 5.33423C7.44997 5.33423 7.0013 5.7829 7.0013 6.33423C7.0013 6.88556 7.44997 7.33423 8.0013 7.33423C8.55264 7.33423 9.0013 6.88556 9.0013 6.33423C9.0013 5.7829 8.55264 5.33423 8.0013 5.33423Z" fill="#555F62"></path><mask data-v-174d8ed1="" id="mask0_167_7533" maskUnits="userSpaceOnUse" x="2" y="1" width="12" height="14" style="mask-type: luminance;"><path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd" d="M2.66797 6.61623C2.66797 3.70356 5.06064 1.33423 8.0013 1.33423C10.942 1.33423 13.3346 3.70356 13.3346 6.61623C13.3346 10.2656 8.6353 14.3356 8.4353 14.5069C8.30997 14.6142 8.15597 14.6676 8.0013 14.6676C7.84664 14.6676 7.69264 14.6142 7.5673 14.5069C7.3673 14.3356 2.66797 10.2656 2.66797 6.61623ZM8.0013 8.66756C6.71464 8.66756 5.66797 7.62089 5.66797 6.33423C5.66797 5.04756 6.71464 4.0009 8.0013 4.0009C9.28797 4.0009 10.3346 5.04756 10.3346 6.33423C10.3346 7.62089 9.28797 8.66756 8.0013 8.66756ZM8.0013 5.33423C7.44997 5.33423 7.0013 5.7829 7.0013 6.33423C7.0013 6.88556 7.44997 7.33423 8.0013 7.33423C8.55264 7.33423 9.0013 6.88556 9.0013 6.33423C9.0013 5.7829 8.55264 5.33423 8.0013 5.33423Z" fill="white"></path></mask><g data-v-174d8ed1="" mask="url(#mask0_167_7533)"></g></svg></div>
                        <p> ფილიალები </p>
                      </a>
                    </address>

                    <p class="footer-header">  სოციალური ქსელები  </p>
                    <div class="social-media-flex">
                      <a class="social-media-item" href="https://www.facebook.com/tbcconcept">  
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_167_7547)">
                            <path d="M9.83464 9.00163H11.5013L12.168 6.33496H9.83464V5.00163C9.83464 4.31496 9.83464 3.66829 11.168 3.66829H12.168V1.42829C11.9506 1.39963 11.13 1.33496 10.2633 1.33496C8.4533 1.33496 7.16797 2.43963 7.16797 4.46829V6.33496H5.16797V9.00163H7.16797V14.6683H9.83464V9.00163Z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_167_7547">
                              <rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a class="social-media-item" href="https://www.instagram.com/tbc_concept/"> 
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-instagram">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

       `
