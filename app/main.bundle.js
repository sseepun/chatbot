webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-container {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <app-chatbot></app-chatbot>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// Services
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
// Components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var chatbot_component_1 = __webpack_require__("./src/app/chatbot/chatbot.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chatbot_component_1.ChatbotComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [
                chat_service_1.ChatService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-app {\r\n    width: 40%;\r\n    margin: 0 30%;\r\n}\r\n\r\n.owner {\r\n    width: 100%;\r\n    text-align: end;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    color: #2095FE;\r\n    font-size: 64px;\r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.tag {\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n    color: #363636;\r\n}\r\n\r\n.chat-container {\r\n    width: 100%;\r\n    min-height: calc(100vh - 325px);\r\n    max-height: calc(100vh - 325px);\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 3px solid #2095FE;\r\n    border-radius: 10px;\r\n}\r\n\r\n.message {\r\n    width: 60%;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    border-radius: 20px;\r\n    padding: 12px 20px;\r\n    margin: 10px 10px;\r\n}\r\n\r\n.message.from {\r\n    float: left;\r\n    background: #E5E4E9;\r\n}\r\n\r\n.message.to {\r\n    float: right;\r\n    text-align: end;\r\n    background: #2095FE;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    width: calc(100% - 27px);\r\n    border: 3px solid #2095FE;\r\n    border-radius: 10px;\r\n    font-size: 18px;\r\n    padding: 8px 14px;\r\n    margin: 8px 0 15px 0;\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n    outline: none;\r\n}\r\n\r\n.button {\r\n    background: #2095FE;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding: 8px 15px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n    background: rgb(41, 143, 231);\r\n}\r\n\r\n.button:active {\r\n    background: rgb(38, 114, 180);\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n    .chat-app {\r\n        width: 55%;\r\n        margin: 0 22.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .chat-app {\r\n        width: 65%;\r\n        margin: 0 17.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .chat-app {\r\n        width: 75%;\r\n        margin: 0 12.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .chat-app {\r\n        width: 85%;\r\n        margin: 0 7.5%;\r\n    }\r\n    .title {\r\n        font-size: 56px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .chat-app {\r\n        width: 95%;\r\n        margin: 0 2.5%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-app\">\n  <div class=\"owner\">\n    By <a href=\"https://www.facebook.com/sarun.seepun\" target=\"_blank\">S.Seepun</a>\n    version 0.1\n  </div>\n  <div class=\"title\">Chat Bot</div>\n\n  <div class=\"chat-container\" id=\"chat-container\">\n    <ng-container *ngFor=\"let message of messages\">\n      <div class=\"message\" [ngClass]=\"{'from': message.sentBy==='bot', 'to':message.sentBy==='user'}\">\n        {{ message.content }}\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"tag\">Your Message</div>\n  <input #talk (keyup.enter)=\"sendMessage(talk.value); talk.value='';\" type=\"text\">\n  <a class=\"button\" (click)=\"sendMessage(talk.value); talk.value='';\">Send</a>\n</div>"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var d3 = __webpack_require__("./node_modules/d3/index.js");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
core_1.enableProdMode();
var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(elementRef, chatService) {
        this.elementRef = elementRef;
        this.chatService = chatService;
        this.messages = [
            { content: 'ยินดีต้อนรับครับ ผมคือ chat bot ที่มาจาก DialogFlow มีอะไรถามผมได้ครับ', sentBy: 'bot' }
        ];
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatContainer = d3.select(this.elementRef.nativeElement).select('.chat-container');
        this.subscription = this.chatService.observeBotResponse().subscribe(function (content) {
            _this.messages.push({ content: content, sentBy: 'bot' });
            _this.scrollBottom();
        });
    };
    ChatbotComponent.prototype.sendMessage = function (query) {
        if (query != '') {
            this.messages.push({ content: query, sentBy: 'user' });
            this.scrollBottom();
            if (query.indexOf('เวลา') > -1) {
                var now = new Date(), content = 'ตอนนี้เวลา ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ครับ';
                this.messages.push({ content: content, sentBy: 'bot' });
                this.scrollBottom();
            }
            else if (query.indexOf('วันที่') > -1) {
                var now = new Date(), content = 'วันนี้วันที่ ' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ครับ';
                this.messages.push({ content: content, sentBy: 'bot' });
                this.scrollBottom();
            }
            else {
                this.chatService.talk(query);
            }
        }
    };
    ChatbotComponent.prototype.scrollBottom = function () {
        var scrollheight = this.chatContainer.property("scrollHeight");
        d3.timeout(function () {
            document.getElementById('chat-container').scrollTop = scrollheight;
        }, 100);
    };
    ChatbotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ChatbotComponent = __decorate([
        core_1.Component({
            selector: 'app-chatbot',
            template: __webpack_require__("./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__("./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            chat_service_1.ChatService])
    ], ChatbotComponent);
    return ChatbotComponent;
}());
exports.ChatbotComponent = ChatbotComponent;


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var api_ai_javascript_1 = __webpack_require__("./node_modules/api-ai-javascript/index.ts");
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = '7089027a8ba24f398de7b243469b2bcb';
        this.client = new api_ai_javascript_1.ApiAiClient({ accessToken: this.token });
        this.subject = new Subject_1.Subject();
    }
    ChatService.prototype.talk = function (query) {
        var _this = this;
        this.client.textRequest(query)
            .then(function (response) {
            if (response.result.fulfillment.speech == '') {
                _this.subject.next('ขอโทษครับ ตอนนี้ผมยังไม่เข้าใจที่คุณถามนะครับ');
            }
            else {
                _this.subject.next(response.result.fulfillment.speech);
            }
        })
            .catch(function (err) {
            _this.subject.next(err);
        });
    };
    // Observable
    ChatService.prototype.observeBotResponse = function () {
        return this.subject.asObservable();
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map