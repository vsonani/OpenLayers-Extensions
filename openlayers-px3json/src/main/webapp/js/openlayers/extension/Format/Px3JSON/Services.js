OpenLayers.Format.Px3JSON.Services = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Px3JSON.Service (Base Context)
    * 
    * Service Configuration Object
    * 
    * The services object can be thought of as a hash map with the key being 
    * the service id and value being a service configuration object.
    * 
    *  @requires OpenLayers/Format/Px3JSON.js
    *  @requires OpenLayers/Format/Px3JSON/LayerConfigs.js
    *  @requires OpenLayers/Format/Px3JSON/InfoTemplates.js
    *  
    *  @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: id
     * {String} Id of the service, this should match the key in the services 
     * object (this allows for fast access to a service configuration object)
     */
    id: null,
    
    /**
     * Property: url
     * {String} URL to the ArcGIS Server REST resource that represents a map 
     * service. 
     */
    url : null,
    
    /**
     * Property: soapEndpoint 
     * {String} Optional. URL to the ArcGIS Server Soap resource that is represented by the url. 
     * This is used to fetch swatches (legend icons) for the overlay pane for each service.
     */
    soapEndoint : null,
    
    /**
     * Property: authId 
     * {String} Optional. This is used in conjunction with the soapEndpoint to provide authentication 
     * information to the soap service. The actual authentication information is stored in a database 
     * table whose key matches this id.
     */
    authId : null,
    
    /** 
     * Property: displayName
     * {String} Name that will be displayed in the Overlays Pane for the service.
     */
    displayName : null,
    
    /** 
     * Property: classification
     * Default: UNCLASSIFIED
     * {String} Optional. Valid values are "UNCLASSIFIED", "CONFIDENTIAL", "SECRET", 
     * and "TOP SECRET". This will be used if displaySecurityBanners or 
     * displayTocSecurityMarkings in the layoutConfig object are true 
     * (see Layout Configuration Object).
     * 
     */
    classificiation : 'UNCLASSIFIED',
    
    /**
     * Property: caveats
     * Default: []
     * {String[]} Optional. An array of strings representing caveats to the classification. 
     * See classification property for details when it will be used.
     */
    caveats : [],
    
    /**
     * Property : metadataUrl
     * {String} Optional. URL to a webpage with metadata about the service. This page 
     * will display in a tooltip dialog opened from the context menu (right-clicking) 
     * on a service in the Overlay Pane.
     */
    metadataUrl : null,
    
    /**
     * Property : layersDefaultIdentifiable
     * Default: false
     * {boolean} Optional. True sets every layer in the service to identifiable, false 
     * allows no layer in the service to be identified on (preferred for raster data). 
     * A layer�s identifiablility can be overridden in a Layer Configuration object in 
     * the layers section (see Layer Configuration Object).
     */
    layersDefaultIdentifiable : false,
    
    /** 
     * Property : type
     * {String} Specifies the layer's type
     * Possible values: tiled, dynamic, wms, wmts, image, nrl. 
     * Note: Dynamic Services will be rendered as PNG 24 images 
     * except in IE6 where they will be rendered as PNG 8.
     */
    type : null,
    
    /**
     * Property : drawOrder
     * {Number} Specifies the default draw order for stacking services on top of each 
     * other to create the map the user sees in the browser. The higher values appear 
     * on top.
     * Default: 0
     */
    drawOrder : 0,
    
    /**
     * Property : downloadUrl
     * {String} Optional. URL pointing to a file to be used for the Download Layer link on 
     * this service's context menu.
     */
    downloadUrl : null,
    
    /** 
     * Property : opacity
     * {Number} Number between 0 and 1.0 that determines the default opacity of a layer.
     * Default: 1.0
     */
    opacity : 1.0,
    
    /**
     * Property : refreshIntervalSeconds
     * {Number} Optional. Number of seconds between automatic layer refresh operations.
     */
    refreshIntervalSeconds : null,
    
    /**
     * Property : layers
     * {OpenLayers.Format.Px3JSON.LayerConfig} Hash map of Layer Configuration Objects, keys are the layer�s id.
     */
    layers : {},
    
    /**
     * Property: defaultInfotemplate
     * {OpenLayers.Format.Px3JSON.InfoTemplate} Optional. The default info template 
     * to apply to layers where none is specified via the Layers configuration object. 
     * Refer to the Info Template Object section for configuration format of this object.
     */
    defaultInfotemplate : {},
    
    /**
     * Property: imageFormat
     * See /doc/jsapix-config-schema.jsd
     * {String} Optional. 
     */
    imageFormat : null,
    
    /**
     * Property: disableViewin
     * See /doc/jsapix-config-schema.jsd
     * {Boolean} Optional. 
     */
    disableViewin : false,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.Services
     * Construct an OpenLayers.Format.Px3JSON.Services object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        
        if (this.opacity < 0) {
            this.opacity = 0;
        } else if (this.opacity > 1) {
            this.opacity = 1.0;
        }
        for (var layer in options.layers) {
            this.layers[layer] = new OpenLayers.Format.Px3JSON.LayerConfig(this.layers[layer]);
        }
        if (!Object.keys(this.layers).length) {
            this.layers = this.defaultInfotemplate;
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Service object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.Services} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.Services(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Services"
});