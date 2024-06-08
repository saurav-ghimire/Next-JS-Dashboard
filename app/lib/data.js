const { User, Product } = require('./models');

const connectDB = require('./utils');

const fetchUser = async (q, page) => {

  try {
    await connectDB(); // Ensure the DB connection is established
    const searchQuery = q ? String(q) : '';
    const itemPerPage = 3;
    const count = await User.find();
    const totalCount = count.length;
    const users = await User.find({ username: { $regex: searchQuery, $options: 'i' } }).limit(itemPerPage).skip(itemPerPage * (page-1));
    return {users, totalCount};
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw new Error('Failed to fetch user data');
  }
};

const fetchProduct = async (q, page) => {

  try {
    await connectDB(); // Ensure the DB connection is established
    const searchQuery = q ? String(q) : '';
    const itemPerPage = 4;
    const count = await Product.find();
    const totalCount = count.length;
    const product = await Product.find({ title: { $regex: searchQuery, $options: 'i' } })
                             .sort({ createdAt: -1 })  // Sort by creation date in descending order
                             .limit(itemPerPage)
                             .skip(itemPerPage * (page - 1));
    return {product, totalCount};
  } catch (error) {
    console.error('Error fetching Product data:', error.message);
    throw new Error('Failed to fetch Product data');
  }
};


module.exports = { fetchUser, fetchProduct};
