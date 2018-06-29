module.exports = {
    /**
     * Name of the integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @required
     */
    name: "cybersponse",
    /**
     * The acronym that appears in the notification window when information from this integration
     * is displayed.  Note that the acronym is included as part of each "tag" in the summary information
     * for the integration.  As a result, it is best to keep it to 4 or less characters.  The casing used
     * here will be carried forward into the notification window.
     *
     * @type String
     * @required
     */
    acronym: "cs",
    /**
     * Description for this integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @optional
     */
    description: "TODO cybersponse integration description",
    entityTypes: [&#39;ipv4&#39;,&#39;hash&#39;,&#39;url&#39;,&#39;domain&#39;],
    /**
     * An array of style files (css or less) that will be included for your integration. Any styles specified in
     * the below files can be used in your custom template.
     *
     * @type Array
     * @optional
     */
    "styles": [
        "./styles/cybersponse.less"
    ],
    /**
     * Provide custom component logic and template for rendering the integration details block.  If you do not
     * provide a custom template and/or component then the integration will display data as a table of key value
     * pairs.
     *
     * @type Object
     * @optional
     */
    block: {
        component: {
            file: "./components/cybersponse-block.js"
        },
        template: {
            file: "./templates/cybersponse-block.hbs"
        }
    },
    summary: {
        component: {
            file: './components/cybersponse-summary.js'
        },
        template: {
            file: './templates/cybersponse-summary.hbs'
        }
    },
    request: {
        // Provide the path to your certFile. Leave an empty string to ignore this option.
        // Relative paths are relative to the STAXX integration's root directory
        cert: '',
        // Provide the path to your private key. Leave an empty string to ignore this option.
        // Relative paths are relative to the STAXX integration's root directory
        key: '',
        // Provide the key passphrase if required.  Leave an empty string to ignore this option.
        // Relative paths are relative to the STAXX integration's root directory
        passphrase: '',
        // Provide the Certificate Authority. Leave an empty string to ignore this option.
        // Relative paths are relative to the STAXX integration's root directory
        ca: '',
        // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
        // the url parameter (by embedding the auth info in the uri)
        proxy: '',
        /**
         * If set to false, the integeration will ignore SSL errors.  This will allow the integration to connect
         * to STAXX servers without valid SSL certificates.  Please note that we do NOT recommending setting this
         * to false in a production environment.
         */
        rejectUnauthorized: true
    },
    logging: {
        // directory is relative to the this integrations directory
        // e.g., if the integration is in /app/polarity-server/integrations/virustotal
        // and you set directoryPath to be `integration-logs` then your logs will go to
        // `/app/polarity-server/integrations/integration-logs`
        // You can also set an absolute path.  If you set an absolute path you must ensure that
        // the directory you specify is writable by the `polarityd:polarityd` user and group.

        //directoryPath: '/var/log/polarity-integrations',
        level: 'info',  //trace, debug, info, warn, error, fatal
    },
    /**
     * Options that are displayed to the user/admin in the Polarity integration user-interface.  Should be structured
     * as an array of option objects.
     *
     * @type Array
     * @optional
     */
    options: [
        
        {
            key: "",
            name: "",
            description: "example description of this option",
            default: "",
            type: "text",
            userCanEdit: false,
            adminOnly: true
        }
       
        {
            key: "",
            name: "",
            description: "example description of this option",
            default: "",
            type: "text",
            userCanEdit: false,
            adminOnly: true
        }
       
        {
            key: "",
            name: "",
            description: "example description of this option",
            default: "",
            type: "text",
            userCanEdit: false,
            adminOnly: true
        }
       
    ]
};