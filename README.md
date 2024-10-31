### 必要文件
```text
    1. manifest.json：这是Chrome插件的配置文件。
    
    2. background.js：这是插件的后台脚本，用于处理插件的后台逻辑。
    
    3. popup.html：这是插件点击图标时弹出的页面。
    
    4. popup.js：这是popup.html页面的脚本。
    
    5. content.js：这是插件注入到网页中的内容脚本。
```

使用Vue.js开发Chrome插件

创建Vue项目：

vue create my-chrome-extension
cd my-chrome-extension
构建项目：

npm run build
创建必要的文件：

manifest.json：同上。
background.js：同上。
将Vue构建的文件放入插件文件夹：
将dist文件夹中的内容复制到你的插件文件夹中，并修改manifest.json中的路径以匹配这些文件。

加载插件：
同上，在chrome://extensions/中加载你的插件文件夹。