import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import url from '../../data/url.json';

describe('Labels are Correct', function () {

        before('Open App', function (){
            browser.url(url.stageUrl);
        });

        it('TC-015 Header is "My Little Hero" ', function () {
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-016 Instruction is "Let\'s create your own HERO! It\'s super easy with our application!"', function (){
            let instruction = $(sel.instruction).getText();
            expect(instruction).toEqual(exp.instruction);
        });

        it('TC-017 Name field label is "1. What is your Hero\'s name?"', function (){
            let label = $$(sel.requiredLabel)[0].getText();
            expect(label).toEqual(exp.labelName);
        });

        it('TC-018 Gender field label is "2. Please choose a gender."', function (){
            let label = $$(sel.requiredLabel)[1].getText();
            expect(label).toEqual(exp.labelGender);
        });

        it('TC-019 Radio button #1 named "he"', function (){
            let buttonHe = $$(sel.radioButtonsLabel)[0].getText();
            expect(buttonHe).toEqual(exp.buttonHe);
        });

        it('TC-020 Radio button #2 named "she"', function (){
            let buttonShe = $$(sel.radioButtonsLabel)[1].getText();
            expect(buttonShe).toEqual(exp.buttonShe);
        });

        it('TC-021 Radio button #3 named "it"', function (){
            let buttonIt = $$(sel.radioButtonsLabel)[2].getText();
            expect(buttonIt).toEqual(exp.buttonIt);
        });

        it('TC-022 Age field label is "3. How old is your Hero?"', function (){
            let label = $$(sel.requiredLabel)[2].getText();
            expect(label).toEqual(exp.labelAge);
        });

        it('TC-023 Story Type label is "4. What type of story would you like to read?"', function (){
            let label = $$(sel.requiredLabel)[3].getText();
            expect(label).toEqual(exp.labelStory);
        });

        it('TC-024 Image label is "5. Upload an image (optional)"', function (){
            let label = $$(sel.requiredLabel)[4].getText();
            expect(label).toEqual(exp.labelImage);
        });

        it('TC-025 Submit button label is "Create!"', function (){
            let label = $(sel.submit).getText();
            expect(label).toEqual(exp.labelCreate);
        });
});