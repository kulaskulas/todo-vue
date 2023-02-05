export default function auth({ next, router }) {
    if (localStorage.getItem('user_logged_in') == null) {
        return router.push({ name: 'login' });
    }

    return next();
}