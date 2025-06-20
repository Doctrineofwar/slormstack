"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasBuildGuard = void 0;
const core_1 = require("@angular/core");
let HasBuildGuard = class HasBuildGuard {
    constructor(buildStorageService, router) {
        this.buildStorageService = buildStorageService;
        this.router = router;
    }
    canActivate() {
        if (this.buildStorageService.getBuilds().length === 0) {
            this.router.navigate(['slorm-planner', 'create']);
            return false;
        }
        else {
            return true;
        }
    }
};
HasBuildGuard = __decorate([
    (0, core_1.Injectable)()
], HasBuildGuard);
exports.HasBuildGuard = HasBuildGuard;
//# sourceMappingURL=has-build.guard.js.map