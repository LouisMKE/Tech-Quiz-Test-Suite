import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
import questionData from './pythonQuestions.json' assert { type: 'json' };

(async () => {
  try {
    // Connect to the database
    await db();

    // Clean the database
    await cleanDB();

    // Seed questions into the database
    await Question.insertMany(questionData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
})();
