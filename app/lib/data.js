const { User } = require('./models');
const connectDB = require('./utils');

const fetchUser = async (q, page) => {

  try {
    await connectDB(); // Ensure the DB connection is established
    const searchQuery = q ? String(q) : '';
    const itemPerPage = 2;
    const count = await User.find();
    const totalCount = count.length;
    const users = await User.find({ username: { $regex: searchQuery, $options: 'i' } }).limit(itemPerPage).skip(itemPerPage * (page-1));
    return {users, totalCount};
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw new Error('Failed to fetch user data');
  }
};

module.exports = { fetchUser};
