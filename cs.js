chrome.storage.sync.get( null, function( items ) {
    if( location.hostname.indexOf( items.cpex_domain ) != -1 ) {

        console.log("Init \"Cpex\" ");

        $( "body" ).append( "<div id='cp-mojisuu'></div>" );
        $( "#cp-mojisuu" ).hide();

        if( location.pathname == "/lms/error/notLogin" || location.pathname == "/lms/error/" ) {
            location.pathname = "/lms/lginLgir/";
        }


        if( items.cpex_name && !document.forms.logoutActionForm.getElementsByTagName("li")[0].id ) document.forms.logoutActionForm.getElementsByTagName("li")[0].innerHTML = items.cpex_name;

        document.title = items.cpex_title || document.title;

        if( items.cpex_disp_x ){
            console.log(items.cpex_disp_x);
            if( items.cpex_disp_x == "left" ){
                document.getElementById("cp-mojisuu").style["left"] = 0;
                document.getElementById("cp-mojisuu").style.right = "auto";
            }
            else if( items.cpex_disp_x == "right" ){
                document.getElementById("cp-mojisuu").style["right"] = 0;
                document.getElementById("cp-mojisuu").style.left = "auto";
            }
        }
        if( items.cpex_disp_y ){
            if( items.cpex_disp_y == "top" ){
                document.getElementById("cp-mojisuu").style["top"] = 0;
                document.getElementById("cp-mojisuu").style.bottom = "auto";
            }
            else if( items.cpex_disp_y == "bottom" ){
                document.getElementById("cp-mojisuu").style["bottom"] = 0;
                document.getElementById("cp-mojisuu").style.top = "auto";
            }
        }
        if( items.cpex_disp_size ) $("#cp-mojisuu").css("font-size", String(items.cpex_disp_size) );

        $( "textarea" ).on( "click keyup", function() {
            $( "#cp-mojisuu" ).show();
            $( "#cp-mojisuu" ).text( this.value.length );
        } ).on( "blur", function() {
            $( "#cp-mojisuu" ).hide();
        } );
        
        if( items.cpex_open == "true" ){
            if( $(".cs_Bt")[1] && $(".cs_Bt")[1].value == "すべて開く" || $(".cs_Bt")[1].value == "Open all" ) $(".cs_Bt")[1].click();
        }

        if( items.cpex_attend == "true" && $("#attend").last()[0] && $("#attend").last()[0].value == "出席する" ) $("#attend").last()[0].click();

        $( "#loginForm input[type=text]" ).first().focus()
    }
} );