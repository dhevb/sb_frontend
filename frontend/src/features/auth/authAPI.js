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

export async function signOut(userId) {
  // You can implement sign out functionality if needed
  console.log('Sign out functionality not implemented on the client side.');
}

export function googleLogin() {
  window.location.href = 'http://localhost:8081/auth/google'; // Replace with your backend's Google OAuth login route
}
export function googleCallback() {
  window.location.href = 'http://localhost:8081/auth/google/callback'; // Replace with your backend's Google OAuth login route
}