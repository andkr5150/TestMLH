import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import url from '../../data/url.json';

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url(url.stageUrl);
    });

    it('TC-026 Submit button is enabled after fields 1...4 filled with valid values" ', function () {
        $(sel.name).setValue("LadyBug007");
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue("1234567890");
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();


        browser.pause(1000);
        let sumbitBtn = $(sel.submit).isEnabled();
        expect(sumbitBtn).toEqual(true);
    });

});