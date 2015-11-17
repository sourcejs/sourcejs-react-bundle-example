// User options for overriding core options.js

module.exports = {
    // Restart the app after changing core (back-end) options
    // Core options could be only redefined from user/options.js, context options are not supported
    core: {
        processMd: {
            languageRenderers: {
                jsx: require('sourcejs-react-styleguidist/core/lang-jsx').processExample
            }
        }
    },

    // Page rendering configuration (redefinable from context options)
    rendering: {},

    // Client-side options (redefinable from context options)
    assets: {
        modulesEnabled : {
            // Overriding example
            // trimSpaces: true
        },

        modulesOptions : {
            // Modules options example
            // navHighlight: {
            //     updateHash: false
            // }
        },

        // Legacy options object support for some older plugins
        pluginsOptions: {}
    },

    // External plugins options (are also exposed to client-side
    plugins: {}
};
