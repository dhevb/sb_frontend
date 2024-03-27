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
      localStorage.setItem("role", data.role)
      localStorage.setItem("token", data.token)
      
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

export async function logout() {
  try {
    const response = await fetch('http://localhost:8081/auth/logout', {
      method: 'POST',
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
    console.error('Error logging out:', error);
    throw error;
  }
}

