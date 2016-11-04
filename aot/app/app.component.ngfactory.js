/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../app/app.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/core/src/animation/animation_transition');
var import11 = require('@angular/core/src/animation/animation_style_util');
var import12 = require('@angular/core/src/animation/animation_sequence_player');
var import13 = require('@angular/core/src/animation/animation_styles');
var import14 = require('@angular/core/src/animation/animation_keyframe');
var import15 = require('@angular/core/src/animation/animation_player');
var import16 = require('../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import17 = require('../node_modules/@angular/router/src/directives/router_outlet.ngfactory');
var import18 = require('@angular/router/src/router');
var import19 = require('@angular/router/src/router_state');
var import20 = require('@angular/common/src/location/location_strategy');
var import21 = require('@angular/router/src/router_outlet_map');
var import22 = require('@angular/core/src/linker/component_factory_resolver');
var import23 = require('@angular/router/src/directives/router_link');
var import24 = require('@angular/router/src/directives/router_outlet');
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this.changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppComponent;
}());
exports.Wrapper_AppComponent = Wrapper_AppComponent;
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'my-app', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new Wrapper_AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = ['.nav[_ngcontent-%COMP%]{\n    position: fixed;\n    left:0;\n    top:40%;\n    z-index: 100;\n}\n\n.showMenuBtn[_ngcontent-%COMP%]{\n    position: fixed;\n    left:15px;\n    top:15px;\n    z-index: 100;\n}'];
var AppComponent_menuAnimation_states = {
    hide: {
        opacity: 0,
        transform: 'translateX(-100%)'
    },
    show: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    '*': {}
};
function AppComponent_menuAnimation_factory(view, element, currentState, nextState) {
    view.animationContext.cancelActiveAnimation(element, 'menuAnimation', (nextState == 'void'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = AppComponent_menuAnimation_states['*'];
    var startStateStyles = AppComponent_menuAnimation_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = AppComponent_menuAnimation_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    import11.renderStyles(element, view.renderer, import11.clearStyles(startStateStyles));
    if (((player == null) && ((currentState == 'hide') && (nextState == 'show')))) {
        player = new import12.AnimationSequencePlayer([view.renderer.animate(element, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [startStateStyles])), import11.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import14.AnimationKeyframe(0, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [{}]))),
                new import14.AnimationKeyframe(1, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 500, 0, 'ease-in')]);
        totalTime = 500;
    }
    if (((player == null) && ((currentState == 'show') && (nextState == 'hide')))) {
        player = new import12.AnimationSequencePlayer([view.renderer.animate(element, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [startStateStyles])), import11.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import14.AnimationKeyframe(0, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [{}]))),
                new import14.AnimationKeyframe(1, new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 500, 0, 'ease-in')]);
        totalTime = 500;
    }
    if ((player == null)) {
        (player = new import15.NoOpAnimationPlayer());
    }
    player.onDone(function () {
        import11.renderStyles(element, view.renderer, import11.prepareFinalAnimationStyles(startStateStyles, endStateStyles));
    });
    view.animationContext.queueAnimation(element, 'menuAnimation', player);
    return new import10.AnimationTransition(player, currentState, nextState, totalTime);
}
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'nav'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_3, 'a', new import4.InlineArray2(2, 'routerLink', '/blogs'), null);
        this._RouterLinkWithHref_8_3 = new import16.Wrapper_RouterLinkWithHref(this.parentInjector.get(import18.Router), this.parentInjector.get(import19.ActivatedRoute), this.parentInjector.get(import20.LocationStrategy));
        this._text_9 = this.renderer.createText(this._el_8, 'Blogs', null);
        this._text_10 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_3, 'a', new import4.InlineArray2(2, 'routerLink', '/cv'), null);
        this._RouterLinkWithHref_11_3 = new import16.Wrapper_RouterLinkWithHref(this.parentInjector.get(import18.Router), this.parentInjector.get(import19.ActivatedRoute), this.parentInjector.get(import20.LocationStrategy));
        this._text_12 = this.renderer.createText(this._el_11, 'CV', null);
        this._text_13 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_3, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_16 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_1, 'button', new import4.InlineArray2(2, 'class', 'btn showMenuBtn'), null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_1, 'router-outlet', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_20 = new import3.AppElement(20, 1, this, this._el_20);
        this._RouterOutlet_20_5 = new import17.Wrapper_RouterOutlet(this.parentInjector.get(import21.RouterOutletMap), this._appEl_20.vcRef, this.parentInjector.get(import22.ComponentFactoryResolver), null);
        this._text_21 = this.renderer.createText(this._el_1, '\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_8, 'click', this.eventHandler(this._handle_click_8_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        if (((token === import23.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLinkWithHref_11_3.context;
        }
        if (((token === import24.RouterOutlet) && (20 === requestNodeIndex))) {
            return this._RouterOutlet_20_5.context;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_27 = this.context.menuState;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            var animationTransition_menuAnimation = this.componentType.animations['menuAnimation'](this, this._el_3, ((this._expr_27 == import7.UNINITIALIZED) ? 'void' : this._expr_27), ((currVal_27 == import7.UNINITIALIZED) ? 'void' : currVal_27));
            this._expr_27 = currVal_27;
        }
        var currVal_8_0_0 = '/blogs';
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.detectChangesInInputProps(this, this._el_8, throwOnChange);
        var currVal_11_0_0 = '/cv';
        this._RouterLinkWithHref_11_3.check_routerLink(currVal_11_0_0, throwOnChange, false);
        this._RouterLinkWithHref_11_3.detectChangesInInputProps(this, this._el_11, throwOnChange);
        this._RouterOutlet_20_5.detectChangesInInputProps(this, this._el_20, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_28 = import4.interpolate(1, '', this.context.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setText(this._text_6, currVal_28);
            this._expr_28 = currVal_28;
        }
        this._RouterLinkWithHref_8_3.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._RouterLinkWithHref_11_3.detectChangesInHostProps(this, this._el_11, throwOnChange);
        var currVal_29 = import4.interpolate(1, '', this.context.menuWord, '');
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setText(this._text_18, currVal_29);
            this._expr_29 = currVal_29;
        }
        this._RouterOutlet_20_5.detectChangesInHostProps(this, this._el_20, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_8_3.context.ngOnDestroy();
        this._RouterLinkWithHref_11_3.context.ngOnDestroy();
        this._RouterOutlet_20_5.context.ngOnDestroy();
    };
    _View_AppComponent0.prototype.detachInternal = function () {
        var animationTransition_menuAnimation = this.componentType.animations['menuAnimation'](this, this._el_3, this._expr_27, 'void');
    };
    _View_AppComponent0.prototype._handle_click_8_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_8_0 = (this._RouterLinkWithHref_8_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_8_0);
    };
    _View_AppComponent0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = (this._RouterLinkWithHref_11_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_11_0);
    };
    _View_AppComponent0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_17_0 = (this.context.toggleMenu() !== false);
        return (true && pd_17_0);
    };
    return _View_AppComponent0;
}(import1.AppView));
function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_AppComponent, { menuAnimation: AppComponent_menuAnimation_factory }));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AppComponent0 = viewFactory_AppComponent0;
//# sourceMappingURL=app.component.ngfactory.js.map