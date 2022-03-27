import { DocumentState } from "../../modules";

export const state: DocumentState = {
  elements: [
    {
      type: 'title',
      text: 'Main title'
    },
    {
      type: 'list',
      elements: ['Milk', 'Bread', 'Coffee'],
    },
    {
      type: 'paragraph',
      text: 'some text',
    },
    {
      type: 'paragraph',
      text: 'some text',
    },
    {
      type: 'paragraph',
      text: 'some text',
    },
  ]
}
