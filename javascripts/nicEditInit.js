jQuery(function($){ //after page load
  jQuery.fn.set_uniq_id = function(){
    return $(this).each(function(){
      if($(this).attr("id") == "" || $("[id='"+$(this).attr("id")+"']").length != 1){
        id = "rand_id_" + Math.random();
        while($("[id='"+id+"']").length > 0){
          id = "rand_id_" + Math.random();
        }
        $(this).attr("id", id);
      }
    });
  }

  $.simpleNiceditInit = function(inputs){
    inputs.each(function(){
      $(this).set_uniq_id();
      id = $(this).attr("id");

      upload_url = $(this).attr('upload_url');
      upload_url = upload_url ? upload_url : 'http://files.nicedit.com/';

      new nicEditor({fullPanel: true, iconsPath: '/images/nicEditorIcons.gif', uploadURI: upload_url}).panelInstance(id);
    }); 
  };

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
