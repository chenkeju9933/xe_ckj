var data1 = ['管理员项', '客户信息', '管理动作', '业务考评', '资产管理维护', '分析图表', '退出'];
var data2 = [
    ['权限分配', '部门设置', '员工管理', '押品设置', '操作纪录', "客户性质", "货款产品", "收款方式", "合作银行", "全部银行", "渠道"],
    ['费用发放', '相关人员', '客户照片', '数据导入', '贷款明细', '还款明细'],
    ['客户签约', '签约审核', '风控验收', '货款到款', '货款发放', '客户调查'],
    ['业绩情况', '市场开放', '市场维护', '费用支出'],
    ['资产管理', '设备设置', '设备保修', '保修审核', '已审核问题'],
    ['月日均变化图', '贷款笔数变化图'],
    ['通知', '个人资料', '退出']
];

// array = [1,2,3];
// array2 = [[11],[21],[31]];
// array[0] = 1;
// array[1][1] = 2;
// [1,11,2,21,3,31]
var datas = new Array();
for (var i = 0; i < data1.length; i++) {
    datas.push(data1[i]);
    // datas.push(data2[i]);
    var dd = data2[i];
    for (var j = 0; j < dd.length; j++) {

        datas.push(dd[j]);
    }
    // if(i == 0)break;
}


function initTree(t) {
    var tree = document.getElementById(t);

    var lists = tree.getElementsByTagName('li');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i]; //li
        (function (num) {
            var sub_ul = item.getElementsByTagName('ul');
            var a_el = item.getElementsByTagName('a');
            var b_el = item.getElementsByTagName('b');
            if (sub_ul.length != 0) { //1表
                sub_ul[0].style.display = 'none';
                a_el[0].onclick = function () {
                    if (sub_ul[0].style.display == 'block') {
                        sub_ul[0].style.display = 'none';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-right.png")';
                    } else {
                        sub_ul[0].style.display = 'block';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-down.png")';
                    }
                }
            } else { //2表

                a_el[0].onclick = function () {
                    var li_el = this.parentNode.parentNode.getElementsByTagName('li');
                    for (var i = 0; i < li_el.length; i++) {
                        var sub_a = li_el[i].getElementsByTagName('a');
                        // sub_a[0].classList.remove('item-selected');
                        sub_a[0].style.borderLeft = '4px solid #f8f6f7';
                    }
                    // this.classList.add('item-selected');
                    this.style.borderLeft = '4px solid #f47f03';
                    console.log(datas[num]);
                    document.getElementById('show').innerText = datas[num];
                    
                }
            }

        })(i);
    }

}

