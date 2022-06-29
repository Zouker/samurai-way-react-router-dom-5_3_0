import Paginator from "./Paginator"
import {create} from 'react-test-renderer';


describe('Paginator component tests',()=>{
    test('pages count is 11 but should be whowed only 10',()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={1} onPageChanged={()=>{}} />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findAllByType('span');
        expect(span.length).toBe(10);
    });

    test('if pages count is more than 10 button NEXT should be present',()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={1} onPageChanged={()=>{}} />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    });

})