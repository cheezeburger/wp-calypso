/** @format */
/**
 * External dependencies
 */

import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { requestHttpData } from 'state/data-layer/http-data';
import { http } from 'state/data-layer/wpcom-http/actions';

const AUTOMATTIC_ENTITY = 'automattic';
const PRIVACY_POLICY_REQUEST_ID = 'privacy-policy';

const fetchAction = http( {
	method: 'GET',
	path: '/privacy-policy',
	apiNamespace: 'wpcom/v2',
} );

// extract the "automattic" policy from the list of entities and ignore the other ones
const fromApi = () => data => [
	[ PRIVACY_POLICY_REQUEST_ID, get( data, [ 'entities', AUTOMATTIC_ENTITY ], null ) ],
];

export default () => requestHttpData( PRIVACY_POLICY_REQUEST_ID, fetchAction, { fromApi } );
