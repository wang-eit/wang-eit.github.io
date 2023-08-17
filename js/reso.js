function funName(ths) {
    console.log("已被点击");//这个this是window的对象
    console.log(this);
    console.log(this.value);
    ths.value="已点击"
}
function foo(){
  var input1=document.getElementById("uname");
console.log(input1.value);
  alert(input1.value);
  confirm("输入的内容："+input1.value)
}
function clean() {
  var clenalert=document.getElementById("alert");
  if (clenalert){
       clenalert.remove()
  }
}
function login() {
  var input1=document.getElementById("uname");
  var input2=document.getElementById("pword");
//   console.log("输入的用户名是：",  (input1.value=="wang"),"输入的密码是：",input2.value);
  if(input1.value && input1.value=="wang" && input2.value=="wang"){
    console.log("success");
      
  }else {
    //   var add = document.createElement("p");
    //   add.innerHTML = "<span id='alert'>Error: Please contact Professor Wang for a valid username and password</span>";
    //   var div1 = document.getElementById("internal");
    //   div1.appendChild(add);
    //   div1.removeChild(add);
    alert("Error: Please contact Professor Wang for a valid username and password")
  }
//   console.log("输入的用户名是：",input1.value,"输入的密码是：",input2.value);
//   alert("输入的用户名是：" + input1.value + "密码:" + input2.value)

}


