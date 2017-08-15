$("#createSS").click(function (event) {
    event.preventDefault();
    var searchIDs = $("#questionaireCap input:checkbox:checked").map(function () {
        return $(this).val();
    }).get();
    console.log("selected::::" + searchIDs);
    $.ajax({
       url:'/questionaireCapture',type:'post',
       data:{learnerMethods:searchIDs},
       success:function(response){
          console.log(response);
       }
    });
});
