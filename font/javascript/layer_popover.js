
function get_content(name,parid) {
    if(name == "view_layer"){
        return "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">shape</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='shape' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["shape"]+"\" placeholder=\"1\">" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"popover_"+parid+"\" onclick=\"save_attr_view_layer(this)\">确认</button>"+
    "                </form>";
    }

    console.log(eval('('+window.localStorage.getItem(parid)+')'));
    if(name == "linear_layer"){
        return "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='in_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["in_channel"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='out_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["out_channel"]+"\">" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"popover_"+parid+"\" onclick=\"save_attr_linear_layer(this)\">确认</button>"+
    "                </form>";
    }

    if(name == "conv1d_layer"){
        return "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='in_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["in_channel"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='out_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["out_channel"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">kernel_size</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='kernel_size' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["kernel_size"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">stride</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='stride' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["stride"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">padding</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='padding' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["padding"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">activity</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\""+parid+"activity\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.relu\">relu</option>\n" +
    "                            <option value=\"torch.nn.functional.leaky_relu\">leaky_relu</option>\n" +
    "                            <option value=\"torch.nn.functional.sigmoid\">sigmoid</option>\n" +
    "                            <option value=\"torch.nn.functional.tanh\">tanh</option>\n" +
    "                            <option value=\"torch.nn.functional.softmax\">softmax</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">pool_way</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\""+parid+"pool_way\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool1d\">max_pool1d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool2d\">max_pool2d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool3d\">max_pool3d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool1d\">AvgPool1d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool2d\">AvgPool2d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool3d\">AvgPool3d</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"popover_"+parid+"\" onclick=\"save_attr_conv1d_layer(this)\">确认</button>"+
    "                </form>";
    }

    if(name == "conv2d_layer"){
        return "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='in_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["in_channel"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='out_channel' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["out_channel"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">kernel_size</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='kernel_size' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["kernel_size"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">stride</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='stride' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["stride"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">padding</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='padding' class=\"form-control\" value=\""+eval('('+window.localStorage.getItem(parid)+')')["padding"]+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">activity</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\""+parid+"activity\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.relu\" >relu</option>\n" +
    "                            <option value=\"torch.nn.functional.leaky_relu\">leaky_relu</option>\n" +
    "                            <option value=\"torch.nn.functional.sigmoid\">sigmoid</option>\n" +
    "                            <option value=\"torch.nn.functional.tanh\">tanh</option>\n" +
    "                            <option value=\"torch.nn.functional.softmax\">softmax</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">pool_way</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\""+parid+"pool_way\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool1d\">max_pool1d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool2d\">max_pool2d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool3d\">max_pool3d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool1d\">AvgPool1d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool2d\">AvgPool2d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool3d\">AvgPool3d</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"popover_"+parid+"\" onclick=\"save_attr_conv2d_layer(this)\">确认</button>"+
    "                </form>";
    }

}

/*
var view_layer = "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">shape</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\"; class=\"form-control\" placeholder=\"1\">" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"id_anchor\">确认</button>"+
    "                </form>"
var linear_layer = "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='in_channel' class=\"form-control\" value=\""+$("#"+parid).attr("in_channel")+"\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" name='out_channel' class=\"form-control\" value=\""+$("#"+parid).attr("out_channel")+"\">" +
    "                    </div>" +
    "                </div>" +
    "<button type=\"button\" class=\"btn btn-success\" style=\"width: 150px\" id=\"id_anchor\" onclick=\"save_attr_linear_layer(this)\">确认</button>"+
    "                </form>"
var conv1d_layer = "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">kernel_size</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">stride</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">padding</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">activity</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.relu\">relu</option>\n" +
    "                            <option value=\"torch.nn.functional.leaky_relu\">leaky_relu</option>\n" +
    "                            <option value=\"torch.nn.functional.sigmoid\">sigmoid</option>\n" +
    "                            <option value=\"torch.nn.functional.tanh\">tanh</option>\n" +
    "                            <option value=\"torch.nn.functional.softmax\">softmax</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">pool_way</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool1d\">max_pool1d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool2d\">max_pool2d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool3d\">max_pool3d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool1d\">AvgPool1d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool2d\">AvgPool2d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool3d\">AvgPool3d</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                </div>" +
    "                </form>"
var conv2d_layer = "<form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\">" +
    "                    <label class=\"col-sm-5 control-label\">in_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">out_channel</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">kernel_size</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">stride</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">padding</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <input type=\"text\" class=\"form-control\">" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">activity</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.relu\">relu</option>\n" +
    "                            <option value=\"torch.nn.functional.leaky_relu\">leaky_relu</option>\n" +
    "                            <option value=\"torch.nn.functional.sigmoid\">sigmoid</option>\n" +
    "                            <option value=\"torch.nn.functional.tanh\">tanh</option>\n" +
    "                            <option value=\"torch.nn.functional.softmax\">softmax</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                    <label class=\"col-sm-5 control-label\">pool_way</label>" +
    "                            <div class=\"col-sm-5\">" +
    "                        <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "                            <option value=\"None\">None</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool1d\">max_pool1d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool2d\">max_pool2d</option>\n" +
    "                            <option value=\"torch.nn.functional.max_pool3d\">max_pool3d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool1d\">AvgPool1d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool2d\">AvgPool2d</option>\n" +
    "                            <option value=\"torch.nn.AvgPool3d\">AvgPool3d</option>\n" +
    "                        </select>" +
    "                    </div>" +
    "                </div>" +
    "                </form>"
var searh_layer = {
    "view_layer": view_layer,
    "linear_layer": linear_layer,
    "conv1d_layer": conv1d_layer,
    "conv2d_layer": conv2d_layer
}*/
