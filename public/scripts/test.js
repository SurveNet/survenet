$('#button').click(function(){
    console.log('button clicked');
    $.ajax({url: 'https://survenet.herokuapp.com/test1', success:function(res){
        console.log('server response is', res);
    }});
});


