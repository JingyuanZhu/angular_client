var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
var Auth = (function () {
    function Auth() {
        this.client = '1m8wakXJ0y8giGomqF2WAZAnSf28YDiP';
        this.domain = 'joezhu0811.auth0.com';
        this.lock = new Auth0Lock(this.client, this.domain, {});
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    Auth.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    Auth.prototype.authenticated = function () {
        return tokenNotExpired();
    };
    Auth.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    return Auth;
}());
Auth = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Auth);
export { Auth };
//# sourceMappingURL=../../../../src/app/services/auth.service.js.map