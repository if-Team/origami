export default (url) => {
	if(url.match(/^(?:[^:]+:)?\/\//)) {
		return url;
	}

	if(!url.startsWith('/')) url = `/${url}`;
	if(window.origamiBaseUrl.endsWith('/')){
		const base = window.origamiBaseUrl.slice(0, window.origamiBaseUrl.length - 1);

		return `${base}${url}`
	}

	return `${window.origamiBaseUrl + url}`;
};
