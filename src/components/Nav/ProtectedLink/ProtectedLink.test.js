import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ProtectedLink from './ProtectedLink'
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { Link } from 'react-router-dom'
import  rootReducer  from '../../../store/reducers/reducer'
import { createStore, applyMiddleware } from 'redux'
// import { createShallow } from '@material-ui/core/test-utils';
import * as Redux from 'react-redux'

configure({ adapter: new Adapter() });

const middlewares = [thunk]

describe('<ProtectedLink/>', () => {
    let useSelectorSpy: jest.SpyInstance;
    let useDispatchSpy: jest.SpyInstance;
    beforeEach(() => {
        useSelectorSpy = jest.spyOn(Redux, 'useSelector');
        // shallow = createShallow();
        // useSelectorSpy = jest.spyOn(Redux, 'useSelector');
        useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    })
    

    it('Links with protect="afterLogIn" should not  be shown when loggedIn = false ', () => {
        useSelectorSpy.mockReturnValue({
            loggedIn: false
        })
        const wrapper = shallow(<ProtectedLink protect='afterLogIn' to='/' name='dummyName' ></ProtectedLink>);
        console.log(wrapper.debug())
        expect(wrapper.find(Link).length).toEqual(0);
    });

    it('Links with protect="afterLogIn" should  be shown when loggedIn = true ', () => {
            useSelectorSpy.mockReturnValue({
                loggedIn: true
            })
        const wrapper = shallow(<ProtectedLink protect='afterLogIn' to='/' name='dummyName' ></ProtectedLink>);
        expect(wrapper.find(Link).length).toEqual(1);
    });
 

    it('Links with protect="beforeLogIn" should  be not shown when loggedIn =true', () => {
        useSelectorSpy.mockReturnValue({
            loggedIn: true
        })
        const wrapper = shallow(<ProtectedLink protect='beforeLogIn' to='/' name='dummyName' ></ProtectedLink>);
        expect(wrapper.find(Link).length).toEqual(0);

    });
    it('Links with protect="beforeLogIn" should  be  shown when loggedIn = false', () => {
        useSelectorSpy.mockReturnValue({
            loggedIn: false
        })
        const wrapper = shallow(<ProtectedLink protect='beforeLogIn' to='/' name='dummyName' ></ProtectedLink>);
        expect(wrapper.find(Link).length).toEqual(1);
    });
    it('Links with protect="both" should  be shown irrespective of loggedIn state', () => {
        useSelectorSpy.mockReturnValue({
            loggedIn: false
        })
        const wrapper = shallow(<ProtectedLink protect='both' to='/' name='dummyName' ></ProtectedLink>);
        expect(wrapper.find(Link).length).toEqual(1);
    });



});
  