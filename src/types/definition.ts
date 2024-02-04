export type Definition = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  sourceUrls: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: DefinitionElement[];
  synonyms: string[];
};

export type DefinitionElement = {
  definition: string;
  example: string;
};

export type Phonetic = {
  text: string;
  audio?: string;
};
