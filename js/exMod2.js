//exMod2.js


function User(name, gender) {
  this.name = name;
  this.gender = gender;
  this.info = function() {
    return `name: ${this.name}, gender: ${this.gender}`
  }
}
export default User;