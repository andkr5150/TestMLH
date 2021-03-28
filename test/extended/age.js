import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import url from '../../data/url.json';
import {name, gender, age, story} from '../../data/testData';
import {inputValue4, inputValue5} from '../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url(url.stageUrl);
    });

    describe('Placeholder', function (){
        it('TC-XXX Placeholder is correct', function () {
                expect(true).toEqual(true);
        });
    });

    describe('Positive cases', function (){
        it('TC-XXX Age = 1', function () {
            expect(true).toEqual(true);
        });
    });

    describe('Negative cases', function (){
        it('TC-XXX Age = 999999999999', function () {
            expect(true).toEqual(true);
        });
    });

});