export const DOCUMENT_ENDPOINT = `/document`;
export const DOCUMENT_ITEM_ENDPOINT = (id: string) => `/document/${id}`;
export const DOCUMENT_LIST_ENDPOINT = `/document/list`;
export const DOCUMENT_ITEM_CONTENT_ENDPOINT = (id: string) => `/document/${id}/file`;

export const SUBJECT_ENDPOINT = `/subject`;
export const SUBJECT_ITEM_ENDPOINT = (id: string) => `/subject/${id}`;
export const SUBJECT_DOCUMENT_LIST_ENDPOINT = (id: string) => `/subject/${id}/documents`;
export const SUBJECT_LIST_ENDPOINT = `/subject/list`;

export const NOTE_ENDPOINT = `/note`;
export const NOTE_ITEM_ENDPOINT = (id: string) => `/note/${id}`;
export const NOTE_LIST_ENDPOINT = `/note/list`;

export const LOGIN_ENDPOINT = `/login`;
export const REGISTER_ENDPOINT = `/register`;