function createLeftNavs(id) {
    var ul_el = document.getElementById(id);
    if (data1.length != 0) {
        for (var i = 0; i < data1.length; i++) {
            var li = document.createElement('li');
            var b = document.createElement('b');
            var a = document.createElement('a');
            a.innerText = data1[i];
            a.style.background = '#f5f3f3 url("./sources/images/home.png") no-repeat left center';
            a.setAttribute('href', 'javascript:void(0);');
            li.appendChild(b);
            li.appendChild(a);
            var sub_ul = document.createElement('ul');
            sub_ul.classList.add('sub-item');
            for (var j = 0; j < data2[i].length; j++) {
                var s_li = document.createElement('li');
                var s_a = document.createElement('a');
                s_a.innerText = data2[i][j];
                s_li.appendChild(s_a);
                sub_ul.appendChild(s_li);
            }
            li.appendChild(sub_ul);
            ul_el.appendChild(li);
        }
    }

}
var pages_total_data =new Array();
// 显示页内容
function showPage(el,page){
     for(var i=0;i<20;i++) {
          if(pages_total_data.length===((page-1)*20+i)){
              break;
          }

         var tr = document.createElement('ul'); 
           for(var j=0;j<5;j++){
               var td= document.createElement('li');
               td.innerText= 'td'+(i+1)+(j+1);
               td.style.display="inline-block";
               tr.appendChild(td);


           }
           el.appendChild(tr);
     }
     
}
// 获取当前指定线束数据容器
function getContentWrappper (){
         var get_content = document.getElementById('t_body');
         if(get_content){
             get_content.parentNode.removeChild(get_content);
         }
             get_content= document.createElement('div');
             get_content.setAttribute('id','t_body');
             document.getElementsByClassName('table')[0].appendChild(get_content);
            return  get_content;
}
// 创建页码
var currentPage = 1;
function createPages (cla,pages){
    var pages_el = document.getElementsByClassName(cla)[0];
    console.log(pages_el);
    var p_ul =pages_el.getElementsByTagName('ul')[0];
    var li_count= 0;
    if(pages<5){

    }else{

    }
    for(var index=0;index<5;index++){
        var page_li =document.createElement('li');
        switch (index) {
            case 0:{
                var a_el = document.createElement('a');
                a_el.setAttribute('href','javascript:void(0)');
                a_el.innerText="当前页:";
                var current_span =document.createComment('span');
                current_span.innerText='1';
                current_span.innerText = '#f47f03';
                var total_span = document.createElement('span');
                total_span.innerText='/'+pages.length;
                a_el.appendChild(current_span);
                a_el.appendChild(total_span);
                page_li.appendChild(a_el);


            }
                
                break;
        
            default:
            {
                var a_el = document.createElement('a');
                a_el.innerText = index;
                a_el.setAttribute('href','javascript:void(0)');
                (function(num){
                  a_el.onclick= function(){
                      switch (num) {
                          case 1:
                        if(currentPage=1){
                               break;}
                        currentPage=1;
                            // 执行刷新当前页数据
                        break;
                            case 2:
                            if(currentPage>1){
                              currentPage-=1;
                            }else{

                            }
                        break;
                        case 3:
                        if(currentPage<pages){
                        currentPage+=1;
                        }else{
                             }
                        break;
                        case 4:
                        if(currentPage==pages){
                        break;
                        }
                        break;
                    default:
                    break;
                }

                    }
        })(index);

            }
                break;
        }

    }
    for(var i=0;i<2;i++){
        var li =document.createElement('li');
        var a = document.createElement('a');
        li.appendChild(a);
        a.setAttribute('href','javascript:void(0)');
        a.innerText=i+1;
        (function(num){
            a.onclick=function(){
                // 实现切换页
                var el= getContentWrappper();
                 currentPage = num+1;
                 showPage(el,currentPage);

            }
        }

        )(i);
        p_ul.appendChild(li);
    }
}
var data1 = ['管理员项','客户信息','管理动作','业务考评','资产管理维护','分析图表','退出'];
var data2 = [['权限分配','部门设置','员工管理','押品设置','操作纪录', "客户性质", "货款产品", "收款方式", "合作银行", "全部银行", "渠道"],
['费用发放', '相关人员', '客户照片','数据导入', '贷款明细','还款明细'],
['客户签约', '签约审核', '风控验收', '货款到款', '货款发放', '客户调查'],
['业绩情况','市场开放','市场维护','费用支出'],
['资产管理','设备设置','设备保修','保修审核','已审核问题'],
['月日均变化图','贷款笔数变化图'],
['通知','个人资料','退出']];

// array = [1,2,3];
// array2 = [[11],[21],[31]];
// array[0] = 1;
// array[1][1] = 2;
// [1,11,2,21,3,31]
var datas = new Array();
for(var i = 0;i<data1.length;i++){
    datas.push(data1[i]);
    // datas.push(data2[i]);
    var dd = data2[i];
    for(var j = 0; j < dd.length ;j++){
        
        datas.push(dd[j]);
    }
    // if(i == 0)break;
}



function initTree(t) {
    var tree = document.getElementById(t);

    var lists = tree.getElementsByTagName('li');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i];//li
        (function (num) {
            var sub_ul = item.getElementsByTagName('ul');
            var a_el = item.getElementsByTagName('a');
            var b_el = item.getElementsByTagName('b');
            if (sub_ul.length != 0) {//1表
                sub_ul[0].style.display = 'none';
                a_el[0].onclick = function () {
                    if (sub_ul[0].style.display == 'block') {
                        sub_ul[0].style.display = 'none';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-right.png")';
                    } else {
                        sub_ul[0].style.display = 'block';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-down.png")';
                    }
                }
            } else {//2表
                
                a_el[0].onclick = function () {
                    var li_el = this.parentNode.parentNode.getElementsByTagName('li');
                    for (var i = 0; i < li_el.length; i++) {
                        var sub_a = li_el[i].getElementsByTagName('a');
                        // sub_a[0].classList.remove('item-selected');
                        sub_a[0].style.borderLeft = '4px solid #f8f6f7';
                        sub_a[0].style.color="#999";
                    }
                    // this.classList.add('item-selected');
                    this.style.borderLeft = '4px solid #f47f03';
                    this.style.color="#f47f03";
                    document.getElementById('show').innerText = datas[num];
                    
                }
            }

        })(i);
    }

}

