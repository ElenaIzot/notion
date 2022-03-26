import { DocumentState } from "./modules";

export const state: DocumentState = {
  title: {
    type: 'title',
    text: 'Main title'
  },
  list: {
    type: 'list',
    elements: ['Milk', 'Bread', 'Coffee'],
  },
  paragraph: {
    type: 'paragraph',
    text: 'some text',
  },
}
