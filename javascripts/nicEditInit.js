$(function(){ //after page load
  $(".simple_nicedit").each(function(){
    //asigning random id to textareas without id
    if($(this).attr("id") == ""){
      id = "rand_id_" + Math.random();
      $(this).attr("id", id);
    } else {
      id = $(this).attr("id");
    }

    new nicEditor({fullPanel: true, iconsPath: '/images/nicEditorIcons.gif'}).panelInstance(id);
  }); 
});
