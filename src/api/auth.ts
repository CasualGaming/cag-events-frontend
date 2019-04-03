import { keycloak } from '../utils/keycloak';

//TODO: Move out to config
const baseUrl = '';
const minValidity = 5;

export const AuthFactory = (() => {
	// Instance stores a reference to the Singleton
	let instance: AuthFactory;

	function init() {
		let isAuth: boolean;

		// Singleton
		function buildQuery(path: string, param?: string, queryParams?: object) {
			const url = baseUrl + path + (param ? `/${param}` : '');
			const query = queryParams
				? Object.entries(queryParams).reduce(
						(acc, curr, index, array) => acc + `${curr[0]}=${curr[1]}` + (array.length - 1 !== index ? '&' : ''),
						'?'
				  )
				: '';
			return url + query;
		}

		const getTokenThenFetch = (cb: Function) =>
			new Promise((resolve, reject) => {
				keycloak
					.updateToken(minValidity)
					.success((refreshed: boolean) => {
						resolve(cb());
					})
					.error((error: any) => reject(error));
			});

		return {
			// Public methods and variables

			init: (initOptions: Keycloak.KeycloakInitOptions) =>
				new Promise((resolve, reject) => {
					keycloak
						.init(initOptions)
						.success((authenticated: boolean) => {
							isAuth = authenticated;
							return resolve({ authenticated });
						})
						.error((error: any) => reject(error));
				}),

			logout: () =>
				new Promise((resolve, reject) => {
					keycloak
						.logout()
						.success((...data: any) => {
							isAuth = false;
							return resolve({ data });
						})
						.error((error: any) => reject(error));
				}),

			login: () =>
				new Promise((resolve, reject) => {
					keycloak
						.login()
						.success((authenticated: any) => {
							isAuth = authenticated;
							return resolve({ authenticated });
						})
						.error((error: any) => reject(error));
				}),

			register: () =>
				new Promise((resolve, reject) => {
					keycloak
						.register()
						.success((authenticated: any) => {
							isAuth = authenticated;
							return resolve({ authenticated });
						})
						.error((error: any) => reject(error));
				}),

			getProfile: () =>
				new Promise((resolve, reject) => {
					keycloak
						.loadUserInfo()
						.success((profile: any) => resolve(profile))
						.error((error: any) => reject(error));
				}),

			get: async (path: string, param?: string, queryParams?: object): Promise<any> =>
				await getTokenThenFetch(() => {
					const headers = new Headers();
					headers.set('Authorization', `Bearer: ${keycloak.token}`);
					headers.set('Accept', 'application/JSON');

					const request = new Request(buildQuery(path, param, queryParams), {
						headers,
						mode: 'cors',
						method: 'GET'
					});
					return fetch(request);
				}),

			post: async (bodyContent: object, path: string, param?: string, queryParams?: object) =>
				await getTokenThenFetch(() => {
					const headers = new Headers();
					headers.set('Authorization', `Bearer: ${keycloak.token}`);
					headers.set('Accept', 'application/JSON');

					const request = new Request(buildQuery(path, param, queryParams), {
						headers,
						mode: 'cors',
						method: 'POST',
						body: JSON.stringify(bodyContent)
					});
					return fetch(request);
				}),
			patch: async (bodyContent: object, path: string, param?: string, queryParams?: object) =>
				await getTokenThenFetch(() => {
					const headers = new Headers();
					headers.set('Authorization', `Bearer: ${keycloak.token}`);
					headers.set('Accept', 'application/JSON');

					const request = new Request(buildQuery(path, param, queryParams), {
						headers,
						mode: 'cors',
						method: 'PATCH',
						body: JSON.stringify(bodyContent)
					});
					return fetch(request);
				}),
			delete: async (path: string, param?: string, queryParams?: object) =>
				await getTokenThenFetch(() => {
					const headers = new Headers();
					headers.set('Authorization', `Bearer: ${keycloak.token}`);
					headers.set('Accept', 'application/JSON');

					const request = new Request(buildQuery(path, param, queryParams), {
						headers,
						mode: 'cors',
						method: 'DELETE'
					});
					return fetch(request);
				})
		};
	}

	return {
		// Get the Singleton instance if one exists
		// or create one if it doesn't
		getInstance: (): AuthFactory => {
			if (!instance) instance = init();
			return instance;
		}
	};
})();

export interface AuthFactory {
	init: (context: Keycloak.KeycloakInitOptions) => void;
	logout: () => Promise<any>;
	login: () => Promise<any>;
	register: () => Promise<any>;
	getProfile: () => Promise<any>;
	get: (path: string, param?: string, queryParams?: object) => Promise<any>;
	// post: (body: any, path: string, param?: string, queryParams?: object) => Promise<any>;
	// patch: (body: any, path: string, param?: string, queryParams?: object) => Promise<any>;
	// delete: (path: string, param?: string, queryParams?: object) => Promise<any>;
}
