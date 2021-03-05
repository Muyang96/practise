var navList = {
    props: ['content', 'index'],
    template: '<li @mouseover="overItem" @mouseleave="leaveItem" class="nav-item">{{content}}</li>',
    methods: {
        overItem: function(event) {
            this.$emit('change-color', event)
        },
        leaveItem: function(event) {
            this.$emit('return-color', event)
        }
    }
}


new Vue({
    el: "#root",
    components: {
        'nav-list': navList
    },
    data: {
        active: ' ',
        show: false,
        list: ['未完成订单', '已完成订单（改/退）', '我的保险', '查看个人信息', '账户安全', '常用联系人', '重点旅客预约', '遗失物品查找', '服务查询', '投诉', '建议']
    },
    methods: {
        mouseoverEvent: function() {
            this.active = "border-color: transparent transparent black transparent"
            this.$refs.navList.style.cursor = "pointer"
            this.show = true
        },
        mouseleaveEvent: function() {
            this.active = "border-color: black transparent transparent transparent"
            this.show = false
        },
        handleColor: function(event) {
            event.target.style.color = "rgb(251, 116, 3)"
        },
        returnColor: function(event) {
            event.target.style.color = " rgb(143, 141, 141)"
        }

    }
})

var accountList = {
    props: ['content', 'index'],
    template: '<li class="account-item"><div class="input-label"><span class="orange">*</span><span>{{content}}: </span></div><input type="text" class="inputArea" @blur="blur"/><span class="hint"></span></li>',
    methods: {
        blur: function() {
            this.$emit('show-text', this.index)
        }
    }

}

var clear1 = false,
    clear2 = false,
    clear3 = false,
    clear4 = false,
    clear5 = false,
    clear6 = false,
    clear7 = false;



var checkInput = function(hintText, inputValue, valueindex, index, reg, greenText, redText) {
    if (!reg.exec(inputValue[valueindex].value)) {
        hintText[index].innerText = redText;
        hintText[index].style.color = "red";
        if (index == 0) {
            clear1 = false;
        } else if (index == 5) {
            clear5 = false;
        } else if (index == 6) {
            clear6 = false;
        } else if (index == 7) {
            clear7 = false;
        }
    } else {
        hintText[index].innerText = greenText;
        hintText[index].style.color = "green";
        if (index == 0) {
            clear1 = true;
        } else if (index == 5) {
            clear5 = true;
        } else if (index == 6) {
            clear6 = true;
        } else if (index == 7) {
            clear7 = true;
        }
    }
}

var doubleCheckPass = function(hintText, inputValue, index, greenText, redText, voidText) {
    if (inputValue[index].value == inputValue[index - 1].value) {
        hintText[index].innerText = greenText;
        hintText[index].style.color = "green";
        clear3 = true;
    } else if (inputValue[index].value == "") {
        hintText[index].innerText = voidText;
        hintText[index].style.color = "red";
        clear3 = false;
    } else {
        hintText[index].innerText = redText;
        hintText[index].style.color = "red";
        clear3 = false;

    }
}

// 创建用户名规则组件

var rulesBlock = {
    props: ['rules', 'index'],
    template: '<p class="rulesItems">{{rules}}</p>'
}


new Vue({
    el: "#main",
    data: {
        showb: false,
        list: [' 用户名', ' 密码登录', ' 确认密码', ' 姓名', ' 证件类型', ' 证件号码', ' 邮箱', ' 手机号码', ' 旅客类型'],
        textList: ['1.确认姓名中生僻字无法输入时，可用生僻字拼音或同音字替代。', '2.输入姓名保存后，遇有系统无法正确显示的汉字，可用该汉字的拼音或同音字重新修改后保存。', '3.姓名中有繁体字无法输入时，可用简体替代。', '4.姓名较长，汉字与英文字符合计超过30个（1个汉字算2个字符）的，需按姓名中第一个汉字或英文字符开始按顺序连续输入30个字符（空格字符不输入），其中英文字符输入时不区别大小写']
    },
    components: {
        'account-list': accountList,
        'rules-block': rulesBlock
    },
    methods: {
        mouseoverEvent: function() {
            this.$refs.rules.style.cursor = "pointer"
            this.showb = true
        },
        mouseleaveEvent: function() {
            this.showb = false
        },
        jump: function() {
            if (clear1 && clear2 && clear3 && clear4 && clear5 && clear6 && clear7 == true) {
                window.location.href = 'https://www.imooc.com/'
            }
        },
        showText: function(index) {
            var inputValue = document.getElementsByClassName("inputArea");
            var hintText = document.getElementsByClassName("hint");
            if (index == 0) {
                var reg = /^[a-z]\w{5,30}/;
                checkInput(hintText, inputValue, index, index, reg, "用户名输入正确", "6-30位字母、数字或'_'，字母开头");
            } else if (index == 1) {
                checkPass(inputValue, index, this.$refs.secondBox, this.$refs.thirdBox, this.$refs.rules)
            } else if (index == 2) {
                doubleCheckPass(hintText, inputValue, index, "两次输入一致", "两次密码输入不一致，请重新输入", "输入框不能为空")
            } else if (index == 3) {
                this.$refs.rules.innerHTML = ""
                var reg = /^[a-zA-Z]{3,30}$|^[\u4e000-\u9fa5]{2,15}$/
                checkUserName(hintText, inputValue, index, reg, "姓名输入正确", "姓名只能包含中文或者英文,且字符在3-30个之间！")
            } else if (index == 5) {
                var reg = /^\d{17}[0-9xX]$/;
                checkInput(hintText, inputValue, 4, index, reg, "号码输入正确", "请输入18位身份证号码");
            } else if (index == 6) {
                var reg = /^([a-zA-Z]|[0-9])(\w|\-)*@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                checkInput(hintText, inputValue, 5, index, reg, "邮箱格式正确", "请输入正确的邮箱");
            } else if (index == 7) {
                var reg = /^1[3-9][0-9]{9}$/g;
                checkInput(hintText, inputValue, 6, index, reg, "手机格式正确", "您输入的手机号码不是有效的格式！");
            }

        }
    }
})


