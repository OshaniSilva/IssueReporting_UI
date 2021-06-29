import http from "../httpCommon";

class api {

    // This method is used to access the REST endpoints
    sendAjaxRequest(url, requestType, data) {

        // The token Id is sent to the server for authorization
        const tokenId = localStorage.getItem('tokenId');

        // GET, POST and PUT requests are handled below
        if (requestType == 'GET') {
            return http.get(url, {
                headers: {"Authorization": tokenId}
            });
        } else if (requestType == 'POST') {
            return http.post(url, data, {
                // headers: {"Authorization" : `Bearer ${tokenId}`}
                headers: {"Authorization": tokenId}
            });
        } else if (requestType == 'PUT') {
            return http.put(url, data, {
                // headers: {"Authorization" : `Bearer ${tokenId}`}
                headers: {"Authorization": tokenId}
            });
        }
    }

    // This  function  returns the issue creation data
    createIssueApi(data) {
        let url = "/issue/create";
        return this.sendAjaxRequest(url, 'POST', data).then((json) => {
            let userData = json.data;
            return json;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the full issue list
    getAllIssuesApi() {
        let url = "/issue/getAllIssues";
        return this.sendAjaxRequest(url, 'GET').then((data) => {
            return data;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function updates the new changes in the issue
    editIssue(data, id) {
        let url = "/issue/edit/" + id;
        return this.sendAjaxRequest(url, 'PUT', data).then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the history of an issue by id
    getIssueHistory(id) {
        let url = "/history/issue/" + id;
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the percentages of each issue state
    getStatusPercentage() {
        let url = "/issue/getStatusPercentage";
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // // This  function  returns issue list by state
    getIssuesByState(issueState) {
        let url = "issue/getIssuesOfState/" + issueState;
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

}

export default new api();