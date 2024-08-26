export function setupBackgroundEffect() {

	if (!document) {
		console.info('document was invalid!');
		return;
	}
	// Check if WebGL is available.
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	window.waveEffect = null;
	console.info('Wave effect created!');

	if (gl instanceof WebGLRenderingContext) {
		if (document.getElementsByClassName('vanta-canvas').length > 0) {
			return;
		}

		window.waveEffect = VANTA.WAVES({
			el: 'body',
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 800.0,
			minWidth: 800.0,
			scale: 1.0,
			scaleMobile: 0.5,
			color: 0x880000,
			shininess: 43.0,
			waveHeight: 4.0,
			waveSpeed: 0.5,
			zoom: 0.45,
		});
	}
}

export function destroyBackgroundEffect() {
	if (window.waveEffect) {
		window.waveEffect.destroy();
	}
	for (const elementsByClassNameElement of document.getElementsByClassName('vanta-canvas')) {
		elementsByClassNameElement.remove();
	}
}

setupBackgroundEffect();
