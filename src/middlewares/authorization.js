const authenticate = () => (req, res, next) => { next(); };

const authorize = () => (req, res, next) => authenticate()(req, res, next);

export default authorize;
