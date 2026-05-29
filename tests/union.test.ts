describe("Union Type", () => {
  it("should support in typescript", () => {
    let sample: string | number | boolean = "Hello";
    console.info(sample);

    sample = 42;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      } else {
        return !value;
      }
    }

    expect(process("hello")).toBe("HELLO");
    expect(process(20)).toBe(40);
    expect(process(true)).toBe(false);
  });
});
