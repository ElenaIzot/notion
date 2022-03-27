export interface AppNode {
  type: 'title' | 'paragraph' | 'list';
}

export interface Title extends AppNode {
  type: 'title';
  text: string;

}

export interface Paragraph extends AppNode {
  type: 'paragraph';
  text: string;
}

export interface List extends AppNode {
  type: 'list';
  elements: string[];
}

export interface DocumentState {
  elements: Array<Title | List | Paragraph>;
}

export function isParagraph(element: AppNode): element is Paragraph {
  return element.type == 'paragraph';
}

export function isTitle(element: AppNode): element is Title {
  return element.type == 'title';
}

export function isList(element: AppNode): element is List {
  return element.type == 'list';
}