describe("Object", () => {
  it("should support in typescript", () => {
    const person: { id: string; name: string } = {
      id: "1",
      name: "John Doe",
    };
    console.info(person);

    person.id = "2";
    person.name = "Jane Doe";
    console.info(person);
  });
});
