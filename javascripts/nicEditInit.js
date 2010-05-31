jQuery.fn.set_uniq_id = function(){
  if($(this).attr("id") == ""){
    
    //generating uniq id
    id = "rand_id_" + Math.random();
    while($("#"+id).length > 0){
      id = "rand_id_" + Math.random();
    }

    $(this).attr("id", id);
  } else {
    id = $(this).attr("id");
  }
}

$(function(){ //after page load
  $(".resizable_text_area:visible").livequery(function(){

    $(this).set_uniq_id();
    id = $(this).attr("id");

    new nicEditor({buttonList:[], iconsPath: '/images/nicEditorIcons.gif'}).panelInstance(id);
  }); 

  $(".simple_nicedit:visible").livequery(function(){
    $(this).set_uniq_id();
    id = $(this).attr("id");

    upload_url = $(this).attr('upload_url');
    upload_url = upload_url ? upload_url : 'http://files.nicedit.com/';

    new nicEditor({fullPanel: true, iconsPath: '/images/nicEditorIcons.gif', uploadURI: upload_url}).panelInstance(id);
  }); 
});
