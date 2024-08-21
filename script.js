const createIssue=document.getElementById("create-issue");
const issueInput=document.getElementById("issue-input");

createIssue.addEventListener("click", onCreateClick);

function toggleCreateIssueOptions(){
    createIssue.classList.toggle("hide");
    issueInput.classList.toggle("hide");

    if(!issueInput.classList.contains("hide")){
        issueInput.focus();
    }
}

function onBlurCreateIssueInput(){
    toggleCreateIssueOptions();
}

function onCreateClick(){
    toggleCreateIssueOptions();
}