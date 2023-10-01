function calculatePrice() {
    const drink = document.getElementById("selectDrink");
    const size = document.getElementsByName("size");
    let selectDrink;
    let selectSize;

    let totalPrice = 0;

    selectDrink = drink.options[drink.selectedIndex].value;

    for (i = 0; i < size.length; i++) {
        if (size[i].checked) {
            selectSize = size[i].value;
        }
    }

    if (selectDrink == "Please select") {
        alert("Please select a drink.");
        for (i = 0; i < size.length; i++) {
            size[i].checked = false;
        }
    }

    switch(selectDrink){
        case "bubble-milktea":
            totalPrice = 25;
            break;
        case "iced-latte":
            totalPrice = 25;
            break;
        case "pineapple-juice":
            totalPrice = 25;
            break;
    }

    if (selectDrink != "Please select") {
        switch(selectSize) {
            case "small":
                totalPrice = totalPrice;
                break;
            case "medium":
                totalPrice = totalPrice + 5;
                break;
            case "large":
                totalPrice = totalPrice + 10;
                break;
            default:
                totalPrice = 0;
                break;
        }
    }

    document.getElementById("price").textContent = totalPrice;
}

function validateForm() {
    let validate = true;

    const Name = document.getElementById("inputName");
    const Drink = document.getElementById("selectDrink");
    const Size = document.getElementsByName("size");
    const Ice = document.getElementsByName("ice");
    const Sweetness = document.getElementsByName("sweetness");

    let inputName = Name.value;
    let inputDrink = Drink.options[Drink.selectedIndex].value;
    let inputSize;
    let inputIce;
    let inputSweetness;
    for (i = 0; i < Size.length; i++) {
        if (Size[i].checked) {
            inputSize = Size[i].value;
        }
    }
    for (i = 0; i < Ice.length; i++) {
        if (Ice[i].checked) {
            inputIce = Ice[i].value;
        }
    }
    for (i = 0; i < Sweetness.length; i++) {
        if (Sweetness[i].checked) {
            inputSweetness = Sweetness[i].value;
        }
    }

    if (inputName.trim().length === 0) {
        console.log("inputName.length " + inputName.length)
        alert("Please enter your name.");
        validate = false;
    }
    if (inputDrink == "Please select") {
        console.log("selectDrink " + inputDrink)
        alert("Please select a drink first.");
        validate = false;
    }
    if (inputSize == null) {
        console.log("inputSize " + null)
        alert("Please select a size.");
        validate = false;
    }
    if (inputIce == null) {
        console.log("inputIce " + null)
        alert("Please select an ice preference.");
        validate = false;
    }
    if (inputSweetness == null) {
        console.log("inputSweetness " + null)
        alert("Please select a sweetness level.");
        validate = false;
    }

    return validate;
}

function placeOrder(event) {
    event.preventDefault();
    if (validateForm() == true) {
        const Name = document.getElementById("inputName");
        const Drink = document.getElementById("selectDrink");
        const Size = document.getElementsByName("size");
        const Ice = document.getElementsByName("ice");
        const Sweetness = document.getElementsByName("sweetness");
    
        let inputName = Name.value;
        let inputDrink = Drink.options[Drink.selectedIndex].value;
        let inputSize;
        let inputIce;
        let inputSweetness;
        for (i = 0; i < Size.length; i++) {
            if (Size[i].checked) {
                inputSize = Size[i].value;
            }
        }
        for (i = 0; i < Ice.length; i++) {
            if (Ice[i].checked) {
                inputIce = Ice[i].value;
            }
        }
        for (i = 0; i < Sweetness.length; i++) {
            if (Sweetness[i].checked) {
                inputSweetness = Sweetness[i].value;
            }
        }

        let orderData = [inputName, inputDrink, inputSize, inputIce, inputSweetness];
        localStorage.setItem("orders", orderData);

        alert("Order placed successfully! Thank you for your order.");
        document.getElementById("order-form").reset()
        document.getElementById("price").textContent = 0;
    }
}

function resetUI() {
    document.getElementById("order-form").reset();
    document.getElementById("price").textContent = 0;
}
