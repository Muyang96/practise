//渲染
function alloverRender(instance, td, row, col, prop, value, cellProperties) {
    td.innerText = value;
    //td.style.borderColor = "black";
    td.style.textAlign = "center";
    if (prop == "wheel-kind") {
        td.style.verticalAlign = "middle";
    }
    if (prop == "singles" || prop == "giveout_amount" || prop == "price_account") {
        td.style.backgroundColor = "#FFE699";
    }
    if (prop == "price_influence") {
        td.style.backgroundColor = " #F4B084";
    }
    if (prop == "single_cost_influence") {
        td.style.backgroundColor = " #9BC1E6";
    }
    if (prop == "total_influence") {
        td.style.backgroundColor = "#FFF2CC";
    }
    return td;
}



var getHotHeight = function(obj) {
    var winHeight = $(window).height();
    var offset = $(obj).offset();
    var objHeight = winHeight - offset.top - 60;
    return objHeight;
}








var container = document.getElementById('tableC');

var data = [
    { "wheel-kind": "轮子", "code_number": "1", "name_tag": "车轮" },
    { "code_number": "2", "name_tag": "玻璃" },
    { "code_number": "3", "name_tag": "车轮" },
    { "code_number": "4", "name_tag": "重" },
    { "code_number": "5", "name_tag": "重" },
    { "code_number": "6", "name_tag": "前盖" },
    { "code_number": "7", "name_tag": "车厢" },
    { "code_number": "8", "name_tag": "其他材料" },
    { "code_number": "9", "name_tag": "合计" },
    { "wheel-kind": "轮子", "code_number": "1", "name_tag": "车轮" },
    { "code_number": "2", "name_tag": "承重" },
    { "code_number": "3", "name_tag": "承重" },
    { "code_number": "4", "name_tag": "前盖" },
    { "code_number": "5", "name_tag": "车厢" },
    { "code_number": "6", "name_tag": "其他材料" },
    { "code_number": "7", "name_tag": "合计" },
    { "wheel-kind": "E轴4级修轮对", "code_number": "1", "name_tag": "车轮" },
    { "code_number": "2", "name_tag": "车轴" },
    { "code_number": "3", "name_tag": "承重" },
    { "code_number": "4", "name_tag": "承重" },
    { "code_number": "5", "name_tag": "承重" },
    { "code_number": "6", "name_tag": "前盖" },
    { "code_number": "7", "name_tag": "车厢" },
    { "code_number": "8", "name_tag": "其他材料" },
    { "code_number": "9", "name_tag": "合计" },
    { "wheel-kind": "E轴3级修轮对", "code_number": "1", "name_tag": "车轮" },
    { "code_number": "2", "name_tag": "承重" },
    { "code_number": "3", "name_tag": "承重" },
    { "code_number": "4", "name_tag": "前盖" },
    { "code_number": "5", "name_tag": "车厢" },
    { "code_number": "6", "name_tag": "其他材料" },
    { "code_number": "7", "name_tag": "合计" },
    { "code_number": "总计" }
]

var hot = new Handsontable(container, {
    data: data,
    height: getHotHeight($("#tableC")),
    width: "99%",
    rowHeaders: false,
    colHeaders: true,
    nestedHeaders: [
        [{ label: "修程", colspan: 1 }, { label: "序号", colspan: 1 }, { label: "名称", colspan: 1 }, { label: "预算指标", colspan: 3 }, { label: "ERP账面支出", colspan: 9 }, { label: "支出比较", colspan: 6 }],
        ["", "", "", "单价", "定额", "单本", "任务", "预算总金额", "领料数量", "额面金额", "消耗定额", "定额差", "材料均价", "条均金额", "价格差", "价格对预算的影响", "单耗对预算的影响", "合计条均影响", "价格变化对总成本的影响", "单耗变化对总成本的影响", "合计节超"]
    ],
    columns: [{ "data": "wheel-kind", "type": "text", renderer: alloverRender },
        { "data": "code_number", "type": "numeric", renderer: alloverRender },
        { "data": "name_tag", "type": "text", renderer: alloverRender },
        { "data": "single_price", "type": "numeric", renderer: alloverRender },
        { "data": "fixed_amount", "type": "numeric", renderer: alloverRender },
        { "data": "singles", "type": "numeric", renderer: alloverRender },
        { "data": "missions", "type": "numeric", renderer: alloverRender },
        { "data": "forcast_price_total", "type": "numeric", renderer: alloverRender },
        { "data": "giveout_amount", "type": "numeric", renderer: alloverRender },
        { "data": "price_account", "type": "numeric", renderer: alloverRender },
        { "data": "standard_cost", "type": "numeric", renderer: alloverRender },
        { "data": "standard_gap", "type": "numeric", renderer: alloverRender },
        { "data": "material_price", "type": "numeric", renderer: alloverRender },
        { "data": "average_price", "type": "numeric", renderer: alloverRender },
        { "data": "price_gap", "type": "numeric", renderer: alloverRender },
        { "data": "price_influence", "type": "numeric", renderer: alloverRender },
        { "data": "single_cost_influence", "type": "numeric", renderer: alloverRender },
        { "data": "total_influence", "type": "numeric", renderer: alloverRender },
        { "data": "price__totalInfluence", "type": "numeric", renderer: alloverRender },
        { "data": "single_cost_totalInfluence", "type": "numeric", renderer: alloverRender },
        { "data": "overamount_total", "type": "numeric", renderer: alloverRender }
    ],

    colwidth: 100,
    mergeCells: [
        { "row": 0, "col": 0, "rowspan": 9, "colspan": 1 },
        { "row": 9, "col": 0, "rowspan": 7, "colspan": 1 },
        { "row": 16, "col": 0, "rowspan": 9, "colspan": 1 },
        { "row": 25, "col": 0, "rowspan": 7, "colspan": 1 },
        { "row": 32, "col": 1, "rowspan": 1, "colspan": 3 }
    ],
    licenseKey: 'non-commercial-and-evaluation'
        // 激活码
});
/*
var thElems = document.getElementsByTagName("th");
for (i = 0; i < thElems.length; i++) {
    thElems[i].style.backgroundColor = "transparent";
}
var thElem = document.getElementsByTagName("th")[3];
console.log(thElem);
var spanElem = thElem.getElementsByClassName("colHeader")[0];
*/
//spanElem.style.fontWeight = "bold";
// spanElem.innerText = "abc";