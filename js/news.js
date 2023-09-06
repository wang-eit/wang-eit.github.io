var recentNews={
    allnews: [



        { 
            title:"⇰Seminar: Key Cathode Materials for Sodium-ion Batteries.",
            time:"Posted on July. 26, 2023.",
            desc:"In this talk, Dr.jian Peng will present a rational design of low-cost Prussian blue analogs as \
            cathode materials for sodi-um-ion batteries with low cost, high voltage aswell as enhanced energy density \
            and extendedcycle lifespan. Synthesis chemistry，structuralengineering and electrochemical characterizati-on \
            techniques will be discussed towards theirpractical applications.",
            imagesrc:"news_img/pengjian_seminar.png",
            imag_height:"340px",
            imag_width:"400px",
        },

        { 
            title:"⇰ Posdoc. : Guantai Hu join Wang research group.",
            time:"Posted on Aug. 1, 2023.",
            desc:"Welcome Guantai Hu.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ Ph.D. : Zhimin Zhou join Wang research group.",
            time:"Posted on July 24, 2023.",
            desc:"Welcome Zhimin Zhou.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ R.A. : Ziqing Wang join Wang research group.",
            time:"Posted on July 17, 2023.",
            desc:"Welcome Ziqing Wang.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ Posdoc. : Pushun Lu join Wang research group.",
            time:"Posted on July 10, 2023.",
            desc:"Welcome Pushun Lu.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ Posdoc. : Jiaxu Zhang join Wang research group.",
            time:"Posted on July 7, 2023.",
            desc:"Welcome Jiaxu Zhang.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ Ph.D. : Shutao Zhang join Wang research group.",
            time:"Posted on June 25, 2023.",
            desc:"Welcome Shutao Zhang.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },

        { 
            title:"⇰ Ph.D. : Shengjie Xia join Wang research group.",
            time:"Posted on May 29, 2023.",
            desc:"Welcome Shengjie Xia.",
            imagesrc:"",
            imag_height:"",
            imag_width:"",
        },
    
    ]
    
    }


    window.onload = function (){


        LoadData();
    
        function LoadData(){
            // 获取页面导航的元素对象
            var allDiv = document.querySelector('.new_item');
            var allol = allDiv.getElementsByTagName("ol");
            // 获取数据
            var all_news = recentNews.allnews;
    
            for (let j = 0; j < all_news.length; j++) {
                // 创建节点
                let liNode = document.createElement('li');
                
                // let aNode = document.createElement('a');
                let spanNode = document.createElement('span');
                let brNode = document.createElement('br');
                let brNode2 = document.createElement('br');
                let h4Node = document.createElement('h4');
                // let h2Node = document.createElement('h2');
                // let h5Node = document.createElement('h5');
                let pNode = document.createElement('p');
                let imgNode = document.createElement('img');
                
                allDiv.className="new_item",
                // liNode.id="RecLi";
                // divNode.className="Recdiv";
                h4Node.append(all_news[j].time)
                spanNode.append(all_news[j].title,brNode2);
                pNode.append(all_news[j].desc);
                if(all_news[j].imagesrc.length>2){
                    imgNode.src=all_news[j].imagesrc;
                    // imgNode.style.width
                    imgNode.style.width = all_news[j].imag_width;
                    imgNode.style.height = all_news[j].imag_width;
                    liNode.append(spanNode,h4Node,pNode,imgNode)
                }else{
                    liNode.append(spanNode,h4Node,pNode)
                }
                
                allol[0].append(liNode)
            }
        }
    
    }