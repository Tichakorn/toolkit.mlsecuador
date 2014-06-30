function h4p_listingcollection(){
    $( ".h4p-listingcollection .beds_baths .item-heading" ).text( "B/B" );
}

function h4p_arrow(){
    $( ".h4p-arrowbox" ).after('<div class="right-arrow">&nbsp;</div>');
}
$(document).ready(function() {   
    if($('.h4p-listingcollection .beds_baths .item-heading').length>0){
        h4p_listingcollection();
    }
    if($('.h4p-arrowbox').length>0){
        h4p_arrow();
    }
});