// 写入初始提示语
var hints = document.getElementsByClassName("hint");
console.log(hints);
hints[0].innerText = "6-30位字母、数字或'_'，字母开头";
hints[0].style.color = "orange";

hints[7].innerText = "请正确填写手机号码，稍后将向该手机号码发送验证码";
hints[7].style.color = "orange";

// 修改DOM节点
var inputValue = document.getElementsByClassName("inputArea");
inputValue[8].remove();
var selectElem = document.createElement('select');
selectElem.setAttribute('class', 'select')
selectElem.innerHTML = "<option>成人</option><option>儿童</option><option>学生</option><option>残疾军人</option><option>伤残人民警察</option>";
var father = document.getElementsByClassName("account-item")[8];
var elem = hints[8];
father.insertBefore(selectElem, elem);

inputValue[4].remove();
var selectElem2 = document.createElement('select');
selectElem2.setAttribute('class', 'select')
selectElem2.innerHTML = "<option>二代身份证</option><option>港澳通行证</option><option>台湾通行证</option><option>护照选项</option>";
var father2 = document.getElementsByClassName("account-item")[4];
var elem2 = hints[4];
father2.insertBefore(selectElem2, elem2);



var stop = false;




var checkPass = function(inputValue, index, secondBox, thirdBox, rules) {
    var reg = /^[\x21-\x7E]{6,20}$/
    var ifnum = /^[0-9]+$/
    var ifalp = /^[a-zA-Z]+$/
    var ifsym = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/
    var ifnumPlusifalp = /^[a-zA-Z0-9]+$/
    var ifnumPlusifsym = /^[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/
    var ifalpPlusifsym = /^[a-zA-Z`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/
    var safePass = /^[0-9a-zA-Z`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/
    if (!reg.exec(inputValue[index].value) && stop == false) {
        var paraElem = document.createElement('p');
        paraElem.setAttribute('class', 'paraElem');
        var contentNode = document.createTextNode('6-20位字母、数字或符号，且字体颜色变为红色');
        paraElem.appendChild(contentNode);
        var fatherElem = document.getElementById("fatherElem");
        var elem = document.getElementsByClassName("account-item")[2];
        fatherElem.insertBefore(paraElem, elem);
        paraElem.style.color = "red";
        rules.style.marginTop = "20px";

        stop = true;
        clear2 = false;
    } else {
        var fatherElem = document.getElementById("fatherElem");
        var paraElem = document.querySelector(".paraElem");
        if (paraElem) {
            fatherElem.removeChild(paraElem);
        }

        clear2 = true;
        if (ifnum.test(inputValue[index].value) || ifalp.test(inputValue[index].value) || ifsym.test(inputValue[index].value) == true) {
            clear2 = false;
        } else if (ifnumPlusifalp.test(inputValue[index].value) || ifnumPlusifsym.test(inputValue[index].value) || ifalpPlusifsym.test(inputValue[index].value) == true) {
            secondBox.style.backgroundColor = "orange"
            clear2 = false;
        } else if (safePass.test(inputValue[index].value) == true) {
            secondBox.style.backgroundColor = "orange"
            thirdBox.style.backgroundColor = "green"
            clear2 = true;
        }
    }
}

var checkUserName = function(hintText, inputValue, index, reg, greenText, redText) {
    if (!reg.exec(inputValue[index].value)) {
        hintText[index].innerText = redText;
        hintText[index].style.color = "red";
    } else {
        hintText[index].innerText = greenText;
        hintText[index].style.color = "green";
        clear4 = true;
    }
}