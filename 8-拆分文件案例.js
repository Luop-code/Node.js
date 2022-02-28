const path = require('path');
const fs = require('fs');


//定义正则表达式，分别匹配style和script标签
// \s表示空白字符，\S表示非空白字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

