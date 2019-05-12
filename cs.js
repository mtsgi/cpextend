chrome.storage.sync.get( null, function( items ) {
    if( location.hostname.indexOf( items.cpex_domain ) != -1 ) {

        console.log("Init \"Cpex\" ");
        
        if( items.cpex_open == "true" && $(".cs_Bt")[1].value == "すべて開く" ){
            $(".cs_Bt")[1].click();
        }

        if( items.cpex_disp_size ) $("#cp-mojisuu").css("font-size", String(items.cpex_disp_size) )

        if( location.pathname == "/lms/error/notLogin" || location.pathname == "/lms/error/" ) {
            location.pathname = "/lms/lginLgir/";
        }

        if( items.cpex_disp_x ){
            if( items.cpex_disp_x == "left" ) $("#cp-mojisuu").css("left", "0").css("right", "auto");
            else if( items.cpex_disp_x == "right" ) $("#cp-mojisuu").css("right", "0").css("left", "auto");
        }
        if( items.cpex_disp_y ){
            if( items.cpex_disp_y == "top" ) $("#cp-mojisuu").css("top", "0").css("bottom", "auto");
            else if( items.cpex_disp_y == "bottom" ) $("#cp-mojisuu").css("bottom", "0").css("top", "auto");
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