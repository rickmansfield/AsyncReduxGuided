import { FETCH_PERSON_SUCCESS, FETCH_PERSON_FAIL, FETCH_PERSON_LOADING} from '../actions'

const initialState = {
  person: {
    name: {
      title: '',
      first: '',
      last: '',
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    }
    // name: {
    //   title: "Mr",
    //   first: "Tony",
    //   last: "Stark"
    // },
    // picture: {
    //   large: "https://randomuser.me/api/portraits/men/71.jpg",
    //   medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
    //   thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    // }
  },
  isFetching: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_PERSON_LOADING):
      return ({
        ...state,
        isFetching: true
      })
    case(FETCH_PERSON_SUCCESS): 
    return ({
      ...state,
      person: action.payload,
      isFetching: false
    })
    case(FETCH_PERSON_FAIL):
      return ({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};