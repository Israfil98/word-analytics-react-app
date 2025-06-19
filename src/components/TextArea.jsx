import toast, { Toaster } from "react-hot-toast";

function TextArea({ text, setText }) {
  const changeHandler = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      toast("No script tag allowed!", {
        type: "error",
        position: "top-right",
        className: "warning",
        duration: 1500,
      });

      newText = newText.replace("<script>", "");
    }

    setText(newText);
  };

  return (
    <section className="textarea">
      <textarea
        value={text}
        onChange={changeHandler}
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      <Toaster />
    </section>
  );
}

export default TextArea;
