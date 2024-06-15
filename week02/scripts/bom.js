
const userInput = document.querySelector("#favchap");
const submitButton = document.querySelector("button");
const listOfElement = document.querySelector("#list");



submitButton.addEventListener("click", function(){
    if (Input.value.trim() === ""){
        Input.focus();
    }else{
        let elementAdded = document.createElement("li");
        const deleteButton = document.createElement("button");

        elementAdded.textContent = userInput.value;
        deleteButton.textContent = "❌";

        listOfElement.append(deleteButton);

        listOfElement.append(li);

        deleteButton.addEventListener("click", function(){
            listOfElement.removeChild(li);
            userInput.focus();
        })

        userInput.value = "";
        userInput.focus();
    }
});


