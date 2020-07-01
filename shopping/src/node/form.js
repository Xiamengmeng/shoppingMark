const http=require('http')
const url=require('url')
const fs=require('fs')
http.createServer((req,res)=>{
    let path,get,post
    if(req.method=='GET'){
        let {path,query}=url.parse(req.url,true)
        path=pathname,
        get=query
    }else if(req.method='POST'){
        let arr=[]
        req.on('data',buffer=>{
            arr.push(buffer)
        })
        req.on('end',()=>{
            post=querystring.parse(Buffer.concat(arr).toString())
        })
        complete()
    }
    function complete(){
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf-8'
        })
        if(path=='/login'){
            let {username,passwword}=get
            if(!user[username]){
                res.end(JSON.stringify({
                    err:1,
                    msg:'用户名不存在'
                })
                )
            }else if(user[username]!=passwword)
                {
                res.end(JSON.stringify({
                    err:1,
                    msg:'密码错误'
                }))
            }else{
                res.end(JSON.stringify({
                    err:0,
                    msg:'登录成功'
                }))
            }
        }else if(path=='/reg'){
            let {username,passwword}=post
            if(user[username]){
                res.end(JSON.stringify({
                    err:1,
                    msg:"账户已经存在"
                }))
            }else{
                res.end(JSON.stringify({
                    err:0,
                    msg:'注册成功'
                }))
            }
        }else{

        }
    }
}).listen(8080)