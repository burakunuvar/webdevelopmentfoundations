$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input").keypress(function(event){
  if(event.which == 13){
    $("ul").append("<li><span><i class='fa fa-trash'> </i> </span> " + $(this).val() + "</li>" );
    $(this).val("");
  }
});

$("#togglePlus").click(function(){
  $("input").fadeToggle();
});
