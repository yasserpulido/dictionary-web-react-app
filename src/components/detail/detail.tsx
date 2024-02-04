import { Definition } from "../../types";
import { useFont } from "../../hooks";
import IconPlay from "../../assets/icon-play.svg";
import IconNewWindow from "../../assets/icon-new-window.svg";
import { useEffect, useState } from "react";

type DetailProps = {
  wordDefinition: Array<Definition>;
};

const Detail = ({ wordDefinition }: DetailProps) => {
  const { selectedFont } = useFont();
  const [nouns, setNouns] = useState<{
    definitions: Array<string>;
    synonyms: Array<string>;
  } | null>(null);
  const [verbs, setVerbs] = useState<Array<{
    definition: string;
    example: string;
  }> | null>(null);

  const playAudio = () => {
    const audio = new Audio(wordDefinition[0].phonetics[0].audio);
    audio.play();
  };

  useEffect(() => {
    console.log("wordDefinition: ", wordDefinition);
    wordDefinition[0].meanings.forEach((meaning) => {
      if (meaning.partOfSpeech === "noun") {
        setNouns({
          definitions: meaning.definitions.map(
            (definition) => definition.definition
          ),
          synonyms: meaning.synonyms,
        });
      }

      if (meaning.partOfSpeech === "verb") {
        setVerbs(
          meaning.definitions.map((definition) => ({
            definition: definition.definition,
            example: definition.example,
          }))
        );
      }
    });
  }, [wordDefinition]);

  return (
    <main
      className="pt-2"
      style={{
        color: "#2d2d2d",
      }}
    >
      <section className="flex items-center justify-between">
        <header>
          {wordDefinition[0].word && (
            <h1 className={`text-6xl font-bold ${selectedFont}`}>
              {wordDefinition[0].word}
            </h1>
          )}
          {wordDefinition[0].phonetics[0].text && (
            <p className={`text-2xl ${selectedFont}`}>
              {wordDefinition[0].phonetics[0].text}
            </p>
          )}
        </header>
        {wordDefinition[0].phonetics[0].audio && (
          <figure>
            <img
              src={IconPlay}
              alt="audio"
              onClick={playAudio}
              className="cursor-pointer"
            />
          </figure>
        )}
      </section>
      {nouns && (
        <section className="pt-10">
          <article>
            <header className="flex items-center justify-between gap-8">
              <p className={`font-bold italic text-2xl ${selectedFont}`}>
                nouns
              </p>
              <hr className="grow" />
            </header>
            {nouns.definitions.length > 0 && (
              <div className="pt-10">
                <p
                  className={`text-xl ${selectedFont}`}
                  style={{
                    color: "#757575",
                  }}
                >
                  Meaning
                </p>
                <ul className="list-disc list-outside mt-6">
                  {nouns.definitions.map((definition) => (
                    <li
                      key={definition}
                      className={`text-lg ml-10 pl-5 ${selectedFont}`}
                    >
                      {definition}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {nouns.synonyms.length > 0 && (
              <div className="pt-10 flex">
                <p
                  className={`text-xl ${selectedFont}`}
                  style={{
                    color: "#757575",
                  }}
                >
                  Synonyms
                </p>
                <ul className="flex ml-5 flex-wrap">
                  {nouns.synonyms.map((synonym, index) => (
                    <li
                      key={`${index}-${synonym}`}
                      className={`text-xl ml-5 mb-0 font-bold ${selectedFont} hover:underline cursor-pointer`}
                      style={{
                        color: "#8f19e8",
                      }}
                    >
                      {synonym}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </section>
      )}
      {verbs && (
        <section className="pt-10">
          <article>
            <header className="flex items-center justify-between gap-8">
              <p className={`font-bold italic text-2xl ${selectedFont}`}>
                verbs
              </p>
              <hr className="grow" />
            </header>
            <div className="pt-10">
              <p
                className={`text-xl ${selectedFont}`}
                style={{
                  color: "#757575",
                }}
              >
                Meaning
              </p>
              <ul className="list-disc list-outside mt-6">
                {verbs.map((verb) => (
                  <li
                    key={verb.definition}
                    className={`text-lg ml-10 pl-5 ${selectedFont}`}
                  >
                    <p>{verb.definition}</p>
                    {verb.example && (
                      <p
                        className={`text-lg mt-3 ${selectedFont}`}
                        style={{
                          color: "#757575",
                        }}
                      >
                        "{verb.example}"
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      )}
      <section className="pt-10">
        <hr />
        <footer className="flex mt-3">
          <p
            className={`text-sm ${selectedFont}`}
            style={{
              color: "#757575",
            }}
          >
            Source
          </p>
          <a
            href={wordDefinition[0].sourceUrls}
            className={`text-sm ml-5 ${selectedFont}`}
            target="_blank"
          >
            {wordDefinition[0].sourceUrls}
          </a>
          <img src={IconNewWindow} alt="source" className="ml-2" />
        </footer>
      </section>
    </main>
  );
};

export default Detail;
