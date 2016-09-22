// var http = require('http');
// var fs = require('fs');

// var fileRoot = 'C:/Users/24354/Desktop/vueFrame/index.html';

// var server = http.createServer(function(req,res){
//     var url = req.url;
//     console.log(url);
//     if (url == '/index') {
//         fs.readFile(fileRoot, function(err,data){
//                 console.log(data);
//                 res.writeHeader(200,{
//                     'content-type':'text/html;charset="utf-8"'
//                 });
//                 res.write(data);
//                 res.end();
//         });
//     }
//     else{
//         res.writeHeader(404,{
//             'content-type':'text/html;charset="utf-8"'
//         });
//         res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
//         res.end();
//     }
// }).listen(8888);

// console.log("success");

var http = require('http');
var fs = require('fs');

var docRoot = __dirname + '/../';

console.log(docRoot);

var server = http.createServer(function(req,res){
    var url = req.url;
    var file = docRoot + url;
    console.log(url);
    fs.readFile(file, function(err,data){
        if(err){
            res.writeHeader(404,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            console.log(data);
            res.writeHeader(200,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(8888);

console.log("success");