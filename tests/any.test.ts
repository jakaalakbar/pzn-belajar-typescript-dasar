describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "John Doe",
      age: 30,
    };

    person.name = "Jack Doe";
    person.age = 31;

    console.info(person);
  });
});
