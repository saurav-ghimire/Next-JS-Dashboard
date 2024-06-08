const { User } = require('./models');
const connectDB = require('./utils');

const fetchUser = async (q) => {
  try {
    await connectDB(); // Ensure the DB connection is established

    // Ensure q is a string and handle undefined or null
    const searchQuery = q ? String(q) : '';

    // Use a regular expression for partial matching
    const allUsers = await User.find({ username: { $regex: searchQuery, $options: 'i' } });

    return allUsers;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw new Error('Failed to fetch user data');
  }
};

module.exports = { fetchUser };
