// 处理父级标签点击事件，用于展开/收起子标签
document.querySelectorAll('.parent-tag-header').forEach(parentTag => {
    parentTag.addEventListener('click', function() {
        const childTagsContainer = this.nextElementSibling;  // 获取当前父级标签下的子标签容器
        if (childTagsContainer) {
            childTagsContainer.classList.toggle('active'); // 切换子标签容器的显示/隐藏
        }
    });
});

// 处理标签点击事件
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.id + '-content'; // 获取标签对应的内容 ID
        setActiveTab(tabId); // 设置选中的标签内容
    });
});

// 设置选中的标签
function setActiveTab(tabId) {
    const selectedTab = document.getElementById(tabId.replace('-content', ''));
    const selectedContent = document.getElementById(tabId);

    // 如果选中的标签存在
    if (selectedTab && selectedContent) {
        // 移除所有标签的选中状态
        document.querySelectorAll('.tab.selected').forEach(tab => tab.classList.remove('selected'));
        document.querySelectorAll('.tab-content.active').forEach(content => content.classList.remove('active'));

        // 添加选中状态
        selectedTab.classList.add('selected');
        selectedContent.classList.add('active');
    }
}


// 搜索框功能
document.getElementById("search").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();
    const resultContainer = document.getElementById("search-results");

    resultContainer.innerHTML = '';
    const results = ["可可酱", "标签1", "标签2", "诺梓ovo", "白梓TeAm"];
    results.forEach(result => {
        if (result.toLowerCase().includes(searchQuery)) {
            const resultItem = document.createElement("div");
            resultItem.textContent = result;
            resultItem.classList.add("search-result");
            resultItem.addEventListener("click", function() {
                setActiveTab(result.toLowerCase() + "-content");
            });
            resultContainer.appendChild(resultItem);
        }
    });

    resultContainer.style.display = searchQuery ? 'block' : 'none';
});

// 点击Logo打开新页面并展示有趣的emoji和提醒
document.getElementById("logo").addEventListener("click", function() {
    const newWindow = window.open("about:blank", "_blank");
    
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    background-color: #fff;
                }

                .new-window {
                    font-family: "Arial", sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); /* 绝对居中 */
                }

                .new-window h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }

                .new-window .emoji {
                    font-size: 80px;
                }

                .new-window p {
                    font-size: 24px;
                    margin-top: 10px;
                    font-weight: bold;
                }

                .new-window p.small {
                    font-size: 16px;
                    margin-top: 5px;
                }
            </style>
        </head>
        <body>
            <div class="new-window">
                <h1>你为什么又要点一遍？</h1>
                <div class="emoji">🎉😂🎊</div>
                <p>你就在这个网站！就不用再点击了啦！</p>
                <p>このサイトにいます！もうクリックする必要はありませんよ！</p>
                <p>You're already on this website! No need to click anymore!</p>
                <p class="small">祝你天天开心！（日本語：毎日が幸せです！ / English: Wishing you happiness every day!）</p>
            </div>
        </body>
        </html>
    `);
});

// 关注我们链接
document.getElementById("follow-us").addEventListener("click", function() {
    const platform = prompt("非常感谢您的支持: 输入B跳转到Bilibili, 输入Y跳转到YouTube！");
    if (platform == "B") {
        window.open("https://space.bilibili.com/531231667", "_blank");
    } else if (platform == "Y") {
        window.open("https://www.youtube.com/@Fish_Lucky", "_blank");
    } else {
        alert("无效的选择！");
    }
});

document.getElementById("directory-button").onclick = function() {
    var directory = document.getElementById("directory");
    directory.style.display = directory.style.display === "block" ? "none" : "block";
};

document.querySelector('.quote-author').classList.add('right-align');

document.addEventListener("DOMContentLoaded", function() {
    var luckyMagic = document.getElementById('lucky-magic');  // 获取“运气魔法使”文本
    var popup = document.getElementById('popup');            // 获取弹出框
    var closeBtn = document.getElementById('close-btn');     // 获取关闭按钮

    // 确认 JavaScript 是否能执行
    console.log(luckyMagic, popup, closeBtn);

    // 当点击"运气魔法使"时，显示弹出框
    luckyMagic.onclick = function() {
      popup.style.display = 'flex'; /* 显示弹出框 */
      console.log("弹出框已显示");
    }

    // 当点击关闭按钮时，隐藏弹出框
    closeBtn.onclick = function() {
      popup.style.display = 'none'; /* 隐藏弹出框 */
      console.log("弹出框已关闭");
    }

    // 当点击弹出框外部时，隐藏弹出框
    popup.onclick = function(event) {
      if (event.target === popup) {
        popup.style.display = 'none'; /* 隐藏弹出框 */
        console.log("点击外部关闭弹出框");
      }
    }
});



