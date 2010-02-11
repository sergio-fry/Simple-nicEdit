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
  $(".resizable_text_area").each(function(){

    $(this).set_uniq_id();
    id = $(this).attr("id");

    new nicEditor({buttonList:[], iconsPath: '/images/nicEditorIcons.gif'}).panelInstance(id);
  }); 

  $(".simple_nicedit").each(function(){
    $(this).set_uniq_id();
    id = $(this).attr("id");

    new nicEditor({fullPanel: true, iconsPath: '/images/nicEditorIcons.gif'}).panelInstance(id);
  }); 
});
