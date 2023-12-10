// Function to delete a user detail by _id
const deleteUserDetail = async (userId) => {
  try {
    // Perform DELETE operation using fetch or any other preferred method
    // Replace the URL with your CRUD CRUD endpoint
    const response = await fetch(`https://your-crud-crud-endpoint/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete user detail');
    }

    // Remove the user detail from the HTML
    const userDetailElement = document.querySelector(`.user-detail[data-user-id="${userId}"]`);
    if (userDetailElement) {
      userDetailElement.remove();
    } else {
      console.warn('User detail element not found in HTML');
    }

    console.log('User detail deleted successfully');
  } catch (error) {
    console.error('Error deleting user detail:', error);
  }
};

// Function to set up event listeners
const setupEventListeners = () => {
  // Get all delete buttons and attach click event listener
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the user ID from the parent user detail element
      const userId = button.parentElement.getAttribute('data-user-id');
      
      // Call the delete function with the user ID
      deleteUserDetail(userId);
    });
  });
};

const watchMovieAsync = async () => {
  // Display user details and set up event listeners
  // ... (existing code)

  // Call setupEventListeners after displaying user details
  setupEventListeners();

  console.log('Watching Movie using async/await:');
};

// Call watchMovieAsync after the DOM has loaded
document.addEventListener('DOMContentLoaded', watchMovieAsync);
