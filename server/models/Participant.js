const mongoose = require('mongoose');

// Participant Schema
const ParticipantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }, // Reference to the quiz taken
    answers: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedAnswer: { type: String }
    }],
    score: { type: Number, default: 0 },
    joinedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Participant", ParticipantSchema);