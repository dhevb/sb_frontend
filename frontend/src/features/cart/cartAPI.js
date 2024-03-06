export function addToCart(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8081/carts', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


export function fetchItemsByUserId(user_id) {
  return new Promise(async (resolve) => {
    const response = await fetch ('http://localhost:8081/carts?user='+ user_id)
    const data = await response.json()
    resolve({data})
  })
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8081/carts/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


export function deleteItemFromCart(product_id) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8081/carts/'+product_id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data:{id:product_id} });
  });
}