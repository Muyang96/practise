$(document).ready(function() {

    new Vue({
        el: "#searchBar",
        data: {
            msg: "医院",
            ifshow: false,
        },
        methods: {
            mouseOver: function(index) {
                if (index == 1) {
                    $("li:eq(0)").css("backgroundColor", "#ebeeee");
                    this.ifshow = true;
                } else if (index == 2) {
                    $("li:eq(1)").css("backgroundColor", "#ebeeee");
                    this.ifshow = true;
                } else if (index == 3) {
                    $("li:eq(2)").css("backgroundColor", "#ebeeee");
                    this.ifshow = true;
                }
            },
            mouseLeave: function(index) {
                if (index == 1) {
                    $("li:eq(0)").css("backgroundColor", "#fff");
                } else if (index == 2) {
                    $("li:eq(1)").css("backgroundColor", "#fff");
                } else if (index == 3) {
                    $("li:eq(2)").css("backgroundColor", "#fff");
                }
            },
            showEvent: function() {
                this.ifshow = true;
            },
            hideEvent: function() {
                this.ifshow = false;
            },
            clickOption: function(index) {
                if (index == 1) {
                    this.msg = "科室"
                } else if (index == 2) {
                    this.msg = "疾病"
                } else if (index == 3) {
                    this.msg = "医院"
                }
            }
        },

    })



    var topElem = {
        props: ['content', 'index'],
        template: '<span @click="handleClick">{{content}}</span>',
        methods: {
            handleClick: function() {
                this.$emit('shift', this.index)
            }
        },
    }

    var mainOne = {
        template: '<table cellspacing="0"><thead><tr><th colspan="5">开放预约科室</th></tr></thead><tbody><tr><td rowspan="3" class="lightBlue">2301</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td></tr><tr><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td></tr><tr><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">特殊门诊科</td></tr><tr><td rowspan="3" class="lightBlue">专科</td><td @click="jumpPage">多发性硬化专科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">多发性硬化专科</td></tr><tr><td @click="jumpPage">多发性硬化专科</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">门诊麻醉科</td></tr><tr><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">多发性硬化专科</td></tr><tr><td rowspan="3" class="lightBlue">内科</td><td @click="jumpPage">肿瘤内科门诊</td><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">肿瘤内科门诊</td></tr><tr><td @click="jumpPage">肿瘤内科门诊</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">特需血液内科</td></tr><tr><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">肿瘤内科门诊</td></tr><tr><td rowspan="3" class="lightBlue">内科</td><td @click="jumpPage">肿瘤内科门诊</td><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">肿瘤内科门诊</td></tr><tr><td @click="jumpPage">肿瘤内科门诊</td><td @click="jumpPage">特殊门诊科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">特需血液内科</td></tr><tr><td @click="jumpPage">特需血液内科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">门诊麻醉科</td><td @click="jumpPage">肿瘤内科门诊</td></tr></tbody></table>',
        methods: {
            jumpPage: function() {
                this.$emit('jump')
            }
        },
    }



    var container = {
        template: ' <div class="mainOne-container"><div class="mainOne-container-title"><p class="mainOne-container-title--p">预约规则<span class="mainOne-container-title--span">（更新时间每日8:30更新）</span></p></div><div class="mainOne-container--bottom"><div class="mainOne-container--left"><p class="mainOne-container--p">预约周期:</p><p class="mainOne-container--p">放号时间:</p><p class="mainOne-container--p">停挂时间:</p><p class="mainOne-container--p">退号时间:</p><p class="mainOne-container--p">特殊规则:</p></div><div class="mainOne-container--right"><p class="mainOne-container--2p">7天</p><p class="mainOne-container--2p">8:30</p><p class="mainOne-container--2p">下午14:00停止次日预约挂号(下午14:0停止次日预约挂号)</p><p class="mainOne-container--2p">就诊前一工作日14:00前取消</p><p class="mainOne-container--2p"><br/>①取号地点不同:西院区预约号取号地点:西院区门诊楼层大厅挂号窗囗取号6东院区预约号取号地点:东移区老门诊楼层大厅拄号窗口或新门诊楼各楼层号收费商口取号</p></div></div></div>'
    }

    var mainTwo = {
        template: '<div class="mainTwo-container"><p>北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院,是国家卫生计生委指定的全囯疑难重症诊治指导中心,也是最早承担高干保健和外宾医疗任务的医院之一,以学科齐全、技术力量雄厚、特色专科突出、多学科综合优势强大享蓍海内外。在2010、201、2012、2013、2014年复旦大学医院管理研究所公布的“中国最佳医院排行榜”中连续五年名列榜首。</p><p>医院建成于1921年,由洛克菲勒基金会创办。建院之初,就志在“建成亚洲最好的医学中心”。90余年来,医院形成了“严谨、求精、勤奋、奉献”的协和精神和兼容并蓄的特色文化风格,创立了“三基”、“三严”的现代医学教育理念,形成了以“教授、病案、图书馆”著称的协和“三宝”,培养造就了张孝骞、林巧稚等一代医学大师和多位中国现代医学的领军人物,并向全国输送了大批的医学管理人才,创建了当今知名的10余家大型综合及专科医院。2011年在总结90年发展经验的基础上,创新性提出了“待病人如亲人,提高病人满意度;待同事如家人,提高员工幸福感”新办院理念。</p><p>目前,医院共有2个院区、总建筑面积53万平方米,在职职工4000余名、两院院士5人、临床和医技科室53个、国家级重点学科20个、国家临床重点专科29个、博士点16个、硕士点29个、国家级继续医学教育基地6个、二级学科住院医师培养基地18个、三級芓科专科医师培养基地15个。开放住院床位2000余张,单日最高门诊量约15万人次、年出院病人约8万余人次。被评为“全国文明单位”、“全国创先争优先进基层党组织”、“全国卫生系统先进集体"、“首都卫生系统文明单位最受欢迎三甲医院”、“荣获全国五一劳动奖章”。同时,医院还承担着支援老少边穷地区、国家重要活动和突发事件主力医疗队的重任,在2008年北京奥运工作中荣获“特别贡献奖”。</p><p>90多年来，协和人以执着的医志、高尚的医德、精湛的医术和严谨的学风书写了辉煌的历史,今天的协和人正为打造“国际知名、国內一流”医院的目标而继续努力。</p></div>'
    }

    var mainThr = {
        template: '<div class="mainThr-container"><p class="mainThr-space mainThr-title">北京协和医院挂号须知</p><p class="mainThr-space">电话预约挂号:010-114(24小时)</p><p class="mainThr-space">网预约挂号:http://www.bjguahao.gov.cn</p><p>根据卫生部8月5日知和卫生局8月20日工作部署,北京协和医院已完成电话、网络预约挂号的流程建设,现将预约挂号、取号有关事项公布如下,请您认真阅读预约须知:</p><p class="mainThr-space">一、预约时间范围：</p><p>1.  您可预约7天内(试点)日间的副教授、主治医师和住院医师等号源。节假日不安排预约号(含周六、周日)。</p><p>2.  每天早8:30分开始放号; 下午14:00停止次日预约挂号。</p><p>3.  周五14:00停挂至下周一。</p><p class="mainThr-space">二、预约实名制:</p><p>统一平台电话预约和网上预约挂号均采取实名制注册预约,请您如实提供就诊人员的真实姓名、有效证件号(身份证、军官证、护照).性别、电话、手机号码、病案号或协和就诊卡条形码,上的ID号等有效基本信息。</p><p class="mainThr-space">三、预约取号:</p><p>1.预约成功后,请患者于就诊当日携带有效证件、预约识别码及协和医院就诊卡到医院挂号窗口验证预约信息(核对与预约登记实名信息-致的本人有效证件和预约识别码 )和取号,如验证不符则医院不能提供相应的诊疗服务。如果没有协和医院就诊卡者,请先办好就诊卡后再取号。</p><p>1.预约成功后,请患者于就诊当日携带有效证件、预约识别码及协和医院就诊卡到医院挂号窗口验证预约信息(核对与预约登记实名信息-致的本人有效证件和预约识别码 )和取号,如验,证不符则医院不能提供相应的诊疗服务。如果没有协和医院就诊卡者,请先办好就诊卡后再取号。</p><p>3、取号地点:西院区预约号取号地点:西院区门诊楼一 层大厅挂号窗口取号。东院区预约号取号地点:东院区老门诊楼-层大厅挂号窗口或新门诊楼各楼层挂号/收费窗口取号。</p><p class="mainThr-space">四、医生停诊</p><p>如遇特殊情况医生停诊,给您造成的不便敬请谅解。医生临时停诊,工作人员将会用电话方式及时通知您,请配合更改就诊日期或更换其他医生,请您保持电话畅通。</p><p class="mainThr-space">五、取消预约:</p><p>挂出的预约号如办理退号,至少在就诊前一-工作日14:00前通过网站或者114电话凭预约识别码进行取消。</p><p class="mainThr-space">六、爽约处理:</p><p>1.如预约成功后患者未能按时就诊且不办理取消预约号视为爽约。</p><p>2. 一年内(自然年)无故爽约累计达到3次的爽约用户将自动进入系统爽约名单,此后3个月内将取消其预约挂号资格;-年内(自然年)累计爽约6次,取消6个月的预约挂号资格。</p><p class="mainThr-space">七、其他注意事项:</p><p>1、协和东院、西院都可以预约。</p><p>2.国际医疗部门诊、卫干门诊不对外预约。</p></div>'
    }


    var mainFiv = {
        template: '<div class="mainFiv-wrap"><form><p class="mainFiv-particle">预约识别码：</p><input class="mainFiv-particle" type="text"/><button class="mainFiv-particle">查询订单</button></form></div>'
    }

    new Vue({
        el: "#main",
        data: {
            list: ['预约挂号', '医院介绍', '预约须知', '停诊信息', '查询取消'],
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
        },
        components: {
            'top-elem': topElem,
            'main-one': mainOne,
            'container': container,
            'main-two': mainTwo,
            'main-thr': mainThr,
            'main-fiv': mainFiv
        },
        methods: {
            handleJump: function() {
                window.location.href = "jump.html";
            },
            handleShift: function(index) {
                this.show1 = false;
                this.show2 = false;
                this.show3 = false;
                this.show4 = false;
                this.show5 = false;
                $('.main-top >span').attr("class", "nav-main-item");
                if (index == 0) {
                    this.show1 = true;
                    $('.main-top >span:eq(0)').addClass("nav-main-active");
                } else if (index == 1) {
                    this.show2 = true;
                    $('.main-top >span:eq(1)').addClass("nav-main-active");
                } else if (index == 2) {
                    this.show3 = true;
                    $(".main-content").css("height", "800px");
                    $('.main-top >span:eq(2)').addClass("nav-main-active");
                } else if (index == 3) {
                    this.show4 = true;
                    $(".main-content").css("height", "700px");
                    $('.main-top >span:eq(3)').addClass("nav-main-active");
                } else if (index == 4) {
                    this.show5 = true;
                    $(".main-content").css("height", "350px");
                    $('.main-top >span:eq(4)').addClass("nav-main-active");
                }
            }
        }
    })

    $('.main-top >span:first').addClass("nav-main-active");

    // 将星期几放在一个数组中
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    $(function() {

        //	输出今天之后7个星期的排班
        var pageCount = 7;
        // 记录当前显示第几页，默认是第一页，所以为0
        var currentPage = 0;
        // 一共有多少天
        var days = pageCount * 7;
        // 获取当前Data对象
        var date = new Date();
        // 获取时间 ms
        var time = date.getTime();
        // 遍历所有的天数，生成html结构
        for (i = 0; i < days; i++) {
            var _t = time + i * 86400 * 1000; //	1天的毫秒数;
            // 根据每天的毫秒数计算当前时间
            var _d = new Date(_t);
            // 定义空数组存放html内容
            var html = [];
            // 获取星期几
            var w = week[_d.getDay()];
            // 获取年份
            var y = _d.getFullYear();
            // 获取月份
            var m = _d.getMonth() + 1;
            // 个位数的话，在前面添加0, 示例： 7 ---> 07
            m = m < 10 ? '0' + m : m;
            // 获取日
            var d = _d.getDate();
            d = d < 10 ? '0' + d : d;

            var element = document.createElement("p");
            $(element).addClass("timetable--date");
            $(".first-line").append(element);
            $(element).html(w + '<br>' + y + '-' + m + '-' + d);
            var element = document.createElement("div");
            $(".second-line").append(element);
            var element = document.createElement("div");
            $(".third-line").append(element);
            $(element).html("约满");
            var element = document.createElement("div");
            $(".forth-line").append(element);

        }
        // 获取外层盒子的宽度，方便计算盒子的移动距离,减一是为了计算的更准确
        var width = $('.timeTable-main').width() - 1;
        // 给左按钮添加点击事件
        $('.timeTable-left .timeTable-icon').on('click', function() {
            // currentPage 值为0时，表示当前显示第一页，点击左按钮时，不可以再移动了
            if (currentPage == 0) {
                // 将currentPage赋值为0
                currentPage = 0
                    // 直接return退出函数
                return
            }
            // 点击过程中让currentPage减一
            currentPage--
            // 通过改变left属性值，实现移动效果
            $('.timeTable-table').animate({ left: width * currentPage * -1 }, 'slow');
        });
        // 给右按钮添加点击事件
        $('.timeTable-right .timeTable-iconR').on('click', function() {
            // currentPage 值为pageCount - 1时，表示当前显示最后一页，点击右按钮时，不可以再移动了
            // 因为currentPage是从0开始计算的，pageCount是从1开始计算的，所以需要将pageCount减一后与currentPage进行比较
            if (currentPage == pageCount - 1) {
                // currentPage为 pageCount - 1
                currentPage = pageCount - 1
                    // 直接return退出函数
                return
            }
            // 点击过程中让currentPage加一
            currentPage++
            $('.timeTable-table').animate({ left: width * currentPage * -1 }, 'slow');
        });
    });

    // 返回事件

    $(".return").click(function() {
        window.location.href = "index.html";
    });








});