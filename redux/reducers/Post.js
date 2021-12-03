const PostReducers=(state=[],action)=>{
    switch(action.type){
        case 'ADD_POST':
            console.log('added post')
        default:
            return state
    }
}

export default PostReducers