
// background.js文件负责监听用户的操作并响应插件的状态变化。比如监听浏览器事件、管理插件状态等。
// chrome.action.onClicked.addListener：用于监听工具栏图标的点击事件。当用户点击扩展程序的图标时，会触发提供的回调函数。参考文档：chrome.action.onClicked
// chrome.action.setBadgeText：用于设置工具栏图标上的徽章文本。徽章通常用于显示状态或通知。参考文档：chrome.action.setBadgeText
// chrome.action.setBadgeBackgroundColor：用于设置工具栏图标徽章的背景颜色。参考文档：chrome.action.setBadgeBackgroundColor
// chrome.scripting.executeScript：用于向指定的标签页注入 JavaScript 脚本。可以注入单个函数或文件中的脚本。



// 定义一个变量来跟踪 "ON" 状态
let isOn = false

// 监听工具栏图标点击事件
chrome.action.onClicked.addListener(async (tab) => {
    // 切换 isOn 状态
    isOn = !isOn

    if (isOn) {
        // 设置徽章文本为 "ON"
        chrome.action.setBadgeText({ text: 'ON' })
        // 设置徽章背景颜色为蓝色
        chrome.action.setBadgeBackgroundColor({ color: 'blue' })

        // 调用 addExportButton 函数在页面上添加导出按钮
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: addExportButton
        })
    }else {
        // 清除徽章文本
        chrome.action.setBadgeText({ text: '' })
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: removeExportButton
        })
        // 检查当前标签页的 URL 是否包含 'https://juejin.cn/'
        // if (tab.url.includes('https://juejin.cn/')) {
        //     // 调用 removeExportButton 函数从页面上移除导出按钮
        //
        // }
    }
})

// 定义一个函数在页面右下角添加导出按钮
function addExportButton() {
    const button = document.createElement('button')
    button.textContent = '导出啊哈哈哈哈哈'
    button.id = 'exportButton'
    button.style.position = 'fixed'
    button.style.bottom = '20vh'
    button.style.right = '0'
    button.style.zIndex = 100000000
    button.style.width = '100px'
    button.style.height = '100px'
    button.style.background = 'red'
    document.body.appendChild(button)
}

// 定义一个函数从页面移除导出按钮
function removeExportButton() {
    const button = document.getElementById('exportButton')
    if (button) {
        button.remove()
    }
}
