const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    postId: { type: String, required: true },
    reporterUsername: { type: String, required: true },
    dateReported: { type: Date, required: true, default: Date.now },
    isResolved: { type: Boolean, required: true, default: false }
});

module.exports = {
    reports:  mongoose.model('reports', reportSchema)
};
