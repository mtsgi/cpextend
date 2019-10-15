
$( function() {
    $("#cpex-ver").text( chrome.app.getDetails().version );
    chrome.storage.sync.get(null, function(items) {    
        $("#domain").val( items.cpex_domain || '' );
        $("#disp-x").val( items.cpex_disp_x || '' );
        $("#disp-y").val( items.cpex_disp_y || '' );
        $("#open").val( items.cpex_open || '' );
        $("#disp-size").val( items.cpex_disp_size || '' );
        $("#disp-name").val( items.cpex_name || '' );
        $("#disp-title").val( items.cpex_title || '' );
        $("#attend").val( items.cpex_attend || '' );
        $("#dark").val( items.cpex_dark || '' );
        $("#favicon-path").val( items.cpex_favicon || '' );
    });
    $("#apply").on("click", function(){
        chrome.storage.sync.set({
            cpex_domain : $("#domain").val(),
            cpex_disp_x : $("#disp-x").val(),
            cpex_disp_y : $("#disp-y").val(),
            cpex_open : $("#open").val(),
            cpex_disp_size : $("#disp-size").val(),
            cpex_name : $("#disp-name").val(),
            cpex_title : $("#disp-title").val(),
            cpex_attend : $("#attend").val(),
            cpex_dark : $("#dark").val(),
            cpex_favicon : $("#favicon-path").val()
        });
        $("#popup-text").text("設定を適用しました。");
        $("#popup").fadeIn(100);
    });
    $("#popup-div a").on("click", function(){
        $("#popup").fadeOut(100);
    });
});
