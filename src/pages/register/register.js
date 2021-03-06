var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { AuthService } from '../../providers/auth-service/auth-service';
var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl, http) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.createSuccess = false;
        this.registerCredentials = { username: '', email: '', mobnum: '', password: '' };
    }
    RegisterPage.prototype.loginAccount = function () {
        window.location.href = 'http://localhost:8100';
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            console.log(success);
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created. Kindly Login");
            }
            else {
                _this.showPopup("Error", "Problem creating account. Please Try Again.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            window.location.reload();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-register',
        templateUrl: 'register.html',
    }),
    __metadata("design:paramtypes", [NavController, AuthService, AlertController, Http])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map