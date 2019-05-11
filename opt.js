
$( function() {
    chrome.storage.sync.get(null, function(items) {       
        $("#domain").val( items.cpex_domain );
    });
    $("#apply").on("click", function(){
        chrome.storage.sync.set({
            cpex_domain : $("#domain").val()
        });
    });
} );