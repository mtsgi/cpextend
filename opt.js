
$( function() {
    chrome.storage.sync.get(null, function(items) {       
        $("#domain").val( items.cpex_domain );
        if( items.cpex_disp_x ) $("#disp-x").val( items.cpex_disp_x );
        if( items.cpex_disp_y ) $("#disp-y").val( items.cpex_disp_y );
        if( items.cpex_open ) $("#open").val( items.cpex_open );
        if( items.cpex_disp_size ) $("#disp-size").val( items.cpex_disp_size );
    });
    $("#apply").on("click", function(){
        chrome.storage.sync.set({
            cpex_domain : $("#domain").val(),
            cpex_disp_x : $("#disp-x").val(),
            cpex_disp_y : $("#disp-y").val(),
            cpex_open : $("#open").val(),
            cpex_disp_size : $("#disp-size").val()
        });
        $("#popup-text").text("設定を適用しました。");
        $("#popup").fadeIn(100);
    });
    $("#popup-div a").on("click", function(){
        $("#popup").fadeOut(100);
    });
});