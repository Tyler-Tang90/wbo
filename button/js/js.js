window.onload = function(){
    var all = document.getElementById('checkAll'),
        ball = document.getElementsByClassName('ball');

    var flag = false; // 定义默认没有选中
    all.onclick = function() {
        flag = !flag;
        for ( var i = 0, len = ball.length; i < len; i++ ){
            ball[i].checked = flag;
        }
    };
    for(var a = 0, len = ball.length; a < len; a++){
        ball[a].onclick = function(){
            if(this.checked == false){
                all.checked = false;
                flag = false;
            }else{
                //判断是否所有的按钮被选中
                var isChecked = true;  //默认所有的元素都是选中的
                for( var j = 0; j < len; j++){
                    isChecked = false;
                }
            }
            //
            if(isChecked){
                all.checked=true;
                flag = true;
            }
        };
    }
};
