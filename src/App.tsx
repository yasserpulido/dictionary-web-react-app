import { useState } from "react";
import { Detail, Navigation, TextField } from "./components";
import { getWordDefinition } from "./apis";
import { Definition } from "./types";
import { useFont } from "./hooks";

function App() {
  const { selectedFont } = useFont();
  const [textFieldError, setTextFieldError] = useState(false);
  const [wordDefinition, setWordDefinition] = useState<Array<Definition>>([]);
  const [wordNotFound, setWordNotFound] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const textFieldValue = formData.get("search");

    if (!textFieldValue) {
      setTextFieldError(true);
      return;
    } else {
      setTextFieldError(false);
    }

    getWordDefinition(textFieldValue as string).then((response: Response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          setWordDefinition(data);
          setWordNotFound(false);
        });
      } else {
        setWordDefinition([]);
        setWordNotFound(true);
      }
    });
  };

  return (
    <div className="container mx-auto py-16 px-10 md:px-20 lg:px-40 xl:px-60">
      <Navigation />
      <form onSubmit={handleSubmit} className="pt-10">
        <TextField warning={textFieldError} />
      </form>
      {wordNotFound && (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-6xl">😕</p>
          <p
            className={`mt-10 font-bold text-xl ${selectedFont}`}
            style={{
              color: "#2d2d2d",
            }}
          >
            No Definitions Found
          </p>
          <p
            className={`mt-10 text-lg ${selectedFont}`}
            style={{
              color: "#757575",
            }}
          >
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      )}
      {wordDefinition.length > 0 && <Detail wordDefinition={wordDefinition} />}
    </div>
  );
}

export default App;
