// globals.js
let globalAssignmentDetailId = null;

function setGlobalAssignmentDetailId(id) {
    globalAssignmentDetailId = id;
}

function getGlobalAssignmentDetailId() {
    return globalAssignmentDetailId;
}

module.exports = { setGlobalAssignmentDetailId, getGlobalAssignmentDetailId };