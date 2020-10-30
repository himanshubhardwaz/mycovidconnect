/*jshint esversion: 6 */
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const UBER_CLIENT_ID = process.env.REACT_APP_UBER_CLIENT_ID;
const COOKIEBOT_SRC = process.env.REACT_APP_CONSENT_COOKIEBOT;
const COOKIEBOT_CONSENT_DECLARATION =
	process.env.REACT_APP_COOKIEBOT_CONSENT_DECLARATION;
const COOKIEBOT_CONSENT_HEAD = process.env.REACT_APP_COOKIEBOT_CONSENT_HEAD;
const alternativeCityNamesLookup = {
	'bangalore urban': 'bangalore',
	bengaluru: 'bangalore',
};

export {
	GOOGLE_MAPS_API_KEY,
	UBER_CLIENT_ID,
	alternativeCityNamesLookup,
	COOKIEBOT_SRC,
	COOKIEBOT_CONSENT_DECLARATION,
	COOKIEBOT_CONSENT_HEAD,
};
