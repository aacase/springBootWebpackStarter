var greeter = require('../../app/greeter');
describe('Greeting', () => {
    it('should greet you by name', () => {
        let greeting = greeter.greet("Emma");
        expect(greeting).toBe("Hello Emma!");
    });
    it('should generically greet you if you do not provide a name', () => {
        let greeting = greeter.greet();
        expect(greeting).toBe("Hello World!");
    });
});