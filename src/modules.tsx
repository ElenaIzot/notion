export interface Title {
  type: string,
  text: string,
}

export interface Paragraph {
  type: string,
  text: string,
}

export interface List {
  type: string,
  elements: string[];
}

export interface DocumentState {
  title: Title,
  list: List,
  paragraph: Paragraph
}
