/* =========================================================
 * bootstrap-pincode-input.js
 *
 * =========================================================
 * Created by Ferry Kranenburg
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){"use strict";function r(r,i){this.element=r,this.settings=e.extend({},n,i),this._defaults=n,this._name=t,this.init()}var t="pincodeInput",n={inputs:4,hideDigits:!0,keydown:function(e){},complete:function(e,t,n){}};e.extend(r.prototype,{init:function(){this.buildInputBoxes()},updateOriginalInput:function(){var t="";e(".pincode-input-text",this._container).each(function(n,r){t+=e(r).val().toString()}),e(this.element).val(t)},check:function(){var t=!0;return e(".pincode-input-text",this._container).each(function(n,r){e(r).val()||(t=!1)}),t},buildInputBoxes:function(){this._container=e("<div />").addClass("pincode-input-container");var t=[];this.settings.hideDigits==0&&e(this.element).val()!=""&&(t=e(this.element).val().split("")),this.settings.hideDigits&&(this._pwcontainer=e("<div />").css("display","none").appendTo(this._container),this._pwfield=e("<input>").attr({type:"password",id:"preventautofill",autocomplete:"off"}).appendTo(this._pwcontainer));for(var n=0;n<this.settings.inputs;n++){var r=e("<input>").attr({type:"text",maxlength:"1",autocomplete:"off"}).addClass("form-control pincode-input-text").appendTo(this._container);this.settings.hideDigits?r.attr("type","password"):r.val(t[n]),n==0?r.addClass("first"):n==this.settings.inputs-1?r.addClass("last"):r.addClass("mid"),r.on("focus",function(e){this.select()}),r.on("keydown",e.proxy(function(t){this._pwfield&&(e(this._pwfield).attr({type:"text"}),e(this._pwfield).val("")),this.settings.keydown(t)},this)),r.on("keyup",e.proxy(function(t){t.keyCode==8||t.keyCode==48?(e(t.currentTarget).prev().select(),e(t.currentTarget).prev().focus()):e(t.currentTarget).val()!=""&&(e(t.currentTarget).next().select(),e(t.currentTarget).next().focus()),this.updateOriginalInput(),this.check()&&this.settings.complete(e(this.element).val(),t,this._error)},this))}this._error=e("<div />").addClass("text-danger pincode-input-error").appendTo(this._container),e(this.element).css("display","none"),this._container.insertBefore(this.element)},enable:function(){e(".pincode-input-text",this._container).each(function(t,n){e(n).prop("disabled",!1)})},disable:function(){e(".pincode-input-text",this._container).each(function(t,n){e(n).prop("disabled",!0)})},focus:function(){e(".pincode-input-text",this._container).first().select().focus()},clear:function(){e(".pincode-input-text",this._container).each(function(t,n){e(n).val("")}),this.updateOriginalInput()}}),e.fn[t]=function(n){return this.each(function(){e.data(this,"plugin_"+t)||e.data(this,"plugin_"+t,new r(this,n))})}});