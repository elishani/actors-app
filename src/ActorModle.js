export default class ActorObjt {

    constructor(firstNameOrObject, lastName, birthday, image, link) {
        if (arguments.length === 1) {
            this.firstName = firstNameOrObject.firstName;
            this.lastName = firstNameOrObject.lastName;
            this.birthday = firstNameOrObject.birthday;
            this.image = firstNameOrObject.image;
            this.link = firstNameOrObject.link
        } else {
            this.firstName = firstNameOrObject;
            this.lastName = lastName;
            this.birthday = birthday;
            this.image = image;
            this.link = link
        }
    }
    age() {
        return new Date().getFullYear() - new Date(this.birthday).getFullYear();
    };
}