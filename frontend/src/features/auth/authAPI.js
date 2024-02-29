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

export async function forgotPassword(email) {
  return new Promise(async(resolve,reject)=>{
  try {
    const response = await fetch('http://localhost:8081/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({email}),
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

export async function signOut(userId) {
  // You can implement sign out functionality if needed
  console.log('Sign out functionality not implemented on the client side.');
}
