const investDetail = {
    path: ':a',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./../components/investDetail.jsx').default);
        })
    }

}

export default investDetail;
