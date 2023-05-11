const theme1 = document.querySelector("#theme-1")
const theme2 = document.querySelector("#theme-2")
const theme3 = document.querySelector("#theme-3")
const wrapper = document.querySelector("#wrapper")
const screen = document.querySelector("#screen")
const bgCalculator = document.querySelector("#bg-calculator")
const littleButtons = document.querySelector("#little-buttons")
const btns = document.querySelectorAll(".btn")
const delReset = document.querySelectorAll(".del-reset")
const delResetParagraph = document.querySelectorAll(".del-reset p")
const p = document.querySelectorAll(".paragraph")
const equal = document.querySelector("#equal")
const equalParagraph = document.querySelector("#equal p")
const screenNumber = document.querySelector("#screen-number")
const deleteBtn = document.querySelector("#delete")
const reset = document.querySelector("#reset")


function themeChoice (theme) {
    theme.addEventListener("click", () => {
        if (theme === theme2) {
            //toggle
            theme.classList.add("toggle-color-t2")
            theme1.classList.remove("toggle-color-t1")
            theme3.classList.remove("toggle-color-t3")

            //bg-color style
            modifyingStyles(wrapper, "bg-color-t2", "bg-color-t1", "bg-color-t3")
            modifyingStyles(wrapper, "principal-text-color-t2", "principal-text-color-t1", "principal-text-color-t3")

            //screen
            modifyingStyles(screen, "screen-bg-t2", "screen-bg-t1", "screen-bg-t3")

            //bg calculator
            modifyingStyles(bgCalculator, "bg-calculator-t2", "bg-calculator-t1", "bg-calculator-t3")

            //little Buttons 
            modifyingStyles(littleButtons, "secondary-text-color-t2", "secondary-text-color-t1", "secondary-text-color-t3")

            //bnts
            btns.forEach(btn => {
                modifyingStyles(btn, "bg-key-number-t2", "bg-key-number-t3", "bg-key-number-t1")
            })

            //Delete and reset
            delReset.forEach(btn => {
                modifyingStyles(btn, "reset-del-button-bg-t2", "reset-del-button-bg-t3", "reset-del-button-bg-t1")
            })

            //paragraph delete and reset
            delResetParagraph.forEach(paragraph => {
                modifyingStyles(paragraph, "secondary-text-color-t2", "principal-text-color-t1", "secondary-text-color-t3")
            })

            // paragraph
            p.forEach(p => {
                modifyingStyles(p, "principal-text-color-t2", "principal-text-color-t3", "secondary-text-color-t1")
            })

            //equal
            modifyingStyles(equal, "equal-button-bg-t2", "equal-button-bg-t3", "equal-button-bg-t1")
            modifyingStyles(equalParagraph,null,"third-text-color-t3")
        
        } else if (theme === theme3) {
            // toggle 
            theme.classList.add("toggle-color-t3")
            theme1.classList.remove("toggle-color-t1")
            theme2.classList.remove("toggle-color-t2")

            //bg-color style
            modifyingStyles(wrapper, "bg-color-t3", "bg-color-t1", "bg-color-t2")
            modifyingStyles(wrapper, "principal-text-color-t3", "principal-text-color-t1", "principal-text-color-t2")

            //screen
            modifyingStyles(screen, "screen-bg-t3", "screen-bg-t1", "screen-bg-t2")

            //bg calculator
            modifyingStyles(bgCalculator, "bg-calculator-t3", "bg-calculator-t2", "bg-calculator-t1")

            //little Buttons 
            modifyingStyles(littleButtons, "secondary-text-color-t3", "secondary-text-color-t1", "secondary-text-color-t2")

            //bnts
            btns.forEach(btn => {
                modifyingStyles(btn, "bg-key-number-t3", "bg-key-number-t2", "bg-key-number-t1")
            })

            //Delete and reset
            delReset.forEach(btn => {
                modifyingStyles(btn, "reset-del-button-bg-t3", "reset-del-button-bg-t2", "reset-del-button-bg-t1")
            })

            //paragraph delete and reset
            delResetParagraph.forEach(paragraph => {
                modifyingStyles(paragraph, "secondary-text-color-t3", "secondary-text-color-t2", "principal-text-color-t1")
            })

            // paragraph
            p.forEach(p => {
                modifyingStyles(p, "principal-text-color-t3", "principal-text-color-t2", "secondary-text-color-t1")
            })

            //equal
            modifyingStyles(equal, "equal-button-bg-t3", "equal-button-bg-t2", "equal-button-bg-t1")
            modifyingStyles(equalParagraph, "third-text-color-t3")
        } else if (theme === theme1){
            //toggle
            theme.classList.add("toggle-color-t1")
            theme2.classList.remove("toggle-color-t2")
            theme3.classList.remove("toggle-color-t3")

            //bg-color style
            modifyingStyles(wrapper, "bg-color-t1", "bg-color-t2", "bg-color-t3")
            modifyingStyles(wrapper, "principal-text-color-t1", "principal-text-color-t2", "principal-text-color-t3")

            //screen
            modifyingStyles(screen, "screen-bg-t1", "screen-bg-t2", "screen-bg-t3")

            //bg calculator
            modifyingStyles(bgCalculator, "bg-calculator-t1", "bg-calculator-t2", "bg-calculator-t3")

            //little Buttons 
            modifyingStyles(littleButtons, "secondary-text-color-t1", "secondary-text-color-t2", "secondary-text-color-t3")

            //bnts
            btns.forEach(btn => {
                modifyingStyles(btn, "bg-key-number-t1", "bg-key-number-t3", "bg-key-number-t2")
            })

            //Delete and reset
            delReset.forEach(btn => {
                modifyingStyles(btn, "reset-del-button-bg-t1", "reset-del-button-bg-t3", "reset-del-button-bg-t2")
            })

            //paragraph delete and reset
            delResetParagraph.forEach(paragraph => {
                modifyingStyles(paragraph, "principal-text-color-t1" ,"secondary-text-color-t3", "secondary-text-color-t2" )
            })

            // paragraph
            p.forEach(p => {
                modifyingStyles(p, "secondary-text-color-t1","principal-text-color-t3", "principal-text-color-t2" )
            })

            //equal
            modifyingStyles(equal, "equal-button-bg-t1", "equal-button-bg-t3", "equal-button-bg-t2")
            modifyingStyles(equalParagraph,null,"third-text-color-t3")
        }
    })
}

function modifyingStyles (id, addStyle, removeStyle1, removeStyle2) {
    id.classList.add(addStyle)
    id.classList.remove(removeStyle1)
    id.classList.remove(removeStyle2)
}


themeChoice(theme1);
themeChoice(theme2);
themeChoice(theme3);

btns.forEach(btn => {
    btn.addEventListener("click",(e) => {
        const clickedButton = btn.textContent

        if(btn.id === "reset" || screenNumber.textContent === "Error!") {
            screenNumber.textContent = "0"
            return
        }
        
        if(btn.id === "delete") {
            if(screenNumber.textContent.length === 1) {
                screenNumber.textContent = "0"
            } else {
                screenNumber.textContent = screenNumber.textContent.slice(0, -1)
            }
            return;
        }

        if(btn.id === "equal") {
            try {
                screenNumber.textContent = eval(screenNumber.textContent)
            }
            catch {
                screenNumber.textContent = "Error!"
            }
            
            return;
        }

        if(screenNumber.textContent === "0" || screenNumber.textContent === "Error!") {
            screenNumber.textContent = clickedButton
        } else {
            screenNumber.textContent += clickedButton
        }

        
    })
})



