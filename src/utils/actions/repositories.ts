import { REPOSITORIES_ACTIONS } from "../constants"

export interface SearchRepositoriesAction {
  type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES
}

export interface SearchRepositoriesSuccess {
  type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_SUCCESS
  payload: string[]
}


export interface SearchRepositoriesError {
  type: REPOSITORIES_ACTIONS.SEARCH_REPOSITORIES_ERROR
  payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccess | SearchRepositoriesError
