export class UserInfo {
    constructor(selectors) {
        this._userNameElement = document.querySelector(selectors.userNameSelector);
        this._userDataElement = document.querySelector(selectors.userDataSelector);
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._userNameElement.textContent;
        userInfo.data = this._userDataElement.textContent;

        return userInfo
    }

    setUserInfo(userInfo) {
        this._userNameElement.textContent = userInfo.name;
        this._userDataElement.textContent = userInfo.data;
    }
}