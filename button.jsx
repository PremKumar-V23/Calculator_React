function Buttons({ input, setInput }) {
  return (
    <div className="grid grid-cols-4 gap-1">
      <button className="button" onClick={() => setInput(input + "7")}>
        7
      </button>
      <button className="button" onClick={() => setInput(input + "8")}>
        8
      </button>
      <button className="button" onClick={() => setInput(input + "9")}>
        9
      </button>
      <button
        className="button button-operator"
        onClick={() => setInput(input + "÷")}
      >
        ÷
      </button>

      <button className="button" onClick={() => setInput(input + "4")}>
        4
      </button>
      <button className="button" onClick={() => setInput(input + "5")}>
        5
      </button>
      <button className="button" onClick={() => setInput(input + "6")}>
        6
      </button>
      <button
        className="button button-operator"
        onClick={() => setInput(input + "×")}
      >
        ×
      </button>

      <button className="button" onClick={() => setInput(input + "1")}>
        1
      </button>
      <button className="button" onClick={() => setInput(input + "2")}>
        2
      </button>
      <button className="button" onClick={() => setInput(input + "3")}>
        3
      </button>
      <button
        className="button button-operator"
        onClick={() => setInput(input + "−")}
      >
        −
      </button>

      <button className="button button-clear" onClick={() => setInput("")}>
        C
      </button>
      <button className="button" onClick={() => setInput(input + "0")}>
        0
      </button>
      <button
        className="button button-equal"
        onClick={() => {
          try {
            const expression = input
              .replace(/×/g, "*")
              .replace(/÷/g, "/")
              .replace(/−/g, "-");
            setInput(eval(expression).toString());
          } catch {
            setInput("Error");
          }
        }}
      >
        =
      </button>

      <button
        className="button button-operator"
        onClick={() => setInput(input + "+")}
      >
        +
      </button>
    </div>
  );
}

export default Buttons;
