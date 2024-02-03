export type Definition = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string;
};

export type License = {
  name: string;
  url: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: DefinitionElement[];
  synonyms: string[];
  antonyms: string[];
};

export type DefinitionElement = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};
