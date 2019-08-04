import { BlogActionState, BlogAction } from "./actions";

const initialstate: BlogActionState = {
  loading: false,
  error: false,
  blogList: [],
  errorMessage: ''
}

const blogReducer = (state: BlogActionState = initialstate, action: BlogAction) => {
  switch (action.type) {
    case 'GET_BLOGS_START':
      return {
        ...state,
        loading: true,
        blogList: [],
        errorMessage: ''
      }

    case 'GET_BLOGS_SUCCESS':
      return {
        ...state,
        loading: false,
        blogList: action.blogList.blogList,
        errorMessage: ''
      }
    case 'GET_BLOGS_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}

export default blogReducer;

