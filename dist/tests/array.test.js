describe("Array", () => {
    it("should same with javascript", () => {
        const names = ["Jaka", "Al", "Akbar"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", () => {
        const hobbies = ["Menulis", "Coding"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[1] = 'tidur'; // error
    });
    it("should support tuple", () => {
        const person = ["Jaka", "Akbar", 29];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        person[0] = 'Joko';
    });
});
export {};
//# sourceMappingURL=array.test.js.map