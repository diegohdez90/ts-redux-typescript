import { Dispatch } from 'redux';
import axios from "axios";
import { REPOSITORIES_ACTIONS } from "../constants";
import { Action } from '../actions/repositories';

const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org$/-/v1/search', {
        params: {
          text: term
        }
      });

      const reposName = data.objects.map((result: any) => result.package.name)
      dispatch({
        type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_SUCCESS,
        payload: reposName
      })

    } catch (err) {
      dispatch({
        type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_ERROR,
        payload: (err as unknown as Error).message
      })
    }
  }
}
