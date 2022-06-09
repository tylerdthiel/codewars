function sayHello( name, city, state ) {
    let theirName = name.join(' ')
    this.city = city
    this.state = state
    return `Hello, ${theirName}! Welcome to ${city}, ${state}!`
  }