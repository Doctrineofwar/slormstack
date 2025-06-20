"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlormToolsComponent = void 0;
const core_1 = require("@angular/core");
let SlormToolsComponent = class SlormToolsComponent {
    constructor(slormancerTranslateService) {
        this.slormancerTranslateService = slormancerTranslateService;
        this.TOOLS = [
            {
                link: '/slorm-planner',
                icon: 'assets/img/character/icon/1/head.png',
                name: 'Slorm Planner',
                info: 'A tool made for loading, testing and sharing builds',
                action: 'Load Slorm Planner'
            },
            {
                link: '/slorm-reaper',
                icon: 'assets/img/reaper/0/0.png',
                name: 'Slorm reapers',
                info: 'A list of all available slorm reapers (beware of spoilers)',
                action: 'Load Slorm Reapers'
            },
            {
                link: '/slorm-legendary',
                icon: 'assets/img/icon/item/ring/adventure.png',
                name: 'Slorm legendaries',
                info: 'A list of all available slorm legendaries (beware of spoilers)',
                action: 'Load Slorm Legendaries'
            }
        ];
        this.TIPS = [
            'tip_1',
            'tip_2',
            'tip_3',
            'tip_4',
            'tip_5',
            'tip_6',
            'This game isn\'t about cacti, even if cacti are fun',
            'tip_8',
            'tip_9',
            'tip_10',
            'tip_11',
            'tip_12',
            'tip_13',
        ].map(tip => this.slormancerTranslateService.translate(tip));
        this.JOKES = [
            'There is no cow level',
            'Multiplayer is not available',
            'Do not forget to add a :thumbsup: and :thumbdsown: emote to your suggestions on discord',
        ];
        this.mcRippedClicks = 0;
        this.dialog = 'Hello champion, how may i help you ?';
    }
    newMcRippedDialog() {
        this.mcRippedClicks++;
        let tips = [];
        if (this.mcRippedClicks === 1) {
            tips.push('Please choose one of the available tools below');
        }
        else if (this.mcRippedClicks === 2) {
            tips.push('I do not have more informations for you, more clicks will definitely not help');
        }
        else {
            tips.push(...this.TIPS);
            if (this.mcRippedClicks > 6) {
                tips.push(...this.JOKES);
            }
        }
        this.dialog = tips[Math.floor(Math.random() * tips.length)];
    }
};
SlormToolsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-slorm-tools',
        templateUrl: './slorm-tools.component.html',
        styleUrls: ['./slorm-tools.component.scss']
    })
], SlormToolsComponent);
exports.SlormToolsComponent = SlormToolsComponent;
//# sourceMappingURL=slorm-tools.component.js.map