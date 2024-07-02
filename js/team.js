var allStudentData={
    posPhD:[
        {
            imageSrc:" ",
            imageWithHigh:[300,500],
            studentName:"",
            Supervsior:"",
            CoSupervsior:"",
            eduBj_1:"",
            eduBj_2:"",
            selfEmail:""
        },
        {
            imageSrc:" ",
            imageWithHigh:[300,500],
            studentName:"",
            Supervsior:"",
            CoSupervsior:"",
            eduBj_1:"",
            eduBj_2:"",
            selfEmail:""
        },
    ],

    PhDs:[
        {
            imageSrc:" ",
            imageWithHigh:[300,500],
            studentName:"",
            Supervsior:"",
            CoSupervsior:"",
            eduBj_1:"",
            eduBj_2:"",
            selfEmail:""
        },
        {
            imageSrc:" ",
            imageWithHigh:[300,500],
            studentName:"",
            Supervsior:"",
            CoSupervsior:"",
            eduBj_1:"",
            eduBj_2:"",
            selfEmail:""
        }
    ],

    RAs:[
        {
            imageSrc:"img/Team/hongjian.jpg",
            imageWithHigh:[190,240],
            studentName:"Jian Hong",
            Supervsior:"Supervisor：Prof. Changhong Wang",
            CoSupervsior:"Supervisor：Prof. Changhong Wang",
            eduBj_1:"M.S.: CNITECH-CAS (2020-2023)",
            eduBj_2:"B.S.: SDU (2016-2020)",
            selfEmail:"jhong@eitech.edu.cn"
        },
        {
            imageSrc:"img/Team/hongjian.jpg",
            imageWithHigh:[190,240],
            studentName:"Jian Hong",
            Supervsior:"Supervisor：Prof. Changhong Wang",
            CoSupervsior:"Supervisor：Prof. Changhong Wang",
            eduBj_1:"M.S.: CNITECH-CAS (2020-2023)",
            eduBj_2:"B.S.: SDU (2016-2020)",
            selfEmail:"jhong@eitech.edu.cn"
        }
      
    ]
}      

window.onload = function (){

    LoadData();
    

    function LoadData(){
        // 获取页面导航的元素对象
        var allDiv = document.querySelector('.phd_bj');
        var RAsStu = allStudentData.RAs;
        console.log(allDiv);
        console.log(RAsStu);

        for (let j = 0; j < RAsStu.length; j++) {

            let divNode_line = document.createElement('div');
    
            divNode_line.className = "phd_researcher";
            let imgNode = document.createElement('img');
            let aNode = document.createElement('a');
            imgNode.src=RAsStu[j].imageSrc;
            imgNode.width=RAsStu[j].imageWithHigh[0];
            imgNode.height=RAsStu[j].imageWithHigh[1];
            let pNode = document.createElement('p');
            
            pNode.append(RAsStu[j].studentName);
            let brNode = document.createElement('br');
            pNode.appendChild(brNode);
            pNode.append(RAsStu[j].Supervsior,document.createElement('br'));
            
            
            pNode.append(RAsStu[j].CoSupervsior,document.createElement('br'));
            pNode.append(RAsStu[j].eduBj_1,document.createElement('br'));
            pNode.append(RAsStu[j].eduBj_2,document.createElement('br'));
            aNode.href="mailto:"+RAsStu[j].selfEmail;
            aNode.append(RAsStu[j].selfEmail);

            pNode.append(aNode,document.createElement('br'));
            divNode_line.append(imgNode,pNode)
            console.log(pNode)
            allDiv.append(divNode_line)
        }
        

}




}