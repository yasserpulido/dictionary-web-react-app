import { useState } from "react";
import { Detail, Navigation, NotFound, TextField } from "./components";
import { getWordDefinition } from "./apis";
import { Definition } from "./types";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();
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

    e.currentTarget.reset();
  };

  return (
    <div className={`theme-background ${theme}`}>
      <div className="container mx-auto py-16 px-10 md:px-20 lg:px-40 xl:px-60">
        <Navigation />
        <form onSubmit={handleSubmit} className="pt-10">
          <TextField warning={textFieldError} />
        </form>
        {wordNotFound && <NotFound />}
        {wordDefinition.length > 0 && (
          <Detail wordDefinition={wordDefinition} />
        )}
      </div>
    </div>
  );
}

export default App;
