OpenLayers.Format.Px3JSON.InfoWindowConfig = OpenLayers.Class({
    /**
    * @requires OpenLayers/Format/Px3JSON/SearchConfig.js
    */

    /**
    * Class: OpenLayers.Format.Px3JSON.InfoWindowConfig
    * 
    * An object containing configuration information related to the info window.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: type
     * {Boolean} The class to be used as an info window.
     */
    type: null,
      
    /**
     * Property: menuClass
     * {Boolean} The class used for the info window menu.
     */
    menuClass: null,
          
    /**
     * Property: maxHeight
     * {Number} The maximum height in pixels that the info window can expand to.
     */
    maxHeight: null,
             
    /**
     * Property: maxWidth
     * {Number} The maximum width in pixels that the info window can expand to.
     */
    maxWidth: null, 
                 
    /**
     * Property: elevationGPEndPoint
     * {String} Optional. URL pointing to the REST endpoint of a GPTask used to calculate elevation.
     */
    elevationGPEndPoint: null, 
     
    /**
     * Property: bufferGeometryServiceUrl
     * {String} Optional. URL pointing to the REST geometry service used for the buffer option.
     */
    bufferGeometryServiceUrl: null, 
         
    /**
     * Property: geometryServiceUrl
     * {String} Url to the geometry service used for geometry operations.
     */
    geometryServiceUrl: null, 
    
    /**
     * Property: searchConfig
     * {OpenLayers.Format.Px3JSON.SearchConfig} Configures the URL for the REST endpoint of a GPTask used to 
     * search near a location. (See previous �searchConfig� for details).
     */
    searchConfig: null, 
    
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.InfoWindowConfig
     * Construct an OpenLayers.Format.Px3JSON.InfoWindowConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
        if (this.options.searchConfig) {
            this.searchConfig = new OpenLayers.Format.Px3JSON.SearchConfig(this.options.searchConfig);
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.InfoWindowConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.InfoWindowConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.InfoWindowConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    /**
     * Method: isValidType
     * Check if an object is a valid representative of the given type.
     * 
     * Parameters:
     * obj - {Object} An initialized object of this type
     * 
     * Returns:
     * {Boolean} The object is valid object of the given type.
     */
    isValidType : function(obj) {
        return true;
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.InfoWindowConfig"
});