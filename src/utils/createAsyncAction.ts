import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
/**
 * Creates an async action creator
 *
 * @param  {String} TYPE                 the type of the action
 * @param  {Function} fn                 the function to be called async
 * @param  {Boolean} suppressException   optionally do not throw exceptions
 * @return {Funtion}                     the action creator
 */
export function createAsyncAction(type: string, fn: any, suppressException?: boolean) {
	const TYPE_STARTED = `${type}_STARTED`;
	const TYPE_SUCCEEDED = `${type}_SUCCEEDED`;
	const TYPE_FAILED = `${type}_FAILED`;
	const TYPE_ENDED = `${type}_ENDED`;
	const actionCreators = {
		[TYPE_STARTED]: createAction(TYPE_STARTED),
		[TYPE_SUCCEEDED]: createAction(TYPE_SUCCEEDED),
		[TYPE_FAILED]: createAction(TYPE_FAILED),
		[TYPE_ENDED]: createAction(TYPE_ENDED)
	};
	const successActionWithMeta = createAction(TYPE_SUCCEEDED, ({ payload }) => payload, ({ meta }) => meta);

	const factory: any = (...args: any[]) => (dispatch: Dispatch, getState: any, extra: any) => {
		let result;
		const startedAt = new Date().getTime();
		dispatch(actionCreators[TYPE_STARTED](args));
		const succeeded = (data: any) => {
			const action = data && data.payload ? successActionWithMeta(data) : actionCreators[TYPE_SUCCEEDED](data);

			dispatch(action);
			const endedAt = new Date().getTime();
			dispatch(
				actionCreators[TYPE_ENDED]({
					elapsed: endedAt - startedAt
				})
			);
			return data;
		};
		const failed = (err: any) => {
			const endedAt = new Date().getTime();
			dispatch(actionCreators[TYPE_FAILED](err));
			dispatch(
				actionCreators[TYPE_ENDED]({
					elapsed: endedAt - startedAt
				})
			);
			if (!suppressException) {
				throw err;
			}
		};
		try {
			result = fn(...args, { getState, dispatch, extra });
		} catch (error) {
			failed(error);
		}
		// in case of async (promise), use success and fail callbacks.
		if (isPromise(result)) {
			return result.then(succeeded, failed);
		}
		return succeeded(result);
	};

	factory.NAME = type;
	factory.START = actionCreators[TYPE_STARTED].toString();
	factory.STARTED = factory.START;
	factory.SUCCEEDED = actionCreators[TYPE_SUCCEEDED].toString();
	factory.FAILED = actionCreators[TYPE_FAILED].toString();
	factory.ENDED = actionCreators[TYPE_ENDED].toString();

	return factory;
}

function isPromise(p: any) {
	return p && p.then && p.catch;
}
