import http from "../httpCommon";
import axios from "axios";

class api {

    // createIssueApi(data) {
    //     console.log("----createIssueApi------")
    //     return http.post("/user/create", data);
    // }

     sendAjaxRequest(url, requestType, data) {
         console.log("====sendAjaxRequest===111===");
         const tokenId = localStorage.getItem('tokenId');
         console.log("====sendAjaxRequest===222=== ", tokenId);
        // axios.get(url , { headers: {"Authorization" : `Bearer ${tokenId}`} })
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log("====sendAjaxRequest===GET===");
        //         console.log(error);
        //     });

         if (requestType == 'GET') {
             return http.get(url,  {
                 headers: {"Authorization" : tokenId}
             });
         } else if (requestType == 'POST') {
             return http.post(url, data , {
                 // headers: {"Authorization" : `Bearer ${tokenId}`}
                 headers: {"Authorization" : tokenId}
             });
         } else if (requestType == 'PUT') {
             return http.put(url, data , {
                 // headers: {"Authorization" : `Bearer ${tokenId}`}
                 headers: {"Authorization" : tokenId}
             });
         }

         // return http.post(url, data);
        // return http.post(url, data , {
        //     // headers: {"Authorization" : `Bearer ${tokenId}`}
        //     headers: {"Authorization" : tokenId}
        // });
        //     .then((res) => {
        //     console.log("====sendAjaxRequest===3333=== ");
        //     console.log(res.data);
        // }).catch((error) => {
        //     console.log("====sendAjaxRequest===POST===");
        //     console.log(error);
        // });
    }

     createIssueApi(data) {
        console.log("----createIssueApi------")
        let url = "/issue/create";
        return this.sendAjaxRequest(url,  'POST', data).then((json) => {
            console.log("===createIssueApi=111== ");
            let userData = json.data;
            console.log("userData ");
            console.log(userData);
            // return Promise.resolve(Object.assign(userData));
            return json;
        }).catch((error) => {
            console.log("====api======");
            console.log(error);
            return Promise.reject(error);
        });
    }

    getAllIssuesApi() {
        console.log("----getAllIssuesApi------")
        let url = "/issue/getAllIssues";
        return this.sendAjaxRequest(url,  'GET').then((data) => {
            console.log("ISSUESSS ");
            console.log(data);
            // return Promise.resolve(Object.assign(userData));
            return data;
        }).catch((error) => {
            console.log("===getAllIssues=error======");
            console.log(error);
            return Promise.reject(error);
        });
    }

    editIssue(data, id) {
        console.log("----getAllIssuesApi------")
        let url = "/issue/edit/"+id;
        return this.sendAjaxRequest(url,  'PUT', data).then((res) => {
            console.log("editIssue ");
            console.log(res);
            return res;
        }).catch((error) => {
            console.log("===editIssue=error======");
            console.log(error);
            return Promise.reject(error);
        });
    }

    getIssueHistory(id) {
        console.log("----getIssueHistory------")
        let url = "/history/issue/"+id;
        return this.sendAjaxRequest(url,  'GET').then((res) => {
            console.log("getHistory ");
            console.log(res);
            return res;
        }).catch((error) => {
            console.log("===getIssueHistory=error======");
            console.log(error);
            return Promise.reject(error);
        });
    }

    getStatusPercentage() {
        console.log("----getStatusPercentage------")
        let url = "/issue/getStatusPercentage";
        return this.sendAjaxRequest(url,  'GET').then((res) => {
            console.log("getStatusPercentage ");
            console.log(res);
            return res;
        }).catch((error) => {
            console.log("===getStatusPercentage=error======");
            console.log(error);
            return Promise.reject(error);
        });
    }

    getIssuesByState(issueState) {
        console.log("----getIssuesByState------")
        let url = "issue/getIssuesOfState/"+issueState;
        return this.sendAjaxRequest(url,  'GET').then((res) => {
            console.log("getAllIssuesofState ");
            console.log(res);
            return res;
        }).catch((error) => {
            console.log("===getIssuesByState=error======");
            console.log(error);
            return Promise.reject(error);
        });
    }

}

export default new api();