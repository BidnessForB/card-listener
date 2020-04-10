const core = require('@actions/core');
const github = require('@actions/github');

try {
    let newColumnID = github.context.payload.project_card.column_id;
    let oldColumnID = github.context.payload.changes.column_id.from;

    if(newColumnID == "8585300" && oldColumnID == "8585301")
    {



    }
}
catch(e)
{
    core.setFailed(e.message);
}