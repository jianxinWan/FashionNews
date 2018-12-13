#1. USERCONTROLLER
## 功能：
##### 1. 获取验证码： URL:http://118.89.221.170:8080/news/user/vercode
            填入正确的邮箱，在邮箱内获取验证码，填入验证码选框
            
            请求参数：userEmail
            
            返回值（json数组）：
                若邮件系统发生异常或者数据库已存在该邮箱用户时，返回{"failure": e.getMessage}
                若邮件系统发送成功，返回{"success": "请求成功", "email": email}
                其他：返回{"failure": "请求失败"}
                
##### 2.(已废弃) 验证验证码是否正确 URL:http://118.89.221.170:8080/news/user/matchcode/{vercode} 
            得到验证码之后，发送到后端，与生成验证码进行比较
            
            {vercode}:RESTful路径，将前端输入的验证码放入路径
            
            请求参数：userEmail
            
            返回值（json数组）：
                若匹配成功，返回{"success": "匹配成功"}
                若匹配失败，返回{"failure"： "匹配失败"}
                
##### 3.(2.0版本重新制定) 注册： URL:http://118.89.221.170:8080/news/user/register/{vercode}
            输入密码，前端验证合法性后进行注册
            
            {vercode}:RESTful路径，将前端输入的验证码放入路径
            
            请求参数： userEmail & userPw 
            
            返回值（json数组）：
                若注册成功，返回{"success"： "注册成功"}
                若注册失败，返回{"failure"： "注册失败"}
 
##### 4. 登录： URL:http://118.89.221.170:8080/news/user/login
            输入邮箱和密码，点击登录
            
            请求参数： userEmail & userPw
            
            返回值（json数组）：
                若密码错误或者用户邮箱不存在，返回{"failure": e.getMessage()}
                若登陆成功，返回{"success": "登陆成功", "userInfo": userOnSelect, "token": token}
                其他： 返回{"failure"： "出现异常"} 
               
##### 5. 上传图片： URL:http://118.89.221.170:8080/news/user/upload
            上传图片，换头像
            
            请求参数: 文件 & userId
            
            返回值（json数组）：
                若文件格式不为.jpg或者.png结尾，返回{"failure"： "请传输正确文件格式"} 
                若修改照片异常， 返回{"failure"： "修改失败"}
                若文件找不到存储路径，返回{"failure"： "操作异常"}
                若成功，返回{"success": "/resources/pic/" + filename.toString()}
      
##### 6. 修改用户： URL:http://118.89.221.170:8080/news/user/doUserUpdate
            修改用户信息
            
            请求参数： userName & userGraph
            
            返回值（json数组形式）：
                若操作失败，返回{"failure"： "修改错误"}
                若操作成功，返回{"success", "修改成功}
                
##### 7. 退出注销： URL:http://118.89.221.170:8080/news/user/quit **(NEWS-2.0)
            退出清除session
            
            返回值（json数组）：
                若操作成功，返回{"success", "退出"}
                若操作失败，返回{"failure", "退出失败"}
                
##### 8. 给用户关注：URL:http://118.89.221.170:8080/news/user/makeFollowOn **(NEWS-2.0)
             给用户关注，使自己关注+1，被关注的人粉丝+1
             
             请求参数（json数组）：
                若操作异常，返回{"failure", e.getMessage()}
                若操作成功，返回{"success", "操作成功"}
                
##### 附录：User
            //用户id
            private Integer userId;
            //用户名
            private String userName;
            //密码
            private String userPw;
            //邮箱
            private String userEmail;
            //关注
            private int userFollow;
            //粉丝
            private int userFans;
            //头像
            private String userPic;
            //用户签名
            private String userGraph;
            
#NEWCONTROLLER
##功能：
##### 1. 查询新闻： URL:http://118.89.221.170:8080/news/new/{type}/{page}/{pageSize}/detail
            分页查找新闻，支持懒加载或分页路由
            
            {type}：请求新闻类型，例如 科技类：tech， 电影类：film
            {page}：页码，请求第几页数据
            {pageSize}：每页展示的新闻数量
            
            返回值（json数组形式）：
                若请求失败，返回{"failure"： e.getMessage()}
                若请求成功，返回{"success": "请求成功", "datatimer": list, "date": System.currentTimeMillis()}
                
##### 2. 添加评论： URL:http://118.89.221.170:8080/news/new/addCommect/{type}
            添加评论
            
            {type}：同上
            
            请求参数 commentInfo & commentNewsId & commentUserId & commentTime
            
            返回值（json数组形式）：
                若添加失败，返回{"failure"； e.getMessage()}
                若添加成功，返回{"success": "添加成功", "comment": comment}
                
##### 3. 删除评论： URL:http://118.89.221.170:8080/news/new/deleteComment/{type}
            删除评论
            
            {type}：同上
            
            请求参数 commentId
            
            返回值（json数组）：
                若添加失败，返回{"failure"； e.getMessage()}
                若添加成功，返回{"success": "删除成功"}
                
##### 4. 给评论点赞： URL:http://118.89.221.170:8080/news/new/give-the-humbs-up/{type}
            给评论点赞
            
            {type}：同上
            
            请求参数 commentId
            
            返回值（json数组）：
                若添加失败，返回{"failure"； e.getMessage()}
                若添加成功，返回{"success": "操作成功"}
                
##### 5. 通过新闻id查询新闻详情： URL:http://118.89.221.170:8080/news/new/detailWith/{type}/{newsId} **(NEWS-2.0)
            通过新闻id查询新闻的详情
            
            {type}：同上
            {newsId}：新闻id
            
            返回值（json数组）：
                若添加成功，返回{"success"： "操作成功"， "data": news, "timer", System.currentTimeMillis()}
                其他： 返回{"failure", e.getMessage()}
                
##### 6. 给新闻点赞 URL:http://118.89.221.170:8080/news/new/addNewsIden/{type}/{newsId}  **(NEWS-2.0)
            点赞新闻
            
            {type}：同上
            {newsId}：新闻id
            
            返回值（json数组）：
                若添加成功，返回{"success"： "操作成功"}
                
                其他： 返回{"failure", e.getMessage()}

##### 附录A：News
            //新闻id
            private Integer id;
            //新闻标题
            private String title;
            //新闻类型
            private String type;
            //新闻介绍
            private String introduction;
            //新闻发布时间
            private String datetime;
            //新闻来源
            private String source;
            //新闻第一张图片
            private String pic;
            //新闻评论集合
            List<Comment> commentList; 
            
##### 附录B：Comment
            //评论id
            private int commentId;
            //评论内容
            private String commentInfo;
            //评论的新闻id
            private int commentNewsId;
            //评论的用户id
            private int commentUserId;
            //评论的时间（时间戳）
            private String commentTime;
            //评论的点赞数
            private int commentIden;
            //评论的用户的昵称
            private String userName;
            //评论的用户照片
            private String userPic;
        

