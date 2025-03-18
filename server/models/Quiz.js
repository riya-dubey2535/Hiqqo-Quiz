const mongoose = require('mongoose');


// Quiz Schema
const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    quizType: { 
        type: String, 
        enum: ['MCQ', 'Boolean', 'Fill in the Blank', 'Image-based'], 
        required: true 
    },
    questions: [{
        questionText: { type: String, required: true },
        options: [{ type: String }], // Applicable for MCQ and Boolean
        correctAnswer: { type: String, required: true }, // For Fill in the Blank and Image-based, this can be the expected answer
        timeLimit: { type: Number, required: true } // Time in seconds
    }],
    quizCode: { type: String, unique: true },
    isPublished: { type: Boolean, default: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Quiz", QuizSchema);