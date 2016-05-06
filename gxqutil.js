var HTMLS = {
    toast: '<div class="J_gxq_toast" id="J_gxq_toast" style="display: none;">' + '<div class="J_gxq_toast_tip" id="J_gxq_toast_tip">系统提示</div>' + '</div>',

    loading_toast: '<div id="J_gxq_loading_toast" class="J_gxq_loading_toast" style="display: none;"> <div class="J_gxq_mask_transparent"></div> <div class="J_gxq_loading_toast"> <div class="J_gxq_loading"> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_0"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_1"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_2"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_3"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_4"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_5"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_6"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_7"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_8"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_9"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_10"></div> <div class="J_gxq_loading_leaf J_gxq_loading_leaf_11"></div> </div> <p class="J_gxq_loading_toast_content" id="J_gxq_loading_toast_content">数据加载中</p> </div> </div>',
}

var GxqToast = function(){
    var config = {};
    this.get = function(n) {
        return config[n];
    }

    this.set = function(n, v) {
        config[n] = v;
    }
    this.init();
}

GxqToast.prototype = {
    init: function() {
        this.createDom();
    },
    createDom: function() {
        var body = $("body");
        var componment = $("#toast");

        if (componment.length === 0) {
            body.append(HTMLS.toast);
        }
        this.set("toast", $("#J_gxq_toast"));
    },
    show: function(str,expiredTime) {
        var _this = this;
        var str = typeof str === 'string' ? str : str.toString();
        var toast = _this.get("toast");

        toast.find(".J_gxq_toast_tip").html(str);
        toast.show();
        if (expiredTime) {
            console.log(expiredTime);
            setTimeout(_this.hideToast('t'),expiredTime);
        }
    },
    hideToast: function(t) {
        // var toast = that.get("toast");
        console.log('eeee');
        // toast.find(".J_gxq_toast_tip").html("");
        // toast.hide();
    },
};