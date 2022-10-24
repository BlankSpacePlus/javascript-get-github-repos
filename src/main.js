import * as fs from "fs";
import axios from "axios";

axios.get("https://api.github.com/search/repositories?q=java+language:java+in:description&sort=stars&per_page=100")
    .then(res => {
        let jsonContent = JSON.stringify(res.data.items)
        fs.writeFile("../output/output.json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("JSON文件保存失败");
                return console.log(err);
            }
            console.log("JSON文件保存成功");
        });
    })
    .catch(err => {
        console.log(err)
    });
