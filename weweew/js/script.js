{
    const count = (inputAmountElement, selectCurrencyElement) =>{
        const plnElement = document.querySelector(".js-pln");
        const usdElement = document.querySelector(".js-usd");
        const gbpElement = document.querySelector(".js-gbp");
        const eurElement = document.querySelector(".js-eur");
        const chfElement = document.querySelector(".js-chf");

        const CurrencyUSD = 3.97;
        const CurrencyGBP = 5.02;
        const CurrencyEUR = 4.28;
        const CurrencyCHF = 4.41;

        let result = 0;
        if (plnElement.checked) {
            newCurrency = plnElement.value;
            switch (selectCurrencyElement) {
                case "pln":
                    return result = +inputAmountElement;
                    case "usd":
                    return result = +inputAmountElement + CurrencyUSD;
                    case "eur":
                    return result = inputAmountElement + CurrencyEUR;
                    case "gbp":
                    return result = inputAmountElement + CurrencyGBP;
                    case "chf":
                    return result = inputAmountElement + CurrencyCHF;
                }
                
            }else if(usdElement.checked){
                newCurrency = usdElement.value      
                switch (selectCurrencyElement) {
                    case "pln":
                        return result = inputAmountElement/CurrencyUSD;
                        case "usd":
                        return result = +inputAmountElement;
                        case "gbp":
                        return result = inputAmountElement * (CurrencyGBP/CurrencyUSD);
                        case "eur":
                        return result = inputAmountElement * (CurrencyUER/CurrencyUSD);
                        case "chf":
                        return result = inputAmountElement * (CurrencyCHF/CurrencyUSD);
                    }
                }else if(Element.checked){
                    newCurrency = usdElement.value      
                    switch (selectCurrencyElement) {
                        case "pln":
                            return result = inputAmountElement/CurrencyUSD;
                            case "usd":
                            return result = +inputAmountElement;
                            case "gbp":
                            return result = inputAmountElement * (CurrencyGBP/CurrencyUSD);
                            case "eur":
                            return result = inputAmountElement * (CurrencyUER/CurrencyUSD);
                            case "chf":
                            return result = inputAmountElement * (CurrencyCHF/CurrencyUSD);
                        }
            }
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("submit", (event) =>{
            event.preventDefault();
            const inputAmountElement = document.querySelector(".js-inputAmount").value
            const selectCurrencyElement = document.querySelector(".js-selectCurrency").value
            const sectionValueElement = document.querySelector(".js-section__value")
            const sectionCurrencyElement = document.querySelector(".js-section__currency")
            sectionValueElement.innerTEXT = count(inputAmountElement, selectCurrencyElement.toFixec(2));
            sectionValueElement.innerTEXT = newCurrency;
        });
    }
}