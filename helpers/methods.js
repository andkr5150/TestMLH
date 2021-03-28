import sel from "../data/selectors";

function inputValue4(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputValue5(name, gender, age, story, image){
}

module.exports = {inputValue4, inputValue5};
