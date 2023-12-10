const getMovieTicket = async (customerName, movieName, showTiming) => {
    console.log(`${customerName} is in the movie ticket queue for "${movieName}" at ${showTiming}`);
    console.log('Waiting for my wife to bring the ticket...');
    
    // Simulate waiting for the wife to bring the ticket
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Got the movie ticket for "${movieName}" at ${showTiming}!`);
  };
  
  const getPopcorn = async () => {
    console.log('Buying popcorn after getting the entry in the movie theater');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Got popcorn!');
  };
  
  const getButter = async () => {
    console.log('Got butter for popcorn!');
    await new Promise(resolve => setTimeout(resolve, 1500));
  };
  
  const getColdDrinks = async () => {
    console.log('Getting cold drinks after getting butter');
    await getButter();
    await new Promise(resolve => setTimeout(resolve, 1200));
    console.log('Got cold drinks!');
  };
  
  const watchMovieAsync = async () => {
    // Retrieve user details from localStorage
    const storedCustomerName = localStorage.getItem('customerName') || 'John Doe';
    const storedMovieName = localStorage.getItem('movieName') || 'Inception';
    const storedShowTiming = localStorage.getItem('showTiming') || '8:00 PM';
  
    // Display the stored user details in the HTML
    document.getElementById('customerName').innerText = storedCustomerName;
    document.getElementById('movieName').innerText = storedMovieName;
    document.getElementById('showTiming').innerText = storedShowTiming;
  
    try {
      await getMovieTicket(storedCustomerName, storedMovieName, storedShowTiming);
      await getPopcorn();
      await getColdDrinks();
      console.log(`Ready to enjoy "${storedMovieName}" at ${storedShowTiming}!`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  console.log('Watching Movie using async/await:');
  
  // Call watchMovieAsync after the DOM has loaded
  document.addEventListener('DOMContentLoaded', watchMovieAsync);
  