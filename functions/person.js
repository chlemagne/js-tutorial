// JS Function Getters and Setters

const person = {
    firstName: "Charlemagne",
    lastName: "Hernani",
    get fullName() {
        return `${person.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName;  // 'Charlemagne Hernani'
person.fullName = 'Charlie Boy';
person.fullName;  // 'Charlie Boy'
