import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
    let args = arguments;

    // queue 100ms wait between test
    //This delay is only put here so that you can watch the browser do its' thing.
    //If you're tired of it taking long you can remove this call
    origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(100);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Todo list', () => {
    let page: TodoPage;

    beforeEach(() => {
        page = new TodoPage();
    });

    it('should get and highlight Todo owner attribute ', () => {
        page.navigateTo();
        expect(page.getTodoTitle()).toEqual('Todos');
    });

    it('should type something in filter owner box and check that it returned correct element', () => {
        page.navigateTo();
        page.typeAnOwner("f");
        expect(page.getUniqueTodo("Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.")).toEqual("Fry");
        page.backspace();
        page.typeAnOwner("Blanche")
        expect(page.getUniqueTodo("Incididunt enim ea sit qui esse magna eu. Nisi sunt exercitation est Lorem consectetur incididunt cupidatat laboris commodo veniam do ut sint.")).toEqual("Blanche");
    });

    it('should type something in the status box and check that it returned correct element', ()=>{
      page.navigateTo();
      page.typeAnOwner("Barry");
      expect(page.getTodoByStatus("true")).toEqual("Barry")

    });
});
