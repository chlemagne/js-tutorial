// JS Function Getters and Setters

const person = {
    firstName: "Charlemagne",
    lastName: "Hernani",
    get fullName() {
        return `${person.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        if (typeof name !== 'string')
            throw new Error('Value is not a string.');

        const parts = name.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name separated by whitespace.')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName;  // 'Charlemagne Hernani'
person.fullName = 'Charlie Boy';
person.fullName;  // 'Charlie Boy'

// JS try-catch
try {
    person.fullName = null;
    person.fullName = '';
} catch (e) {
    console.log(e);
}