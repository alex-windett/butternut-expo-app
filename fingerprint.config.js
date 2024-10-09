const { SourceSkips } = require('@expo/fingerprint');

/** @type {import('@expo/fingerprint').Config} */
const config = {
	sourceSkips:
		// eslint-disable-next-line no-bitwise
		SourceSkips.ExpoConfigRuntimeVersionIfString | SourceSkips.ExpoConfigVersions,
};

module.exports = config;
