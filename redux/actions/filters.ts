
const setSortBy = (type: string) => ({
    type: "SET_SORT_BY",
    payload: type
})

const setCategory = (catIndex: number) => ({
    type: "SET_CATEGORY",
    payload: catIndex
})