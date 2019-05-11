chrome.storage.sync.get( null, function( items ) {
    if( location.hostname.indexOf( items.cpex_domain ) != -1 ) {
        
        console.log( "init" );

        if( location.pathname == "lms/error/notLogin" ) {
            location.pathname = "/lms/lginLgir/";
        }

        $( "body" ).append( "<div id='cp-mojisuu'></div>" );
        $( "#cp-mojisuu" ).hide();

        $( "textarea" ).on( "click keyup", function() {
            $( "#cp-mojisuu" ).show();
            $( "#cp-mojisuu" ).text( this.value.length );
        } ).on( "blur", function() {
            $( "#cp-mojisuu" ).hide();
        } );
    }
} );