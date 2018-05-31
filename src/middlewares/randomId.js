export default (store) => (next) => (action) => {
    const { newRandomId, ...rest} = action
    if (!newRandomId) return next(action)

    next({
        ...rest,
        randomId: Date.now() + Math.random()
    })
}
