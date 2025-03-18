const mongoose = require('mongoose');

// Result Schema
const ResultSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    participantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant' },
    score: { type: Number },
    answers: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        correctAnswer: { type: String },
        selectedAnswer: { type: String },
        isCorrect: { type: Boolean }
    }],
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Result', ResultSchema);