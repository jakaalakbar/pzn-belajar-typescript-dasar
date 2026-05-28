describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["Jaka", "Al", "Akbar"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Menulis", "Coding"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[1] = 'tidur'; // error
  });

  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Jaka", "Akbar", 29];
    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = 'Joko'; // error
  });
});
