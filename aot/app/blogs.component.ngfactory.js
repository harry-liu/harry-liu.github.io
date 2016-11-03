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
var import0 = require('../../app/blogs.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('./views/blogs.view.css.shim');
var import11 = require('@angular/core/src/animation/animation_transition');
var import12 = require('@angular/core/src/animation/animation_style_util');
var import13 = require('@angular/core/src/animation/animation_sequence_player');
var import14 = require('@angular/core/src/animation/animation_styles');
var import15 = require('@angular/core/src/animation/animation_keyframe');
var import16 = require('@angular/core/src/animation/animation_player');
var Wrapper_BlogsComponent = (function () {
    function Wrapper_BlogsComponent() {
        this.changed = false;
        this.context = new import0.BlogsComponent();
    }
    Wrapper_BlogsComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_BlogsComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_BlogsComponent;
}());
exports.Wrapper_BlogsComponent = Wrapper_BlogsComponent;
var renderType_BlogsComponent_Host = null;
var _View_BlogsComponent_Host0 = (function (_super) {
    __extends(_View_BlogsComponent_Host0, _super);
    function _View_BlogsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BlogsComponent_Host0, renderType_BlogsComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_3 = import7.UNINITIALIZED;
    }
    _View_BlogsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BlogsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BlogsComponent_0_4 = new Wrapper_BlogsComponent();
        this._appEl_0.initComponent(this._BlogsComponent_0_4.context, [], compView_0);
        compView_0.create(this._BlogsComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BlogsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BlogsComponent) && (0 === requestNodeIndex))) {
            return this._BlogsComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_BlogsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = this._BlogsComponent_0_4.context.routeAnimation;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            var animationTransition_routeAnimation = this._appEl_0.componentView.componentType.animations['routeAnimation'](this, this._el_0, ((this._expr_3 == import7.UNINITIALIZED) ? 'void' : this._expr_3), ((currVal_3 == import7.UNINITIALIZED) ? 'void' : currVal_3));
            this._expr_3 = currVal_3;
        }
        this._BlogsComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._BlogsComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_BlogsComponent_Host0.prototype.detachInternal = function () {
        var animationTransition_routeAnimation = this._appEl_0.componentView.componentType.animations['routeAnimation'](this, this._el_0, this._expr_3, 'void');
    };
    return _View_BlogsComponent_Host0;
}(import1.AppView));
function viewFactory_BlogsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BlogsComponent_Host === null)) {
        (renderType_BlogsComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_BlogsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.BlogsComponentNgFactory = new import9.ComponentFactory('ng-component', viewFactory_BlogsComponent_Host0, import0.BlogsComponent);
var styles_BlogsComponent = [import10.styles];
var BlogsComponent_routeAnimation_states = {
    '*': { opacity: 1 },
    void: {}
};
function BlogsComponent_routeAnimation_factory(view, element, currentState, nextState) {
    view.animationContext.cancelActiveAnimation(element, 'routeAnimation', (nextState == 'void'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = BlogsComponent_routeAnimation_states['*'];
    var startStateStyles = BlogsComponent_routeAnimation_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = BlogsComponent_routeAnimation_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    import12.renderStyles(element, view.renderer, import12.clearStyles(startStateStyles));
    if (((player == null) && ((currentState == 'void') && true))) {
        player = new import13.AnimationSequencePlayer([view.renderer.animate(element, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [
                startStateStyles,
                {
                    transform: 'translateX(-100%)',
                    opacity: 0
                }
            ])), import12.balanceAnimationKeyframes(collectedStyles, endStateStyles, [
                new import15.AnimationKeyframe(0, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [{}]))),
                new import15.AnimationKeyframe(1, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [{}])))
            ]), 500, 0, null)]);
        totalTime = 500;
    }
    if (((player == null) && (true && (nextState == 'void')))) {
        player = new import13.AnimationSequencePlayer([view.renderer.animate(element, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [startStateStyles])), [
                new import15.AnimationKeyframe(0, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [{
                        transform: 'true',
                        opacity: 'true'
                    }
                ]))),
                new import15.AnimationKeyframe(1, new import14.AnimationStyles(import12.collectAndResolveStyles(collectedStyles, [{
                        transform: 'translateX(100%)',
                        opacity: 0
                    }
                ])))
            ], 500, 0, null)]);
        totalTime = 500;
    }
    if ((player == null)) {
        (player = new import16.NoOpAnimationPlayer());
    }
    player.onDone(function () {
        import12.renderStyles(element, view.renderer, import12.prepareFinalAnimationStyles(startStateStyles, endStateStyles));
    });
    view.animationContext.queueAnimation(element, 'routeAnimation', player);
    return new import11.AnimationTransition(player, currentState, nextState, totalTime);
}
var renderType_BlogsComponent = null;
var _View_BlogsComponent0 = (function (_super) {
    __extends(_View_BlogsComponent0, _super);
    function _View_BlogsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BlogsComponent0, renderType_BlogsComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BlogsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    this is blog\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_BlogsComponent0;
}(import1.AppView));
function viewFactory_BlogsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BlogsComponent === null)) {
        (renderType_BlogsComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_BlogsComponent, { routeAnimation: BlogsComponent_routeAnimation_factory }));
    }
    return new _View_BlogsComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_BlogsComponent0 = viewFactory_BlogsComponent0;
//# sourceMappingURL=blogs.component.ngfactory.js.map