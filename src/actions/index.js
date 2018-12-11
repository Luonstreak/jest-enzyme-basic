import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

export function addComment(payload){
  return {
    type: ADD_COMMENT,
    payload
  }
}
export function deleteComment(payload){
  return {
    type: DELETE_COMMENT,
    payload
  }
}

export function fetchComments(){
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response,
  }
}

export function changeAuth(){
  return {
    type: CHANGE_AUTH
  }
}