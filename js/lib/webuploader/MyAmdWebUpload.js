var applicationPath = window.applicationPath === "" ? "" : window.applicationPath || "../..";

;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery",'WebUploader' ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($,WebUploader) {
    $.fn.powerWebUpload = function (options) {
        var ele = this;
        var upload = initWebUpload(ele, options,WebUploader);
        return upload;
    }
}));



function SuiJiNum() {
return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

    function initWebUpload(item, options,WebUploader) {
         // debugger;
        // window.console && console.log(WebUploader);
        if (!WebUploader.Uploader.support()) {
            var error = "上传控件不支持您的浏览器！请尝试升级flash版本或者使用Chrome引擎的浏览器。";
            if (window.console) {
                window.console.log(error);
            }
            $(item).text(error);
            return;
        }
        //创建默认参数
        var defaults = {
            auto:true,
            hiddenInputId: "uploadifyHiddenInputId", // input hidden id
            fileKey : 'filePath',
            fileNameMaxLength : 40,
            beforeUpload : function (file) {},//当file加入队列之前执行
            uploadComplete: function (file) { }, // 当file上传后执行的回调函数
            uploadSuccess: function (file,response) { },// 每上传file成功后执行的回调函数
            uploadFinished : function () {},//一次上次中全部文件上传后回调函数
            uploadDelSuccess : function (fileKey,file) {},//每个文件删除成功后执行
            upOpt: {},
            unAccept : '.exe|.bat|.sh',
            fileNumLimit: undefined,//验证文件总数量, 超出则不允许加入队列
            fileSizeLimit: undefined,//验证文件总大小是否超出限制, 超出则不允许加入队列。
            fileSingleSizeLimit: 50*1024*1024,//默认限制单个文件大小50M, 超出则不允许加入队列
            PostbackHold: false
        };
        var opts = $.extend(defaults, options);
        var hdFileData = $("#" + opts.hiddenInputId);
        var target = $(item);//容器
        var pickerid = "";
        if (typeof guidGenerator36 != 'undefined')//给一个唯一ID
            pickerid = guidGenerator36();
        else
            pickerid = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        var uploaderStrdiv = '<div class="webuploader">'
        //debugger
        if (opts.auto) {
            uploaderStrdiv =
            '<span class="btns">' +
            '<span id="' + pickerid + '">选择上传文件</span>' +
            '</span>'+
            '<span id="Uploadthelist" class="uploader-list"></span>';

        } else {
            uploaderStrdiv =
            '<div class="uploadBtns">' +
            '<span id="' + pickerid + '">选择文件</span>' +
            '<span class="webuploadbtn">开始上传</span>' +
            '<div  class="uploader-list"></div>' +
            '</div>'
        }
        uploaderStrdiv += '<div style="display:none" class="UploadhiddenInput" >\
                         </div>'
        uploaderStrdiv+='</div>';
        target.append(uploaderStrdiv);

        var $list = target.find('.uploader-list'),
             $btn = target.find('.webuploadbtn'),//手动上传按钮备用
             state = 'pending',
             $hiddenInput = target.find('.UploadhiddenInput'),
             uploader;
        var jsonData = {
            fileList: []
        };

        var webuploaderoptions = $.extend({
            // swf文件路径
            swf: applicationPath + '/js/lib/webuploader/Uploader.swf',
            // 文件接收服务端。
            server:  '/Home/AddFile',
            deleteServer:'/Home/DeleteFile',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + pickerid,
            //不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,
              // accept :{//接收类型
              //   extensions : 'doc,docx,ppt,pptx,xls,xlsx,pdf,jpg,png,gif,txt'
              // },
            fileNumLimit: opts.fileNumLimit,
            fileSizeLimit: opts.fileSizeLimit,
            fileSingleSizeLimit : opts.fileSingleSizeLimit
        },
        opts.upOpt);
        var uploader = WebUploader.create(webuploaderoptions);

        //回发时还原hiddenfiled的保持数据
        var fileDataStr = hdFileData.val();
        if (fileDataStr && opts.PostbackHold) {
            jsonData = JSON.parse(fileDataStr);
            $.each(jsonData.fileList, function (index, fileData) {
                var newid = SuiJiNum();
                fileData.queueId = newid;
                $list.append('<div id="' + newid + '" class="item">' +
                '<div class="info">' + fileData.name + '</div>' +
                '<div class="state">已上传</div>' +
                '<div class="del"></div>' +
                '</div>');
            });
            hdFileData.val(JSON.stringify(jsonData));
        }

        window.console && console.log(opts);
        // var allowUpload = true;
        var rgx= '('+opts.unAccept+')$';
        var re=new RegExp(rgx);
        uploader.on('beforeFileQueued',function (file) {
            window.console && console.log(file);
            if (file.name.length>opts.fileNameMaxLength) {
                layer.msg('对不起，上传文件名不能大于'+opts.fileNameMaxLength+'个字符！',{icon:1});
                return false;
            }
            if (file.size>opts.fileSingleSizeLimit) {
                layer.msg('对不起，文件大小超出最大限制！',{icon:1});
                return false;
            };
            if (re.test(file.name)) {
                layer.msg('请不要上传不安全的文件类型！',{icon:1});
                return false;
            };
            var callback = opts.beforeUpload(file);
            // window.console && console.log(callback);
            if (callback!=undefined) {
                return !!callback;
            };

        });
        if (opts.auto) {
            uploader.on('fileQueued', function (file) {
                //debugger;
                $list.append('<div id="' + $(item)[0].id + file.id + '" class="item">' +
                   '<span class="webuploadinfo">' + file.name + '</span>' +
                   '<span class="webuploadstate">正在上传...</span>' +
                   '<div class="webuploadDelbtn">删除</div><br />' +
               '</div>');
                uploader.upload();
            });
        } else {
            uploader.on('fileQueued', function (file) {//队列事件
                $list.append('<div id="' + $(item)[0].id + file.id + '" class="item">' +
                    '<span class="webuploadinfo">' + file.name + '</span>' +
                    '<span class="webuploadstate">等待上传...</span>' +
                    '<div class="webuploadDelbtn">删除</div>' +
                '</div>');
            });
        };



        uploader.on('uploadProgress', function (file, percentage) {//进度条事件
            var $li = target.find('#' + $(item)[0].id + file.id),
                $percent = $li.find('.progress .bar');

            // 避免重复创建
            if (!$percent.length) {
                $percent = $('<span class="progress">' +
                    '<span  class="percentage"><span class="text"></span>' +
                  '<span class="bar" role="progressbar" style="width: 0%">' +
                  '</span></span>' +
                '</span>').appendTo($li).find('.bar');
            }

            $li.find('span.webuploadstate').html('上传中');
            $li.find(".text").text(Math.round(percentage * 100) + '%');
            $percent.css('width', percentage * 100 + '%');
        });
        uploader.on('uploadSuccess', function (file, response) {//上传成功事件
            //debugger
            // window.console && console.log(file,response);
            opts.uploadSuccess(file,response);
            if (response.state == "error") {
                target.find('#' + $(item)[0].id + file.id).find('span.webuploadstate').html(response.message);
            } else {
                target.find('#' + $(item)[0].id + file.id).find('span.webuploadstate').html('已上传');
                $hiddenInput.append('<input type="text" id="hiddenInput'+$(item)[0].id + file.id + '" class="hiddenInput" value="' + response[opts.fileKey] + '" />')
            }


        });

        uploader.on('uploadError', function (file,reason) {
            window.console && console.log(file,reason);
            target.find('#' + $(item)[0].id + file.id).find('span.webuploadstate').html('上传出错');
        });

        uploader.on('uploadComplete', function (file) {//全部完成事件
            // window.console && console.log(file);
            target.find('#' + $(item)[0].id + file.id).find('.progress').fadeOut();
            opts.uploadComplete(file);
        });

        uploader.on('all', function (type) {
            if (type === 'startUpload') {
                state = 'uploading';
            } else if (type === 'stopUpload') {
                state = 'paused';
            } else if (type === 'uploadFinished') {
                state = 'done';
                opts.uploadFinished();
            }

            if (state === 'uploading') {
                // $btn.text('暂停上传');
                $btn.hide();
            } else {
                $btn.show();
            }
        });

        //删除时执行的方法
        uploader.on('fileDequeued', function (file) {
            //debugger
            var $item = $("#"+ $(item)[0].id + file.id);
            var $hidtxt = $("#hiddenInput" + $(item)[0].id + file.id);
            var fileKey = $hidtxt.val();
            if (fileKey!=null) {
                var sendData = {};
                sendData[opts.fileKey] = fileKey;
                $.post(webuploaderoptions.deleteServer, sendData, function (req) {
                    if (req.state) {
                        $item.remove();
                        $hidtxt.remove();
                        opts.uploadDelSuccess(fileKey,file);
                    }else{
                        target.find('#' + $(item)[0].id + file.id).find('span.webuploadstate').html('删除失败');
                    };
                    // window.console && console.log();
                    // alert(data.message);
                });
            }else{
                $item.remove();
                $hidtxt.remove();
            }

        });

        //多文件点击上传的方法
        $btn.on('click', function () {
            if (state === 'uploading') {
                uploader.stop();
            } else {
                uploader.upload();
            }
        });

        //删除
        $list.on("click", ".webuploadDelbtn", function () {
            //debugger
            var $ele = $(this);
            var id = $ele.parent().attr("id");
            var id = id.replace($(item)[0].id, "");
            // window.console && console.log(id);
            var file = uploader.getFile(id);
            uploader.removeFile(file);
        });

        return uploader;

    }
    $.fn.GetFilesAddress = function (options) {
        var ele = $(this);
        var filesdata = ele.find(".UploadhiddenInput");
        var filesAddress = [];
        filesdata.find(".hiddenInput").each(function () {
            filesAddress.push($(this).val());
        })
        return filesAddress;

    }


