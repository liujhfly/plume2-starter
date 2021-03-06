import { Action, Actor, IMap } from 'plume2';

export default class CounterActor extends Actor {
  defaultState() {
    return { loading: false };
  }

  @Action('login:setLoading')
  setloading(state: IMap) {
    return state.set('loading', true);
  }
}
