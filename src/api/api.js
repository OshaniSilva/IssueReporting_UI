import http from "../httpCommon";

// This class is used for handling all the api calls with the server
class api {

    /* This method is used to access the REST endpoints
    *  GET, POST, PUT requests are handled in this function
    *  Data is sent to the relevant endpoints with the token in the header */
    sendAjaxRequest(url, requestType, data) {

        /* The token Id is retrieved from the local storage to be sent with
        the request header for authorization */
        const tokenId = localStorage.getItem('tokenId');

        // GET, POST and PUT requests are handled below
        if (requestType == 'GET') {
            return http.get(url, {
                headers: {"Authorization": tokenId}
            });
        } else if (requestType == 'POST') {
            return http.post(url, data, {
                headers: {"Authorization": tokenId}
            });
        } else if (requestType == 'PUT') {
            return http.put(url, data, {
                headers: {"Authorization": tokenId}
            });
        }
    }

    // This function returns the response of issue creation
    createIssueApi(data) {
        let url = "/issue/create";

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
           adding token and to make the call to endpoint through axios connection */
        return this.sendAjaxRequest(url, 'POST', data).then((json) => {
            return json;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the full issue list
    getAllIssuesApi() {
        let url = "/issue/getAllIssues";

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
        adding token and to make the call to endpoint through axios connection */
        return this.sendAjaxRequest(url, 'GET').then((data) => {
            return data;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function updates the new changes in the issue
    editIssue(data, id) {
        let url = "/issue/edit/" + id;

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
        adding token and to make the call to endpoint through axios connection */
        return this.sendAjaxRequest(url, 'PUT', data).then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the history of an issue by id
    getIssueHistory(id) {
        let url = "/history/issue/" + id;

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
        adding token and to make the call to endpoint through axios connection */
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns the percentages of each issue state
    getStatusPercentage() {
        let url = "/issue/getStatusPercentage";

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
        adding token and to make the call to endpoint through axios connection */
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    // This  function  returns issue list by state
    getIssuesByState(issueState) {

        /* Server endpoint url, data and CRUD type is sent to sendAjaxRequest function for
        adding token and to make the call to endpoint through axios connection */
        let url = "issue/getIssuesOfState/" + issueState;
        return this.sendAjaxRequest(url, 'GET').then((res) => {
            return res;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }
}

export default new api();