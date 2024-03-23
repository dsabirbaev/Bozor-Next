


import { Like } from "../types";

const useIsLiked = (userId: string, productId: string, likes: Array<Like>) => {
    let res: Like[] = []
    likes?.forEach((like) => {
        if (like.user_id == userId && like.product_id == productId) res.push(like)
    });                
    if (typeof res == undefined) return
    return res.length > 0
}

export default useIsLiked