import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ProtectedLink from './ProtectedLink'
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { Link, MemoryRouter  } from 'react-router-dom'
// import { createShallow } from '@material-ui/core/test-utils';
import * as Redux from 'react-redux'

configure({ adapter: new Adapter() });
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));


describe('<ProtectedLink/>', () => {
    let useSelectorSpy;
    let useDispatchSpy;
    // let mockStore = configureMockStore();
    let store;
    beforeEach(() => {
        useSelectorSpy = jest.spyOn(Redux, 'useSelector');
        useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    })

    it('Links with protect="afterLogIn" should not  be shown when loggedIn = false ', () => {
        
        store = mockStore({
            loggedIn: false
        })

        const wrapper = mount(<Provider store={store}>
            <MemoryRouter  >
                <ProtectedLink
                    protect='afterLogIn'
                    to='/'
                    name='dummyName'
                />
            </MemoryRouter >
        </Provider>);
        expect(wrapper.find(Link)).toHaveLength(0)
    });

    it('Links with protect="afterLogIn" should  be shown when loggedIn = true ', () => {
            // useSelectorSpy.mockReturnValue({
            // })
        store = mockStore({
            loggedIn: true
        })
        const wrapper = mount(<Provider store={store}>
            <MemoryRouter  >
                <ProtectedLink
                    protect='afterLogIn'
                    to='/'
                    name='dummyName' 
                />
            </MemoryRouter >
        </Provider>);
      

        expect(wrapper.find(Link)).toHaveLength(1);

        
    
    });
 

    it('Links with protect="beforeLogIn" should  be not shown when loggedIn =true', () => {
        // useSelectorSpy.mockReturnValue({
        //     loggedIn: true
        // })
        store = mockStore({
            loggedIn: true
        })
    
        const wrapper = mount(<Provider store={store}>
            <MemoryRouter  >
                <ProtectedLink
                    protect='beforeLogIn'
                    to='/'
                    name='dummyName'
                />
            </MemoryRouter >
        </Provider>);
      
       
        expect(wrapper.find(Link)).toHaveLength(0);

    });
    it('Links with protect="beforeLogIn" should  be  shown when loggedIn = false', () => {
        // useSelectorSpy.mockReturnValue({
        //     loggedIn: false
        // })
        store = mockStore({
            loggedIn:false
        })
        const wrapper = mount(<Provider store={store}>
            <MemoryRouter  >
                <ProtectedLink
                    protect='beforeLogIn'
                    to='/'
                    name='dummyName'
                />
            </MemoryRouter >
        </Provider>);
        expect(wrapper.find(Link)).toHaveLength(1);
    });
    it('Links with protect="both" should  be shown irrespective of loggedIn state', () => {
        useSelectorSpy.mockReturnValue({
            loggedIn: false
        })
        const wrapper = shallow(<ProtectedLink  ></ProtectedLink>);
        wrapper.setProps({
            protect: 'both',
            to: '/',
            name: 'dummyName'
        })
        expect(wrapper.find(Link)).toHaveLength(1);
    });




});
  