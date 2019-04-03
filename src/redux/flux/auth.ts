import { handleActions, Action, combineActions } from 'redux-actions';
import { createAsyncAction } from '../../utils/';
import { AuthWrapper } from '../../api/';

export interface AuthState {
	authenticated: boolean;
	userProfile: any;
	isLoading: boolean;
}

export const keycloakInit = createAsyncAction(
	'KEYCLOAK_INIT',
	async (initOptions: Keycloak.KeycloakInitOptions) => await AuthWrapper.init(initOptions)
);
export const logout = createAsyncAction('KEYCLOAK_LOGOUT', async () => await AuthWrapper.logout());
export const login = createAsyncAction('KEYCLOAK_LOGIN', async () => await AuthWrapper.login());
export const register = createAsyncAction('KEYCLOAK_REGISTER', async () => await AuthWrapper.login());
export const fetchProfile = createAsyncAction('KEYCLOAK_FETCH_PROFILE', async () => await AuthWrapper.getProfile());

const initialState = {
	authenticated: false,
	userProfile: {},
	isLoading: false
};

export const AuthReducer = handleActions(
	{
		[combineActions(
			'KEYCLOAK_INIT_SUCCEEDED',
			'KEYCLOAK_LOGIN_SUCCEEDED',
			'KEYCLOAK_LOGOUT_SUCCEEDED',
			'KEYCLOAK_REGISTER_SUCCEEDED'
		) as any]: (state: AuthState, { payload }: Action<AuthState>) => {
			return payload
				? {
						...state,
						authenticated: payload.authenticated
				  }
				: { ...state };
		},
		[combineActions('KEYCLOAK_FETCH_PROFILE_STARTED') as any]: (state: AuthState, { payload }: Action<AuthState>) => ({
			...state,
			isLoading: true
		}),
		[combineActions('KEYCLOAK_FETCH_PROFILE_ENDED') as any]: (state: AuthState, { payload }: Action<AuthState>) => ({
			...state,
			isLoading: false
		}),
		[combineActions('KEYCLOAK_FETCH_PROFILE_SUCCEEDED') as any]: (state: AuthState, { payload }: Action<any>) => ({
			...state,
			userProfile: { ...payload }
		})
	},
	initialState
);

export const isAuth = (state: AuthState) => state.authenticated;
export const getUserProfile = (state: AuthState) => ({ ...state.userProfile });
export const isUserProfileLoading = (state: AuthState) => state.isLoading;
