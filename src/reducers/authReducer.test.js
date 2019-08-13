import { ON_LOGIN_FIELD_CHANGE, ON_LOGIN, SUCCESS, IN_PROGRESS } from './../const';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import expect from 'expect';
import { onLoginClick, onLoginFieldChange } from '../actions/authAction';

const mockStore = configureMockStore([thunk]);

describe('login actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('creates AUTH POST', () => {
        const body = { userName: 'test', password: 'test' };
        fetchMock.post('http://localhost:8000/auth', {
            body
        });

        const store = mockStore({ auth: { userName: '', password: '' } });
        const expectedActions = [
            { type: ON_LOGIN, status: IN_PROGRESS },
            {
                type: ON_LOGIN,
                status: SUCCESS,
                response: body
            }
        ]

        return store.dispatch(onLoginClick())
            .then(() => {
                const action = store.getActions();
                expect(action).toEqual(expectedActions);
            });
    })
});
