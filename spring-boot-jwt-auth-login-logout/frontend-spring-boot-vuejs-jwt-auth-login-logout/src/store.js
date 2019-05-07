const store = {
    state: {
        username: "",
        isAuthenticated: false,
    },
    login({isAuthenticated, username}) {
        this.state.username = username,
        this.state.isAuthenticated = isAuthenticated;
    },
    logout() {
        this.state.isAuthenticated = false;
        this.state.username = '';
    }
};

export default store;