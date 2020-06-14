import { AnyAction } from 'redux';
import { takeEvery } from 'redux-saga/effects';

import { createRequestAction } from '../../utils/request';
import { SUBJECT_ITEM_ENDPOINT, SUBJECT_DOCUMENT_LIST_ENDPOINT } from '../../api/endpoints';

export const GET_SUBJECT = 'GET_SUBJECT';

export interface IGetSubject extends AnyAction {
  type: typeof GET_SUBJECT;
  request: {
    method: string;
    url: string;
  };
}

export const getSubject = (id: string): IGetSubject => {
  return {
    type: GET_SUBJECT,
    request: {
      method: 'GET',
      url: SUBJECT_ITEM_ENDPOINT(id),
    },
  };
};

export const GET_SUBJECT_SUCCESS = 'GET_SUBJECT_SUCCESS';

export interface IGetSubjectSuccess extends AnyAction {
  type: typeof GET_SUBJECT_SUCCESS;
  data: any;
}

export const GET_SUBJECT_DOCUMENT_LIST = 'GET_SUBJECT_DOCUMENT_LIST';

export interface IGetSubjectDocumentList extends AnyAction {
  type: typeof GET_SUBJECT_DOCUMENT_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getSubjectDocumentList = (id: string): IGetSubjectDocumentList => {
  return {
    type: GET_SUBJECT_DOCUMENT_LIST,
    request: {
      method: 'GET',
      url: SUBJECT_DOCUMENT_LIST_ENDPOINT(id),
    },
  };
};

export const GET_SUBJECT_DOCUMENT_LIST_SUCCESS = 'GET_SUBJECT_DOCUMENT_LIST_SUCCESS';

export interface IGetSubjectDocumentListSuccess extends AnyAction {
  type: typeof GET_SUBJECT_DOCUMENT_LIST_SUCCESS;
  data: any;
}

export function* watchSubject() {
  const doRequest = createRequestAction(true);

  yield takeEvery(GET_SUBJECT, doRequest);
  yield takeEvery(GET_SUBJECT_DOCUMENT_LIST, doRequest);
}

export type ISubjectActions =
  | IGetSubject
  | IGetSubjectSuccess
  | IGetSubjectDocumentList
  | IGetSubjectDocumentListSuccess;
