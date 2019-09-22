var user={
    /**
     * 用户登录
     * @param {*} inpTxt  登录账号 
     * @param {*} inpPass 登录密码
     * @param {*} callback 回调函数
     */
     login:function(inpTxt,inpPass,callback){
        $.post(Url.url_login,{
            user_name:inpTxt,
            password:inpPass
        },function(res){
            callback(res)
        })
     },
     /**
      * 用户退出
      * @param {*} callback  
      */
     logout:function(callback){
         $.post(Url.url_logout,function(res){
             callback(res)
         })
     },
     /**
      * 用户信息
      * @param {*} callback 
      */
     logimg:function(callback){
         $.get(Url.url_logimg,function(res){
             callback(res)
         })
     }    
     
 }