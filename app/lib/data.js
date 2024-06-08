// data.js
const { User } = require('./models');
const connectDB = require('./utils');

const fetchUser = async () => {
  try {
    await connectDB(); // Ensure the DB connection is established
    const allUsers = await User.find();
    return allUsers;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw new Error('Failed to fetch user data');
  }
};

module.exports = { fetchUser };
