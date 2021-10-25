const initialState = {
    category: 0,
    sortBy: 'popular'
}

type initialState = typeof initialState

interface ActionA {
    type: string
}


const filters = (state = initialState, action: ActionA): initialState => {
    if (action.type === "SET_SORT_BY") {
        return {
            ...state,
            sortBy: action.type
        }
    }
    return state
}

export default filters