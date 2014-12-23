module.exports = function(grunt) {
	grunt.config.set('bower', {
		dev: {
			dest: '.tmp/public',
			js_dest: '.tmp/public/vendor/js',
			css_dest: '.tmp/public/vendor/styles',
			fonts_dest: '.tmp/public/vendor/fonts',
			options: {
				keepExpandedHierarchy: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower');
};