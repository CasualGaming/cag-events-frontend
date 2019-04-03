import Keycloak from 'keycloak-js';
import { keycloakConfig } from '../config/keycloak';

/**
 * Create an keycloak instance
 *
 * @returns an instanciated keycloak with config from config/keycloak.ts
 */
export const keycloak = Keycloak({ ...keycloakConfig });
