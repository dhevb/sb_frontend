export  function createUser(userData) {
  return new Promise(async(resolve)=>{
    const response = await fetch('http://localhost:8081/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve( { data });
  } );
}

export async function checkUser(loginInfo) {
  return new Promise(async(resolve,reject)=>{
  try {
    const response = await fetch('http://localhost:8081/auth/login', {
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("id", data.id)

      resolve ({ data });
    } else {
      const error = await response.json();
      reject( error);
    }
  } catch (error) {
   reject(error);
  }
  });
}



export async function forgotPassword(loginInfo) {
  try {
    const response = await fetch('http://localhost:8081/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.json();
      throw error;
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
}
export async function logoutUser() {
  try {
    // Clear session data from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    
    // Redirect to login page
    window.location.href = '/login';
  } catch (error) {
    // Handle errors
    console.error('Error logging out:', error);
  }
}

