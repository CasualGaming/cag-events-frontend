import { Action } from 'redux';
import { combineEpics, Epic } from 'redux-observable';

// todo import epics

const epics: Epic<Action<any>, Action<any>, void, any> = combineEpics()

export default epics;