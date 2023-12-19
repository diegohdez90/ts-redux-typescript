import { REPOSITORIES_ACTIONS } from "../../utils/constants";

interface Repositories {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: Repositories, action: Action): Repositories => {
  switch (action.type) {
    case REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: []
      }
    case REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: []
      }
    case REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
