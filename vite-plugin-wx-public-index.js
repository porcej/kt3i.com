/**
 * Vite serves public files only when the URL matches an on-disk file path.
 * `/wx/` is not in that set (only `wx/index.html` is), so `/wx/` 404s in dev.
 * This middleware mirrors common static hosts + Cloudflare Pages behavior.
 * @returns {import('vite').Plugin}
 */
function wxIndexRedirect(req, res, next) {
	const pathname = req.url?.split('?')[0] ?? '';
	if (pathname === '/wx' || pathname === '/wx/') {
		res.statusCode = 302;
		res.setHeader('Location', '/wx/index.html');
		res.end();
		return;
	}
	next();
}

export function wxPublicIndex() {
	return {
		name: 'wx-public-index',
		configureServer(server) {
			server.middlewares.use(wxIndexRedirect);
		},
		configurePreviewServer(server) {
			server.middlewares.use(wxIndexRedirect);
		},
	};
}
