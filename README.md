# 获取GitHub的Java项目TOP100

- [GitHub API](https://docs.github.com/cn/rest)
- [GitHub Search](https://docs.github.com/cn/rest/search)
- [GitHub Searching For Repositories](https://docs.github.com/cn/search-github/searching-on-github/searching-for-repositories)
- [GitHub Searching For Repositories 中文版](https://docs.github.com/cn/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)

## 无效代码

基于[core.js](https://github.com/octokit/core.js)和[auth-token.js](https://github.com/octokit/auth-token.js)实现了一版代码，达不到目标：
```javascript
const getFromGitHub = async function() {
    const octokit = new Octokit({
        auth: 'your_auth_key'  // your auth key
    })
    const response = await octokit.request('GET /search/repositories?q=java+language:java+in:description&sort=stars&per_page=10', {})
    let jsonContent = JSON.stringify(response.data.items)
    fs.writeFile("../output/output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("JSON文件保存失败");
            return console.log(err);
        }
        console.log("JSON文件保存成功");
    });
}
```
