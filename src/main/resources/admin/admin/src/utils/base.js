const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot6yjn8/",
            name: "springboot6yjn8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6yjn8/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园管理系统"
        } 
    }
}
export default base
