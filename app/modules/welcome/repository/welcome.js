

exports.welcome = async () => {
    return await new Promise((resolve, reject) => {
      try {
        resolve("Welcome to Pearson API.");          
      } catch (error) {
        reject(error)
      }
    });
  }