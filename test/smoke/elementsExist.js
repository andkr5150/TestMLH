import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import url from '../../data/url.json';

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function (){
            browser.url(url.stageUrl);
        });

        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
//            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Header is present ', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function (){
           let instruction = $(sel.instruction).isDisplayed();
           expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function (){
           let label = $$(sel.requiredLabel)[0].isDisplayed();
           expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function (){
           let  name = $(sel.name).isDisplayed();
           expect(name).toEqual(true);
        });

        it('TC-006 Gender label is present', function (){
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007_1 Gender radio buttons are present (1 buttons)', function (){
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-007_2 Gender radio buttons are present (2 buttons)', function (){
            let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-007_3 Gender radio buttons are present (3 buttons)', function (){
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-008 Age field label is present', function (){
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Age field is present', function (){
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010 Story Type field label is present', function (){
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present', function (){
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function (){
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', function (){
            let image = $(sel.imageUpload).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014 Submit button is present', function (){
            let createButton = $(sel.submit).isDisplayed();
            expect(createButton).toEqual(true);
        });

    });

});