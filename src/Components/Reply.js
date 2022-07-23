import Replies from './Replies'

function Reply() {

    let user = {
        comment: [
            "OK NOW THIS IS WORKING",
            "MY HAT IS FALLING.",
            "CHEESEBURGER",
            "CHEESEBURGER",
        ],
    };

    return (
        user.comment.map(com => {
            return <Replies comment={com} />
        })
    )
};


export default Reply