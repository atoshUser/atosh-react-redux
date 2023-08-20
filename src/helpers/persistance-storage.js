export const  setItem = (key,val) => {
    localStorage.setItem(key,val)
}

export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log(`Error get user token `);
    }
}

export const removeItem = (key) => {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        console.log(`Could not remove item from local-storage`);
      }
}