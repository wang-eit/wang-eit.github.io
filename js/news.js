var recentNews={
    allnews: [


        { 
            title:"⇰ Posdoc. : Guantai Hu join Wang research group.",
            time:"Posted on Aug. 1, 2023.",
            desc:"Welcome Guantai Hu.",
        },

        { 
            title:"⇰ Ph.D. : Zhimin Zhou join Wang research group.",
            time:"Posted on July 24, 2023.",
            desc:"Welcome Zhimin Zhou.",
        },

        { 
            title:"⇰ R.A. : Ziqing Wang join Wang research group.",
            time:"Posted on July 17, 2023.",
            desc:"Welcome Ziqing Wang.",
        },

        { 
            title:"⇰ Posdoc. : Pushun Lu join Wang research group.",
            time:"Posted on July 10, 2023.",
            desc:"Welcome Pushun Lu.",
        },

        { 
            title:"⇰ Posdoc. : Jiaxu Zhang join Wang research group.",
            time:"Posted on July 7, 2023.",
            desc:"Welcome Jiaxu Zhang.",
        },

        { 
            title:"⇰ Ph.D. : Shutao Zhang join Wang research group.",
            time:"Posted on June 25, 2023.",
            desc:"Welcome Shutao Zhang.",
        },

        { 
            title:"⇰ Ph.D. : Shengjie Xia join Wang research group.",
            time:"Posted on May 29, 2023.",
            desc:"Welcome Shengjie Xia.",
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
                // let h2Node = document.createElement('h2');
                // let h5Node = document.createElement('h5');
                let pNode = document.createElement('p');
                allDiv.className="new_item",
                // liNode.id="RecLi";
                // divNode.className="Recdiv";
                spanNode.append(all_news[j].title,brNode2);
                pNode.append(spanNode,all_news[j].time,brNode,all_news[j].desc);
                liNode.append(pNode)
                allol[0].append(liNode)
            }
        }
    
    }