function createLeftNavs(id){
    var ul_el = document.getElementById(id);
    if (data1.length != 0){
        for(var i = 0;i < data1.length;i++){
            var li = document.createElement('li');
            var b = document.createElement('b');
            var a = document.createElement('a');
            a.innerText = data1[i];
            a.style.background='url("./sources/images/n'+i+'.png") no-repeat 5px center';
            a.style.backgroundSize='26px';
            a.setAttribute('href','javascript:void(0);');
            li.appendChild(b);
            li.appendChild(a);
            var sub_ul = document.createElement('ul');
            sub_ul.classList.add('sub-item');
            for(var j = 0;j<data2[i].length;j++){
                var s_li = document.createElement('li');
                var s_a = document.createElement('a');
                s_a.innerText = data2[i][j];
                s_a.style.background='url("./sources/images/n'+i+j+'.png") no-repeat 12px center';
                s_a.style.backgroundSize='18px';
                // s_a.style.color='#f47f03';
                s_li.appendChild(s_a);
                sub_ul.appendChild(s_li);
            }
            li.appendChild(sub_ul);
            ul_el.appendChild(li);
        }
    }

}
function createList (id,tdata){
    var wrapper =document.getElementById(id);
    var t_head =document.createElement('ul');
    for (var i=0;i<tdata.length;i++){
        var rol = document.createElement('li');
        var a_el= document.createElement('a');
        a_el.innerText=tdata[i];
        a_el.setAttribute('href','javascript:void(0);');
        rol.appendChild(a_el);
        t_head.appendChild(rol);

    }
    wrapper.appendChild(t_head);
    var content=document.createElement('div');
    content.setAttribute('id','content');
    wrapper.appendChild(content);
}
function searchInput(text){
    var s_input = document.createElement('input');
    s_input.setAttribute('type','checkbox');
    
    return s_input;
}
function addrow(id,data){
    var row = document.createElement('ul');
    var input_el =searchInput();
    data.unshift(input_el);
    
    for (var i=0;i<data.length;i++){
        var col = document.createElement('li');
        var a_el = document.createElement('a');
        
        a_el.innerText= data[i];
        a_el.setAttribute('href','javascript:void(0);');
        col.appendChild(a_el);
        row.appendChild(col);

    }
    document.getElementById(id).appendChild(row);
}
function initUi(){
    var xhr= null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
       xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var url = "http://127.0.0.1:8885/getdata";
    xhr.open('GET',url,true);
    xhr.send();
    xhr.onreadystatechange = function (){
        if(4 == xhr.readyState){
            if(200==xhr.status){
                var obj = JSON.parse(xhr.responseText);
                // console.log (obj);
                for (var i=0;i<20;i++){
                    var item = obj[i];
             var dd=[];
             dd.push(item['uname']);
             dd.push(item['loanamount']);
             dd.push(item['bank']);
             dd.push(item['mbp']);
             dd.push(item['dev']);
             dd.push(item['creditStatus']);
             dd.push(item['phone']);
             dd.push(item['marry']);
             dd.push(item['usex']);
             dd.push(item['userType']);
             dd.push(item['utypeofcustomer']);
             dd.push(item['CN']);
             dd.push(item['guarantee']);
             dd.push(item['uid']);
             dd.push(item['uidnumber']);       
             dd.push(item['openBank']);
             dd.push(item['zhanghao']);
             dd.push(item['time']);
             
             addrow('tr',dd)
                }
            }
            
        }
    }
    var  ds = ['全选','客户名','借阅量','银行','mbp','dev','信用状况','手机号','婚姻','usex','用户类型','特殊客户','CN','担保','用户ID','身份证ID','开户行','卡号','开户时间'];
    createList('th',ds);
    
}